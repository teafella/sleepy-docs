#!/bin/bash

# GitHub Auto-Updater Script for Raspberry Pi
# Usage: ./update.sh [--force] [--check-only]

set -e  # Exit on any error

# Configuration
REPO="teafella/sleepy-docs"  # Change this to your GitHub repo
APP_NAME="VIDOS"
INSTALL_DIR="/opt/$APP_NAME"
VERSION_FILE="$INSTALL_DIR/version.txt"
BACKUP_DIR="$INSTALL_DIR/backup"
LOG_FILE="/var/log/$APP_NAME-updater.log"
SERVICE_NAME="vidos"  # systemd service name (optional)

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    local message="$(date '+%Y-%m-%d %H:%M:%S') - $1"
    echo -e "$message" | tee -a "$LOG_FILE"
    # Broadcast message to all users using wall (strip color codes)
    local clean_message="$(date '+%Y-%m-%d %H:%M:%S') - $(echo "$1" | sed 's/\x1b\[[0-9;]*m//g')"
    echo "$clean_message" | wall 2>/dev/null || true
}

# Error handling
error_exit() {
    log "${RED}ERROR: $1${NC}"
    exit 1
}

# Check if running as root
check_root() {
    if [[ $EUID -ne 0 ]]; then
        error_exit "This script must be run as root (use sudo)"
    fi
}

# Get system architecture
get_architecture() {
    local arch=$(uname -m)
    case $arch in
        aarch64)
            echo "linux-arm64"
            ;;
        armv7l)
            echo "linux-armv7l"
            ;;
        x86_64)
            echo "linux-amd64"
            ;;
        *)
            error_exit "Unsupported architecture: $arch"
            ;;
    esac
}

# Get current version
get_current_version() {

    if [[ -f "$VERSION_FILE" ]]; then
        cat "$VERSION_FILE"
    else
        echo "none"
    fi
}

# Get latest version from GitHub
get_latest_version() {
    local response
    response=$(curl -sfL "https://api.github.com/repos/$REPO/releases/latest" 2>/dev/null) || {
        error_exit "Failed to fetch release information from GitHub"
    }
    
    # More robust JSON parsing - try multiple methods
    local version=""
    
    # First try: python3 json parsing
    if command -v python3 >/dev/null 2>&1; then
        version=$(echo "$response" | python3 -c "import sys, json; print(json.load(sys.stdin)['tag_name'])" 2>/dev/null)
    fi
    
    # Second try: jq if available
    if [[ -z "$version" ]] && command -v jq >/dev/null 2>&1; then
        version=$(echo "$response" | jq -r '.tag_name' 2>/dev/null)
    fi
    
    # Third try: improved grep with better error handling
    if [[ -z "$version" ]]; then
        version=$(echo "$response" | grep -o '"tag_name"[[:space:]]*:[[:space:]]*"[^"]*"' | cut -d'"' -f4 2>/dev/null)
    fi
    
    # Fourth try: sed as fallback
    if [[ -z "$version" ]]; then
        version=$(echo "$response" | sed -n 's/.*"tag_name"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' 2>/dev/null)
    fi
    
    if [[ -z "$version" ]]; then
        # Debug: save response to temp file for inspection
        local debug_file="/tmp/github_response_debug.json"
        echo "$response" > "$debug_file"
        error_exit "Failed to parse version from GitHub response. Debug info saved to $debug_file"
    fi
    
    echo "$version"
}

# Download and verify file
download_file() {
    local url="$1"
    local output="$2"
    local max_retries=3
    local retry=0
    
    while [[ $retry -lt $max_retries ]]; do
        log "${BLUE}Downloading... (attempt $((retry + 1))/$max_retries)${NC}"
        
        if curl -L --progress-bar -o "$output" "$url"; then
            log "${GREEN}Download completed successfully${NC}"
            return 0
        else
            retry=$((retry + 1))
            if [[ $retry -lt $max_retries ]]; then
                log "${YELLOW}Download failed, retrying in 5 seconds...${NC}"
                sleep 5
            fi
        fi
    done
    
    error_exit "Failed to download after $max_retries attempts"
}

# Create backup
create_backup() {
    if [[ -d "$INSTALL_DIR" ]]; then
        log "${BLUE}Creating backup...${NC}"
        mkdir -p "$BACKUP_DIR"
        
        # Remove old backups (keep last 3)
        find "$BACKUP_DIR" -name "backup-*" -type d | sort -r | tail -n +4 | xargs rm -rf
        
        local backup_name="backup-$(date +%Y%m%d-%H%M%S)"
        # Create a temporary directory for the backup
        local temp_backup="/tmp/$backup_name"
        mkdir -p "$temp_backup"
        
        # Copy everything except the backup directory
        cp -r "$INSTALL_DIR"/* "$temp_backup/" || {
            rm -rf "$temp_backup"
            error_exit "Failed to create backup"
        }
        
        # Move the temporary backup to the final location
        mv "$temp_backup" "$BACKUP_DIR/$backup_name" || {
            rm -rf "$temp_backup"
            error_exit "Failed to move backup to final location"
        }
        
        log "${GREEN}Backup created: $BACKUP_DIR/$backup_name${NC}"
    fi
}

# Stop service if running
stop_service() {
    if systemctl is-active --quiet "$SERVICE_NAME" 2>/dev/null; then
        log "${BLUE}Stopping $SERVICE_NAME service...${NC}"
        systemctl stop "$SERVICE_NAME" || {
            log "${YELLOW}Warning: Failed to stop service $SERVICE_NAME${NC}"
        }
        return 0
    fi
    return 1
}

# Start service
start_service() {
    if systemctl is-enabled --quiet "$SERVICE_NAME" 2>/dev/null; then
        log "${BLUE}Starting $SERVICE_NAME service...${NC}"
        systemctl start "$SERVICE_NAME" || {
            error_exit "Failed to start service $SERVICE_NAME"
        }
        log "${GREEN}Service started successfully${NC}"
    fi
}

# Install update
install_update() {
    local archive_file="$1"
    local version="$2"
    local service_was_running=false
    
    # Stop service if running
    if stop_service; then
        service_was_running=true
    fi
    
    # Create backup
    create_backup
    
    # Create install directory
    mkdir -p "$INSTALL_DIR"
    
    # Extract archive
    log "${BLUE}Installing update...${NC}"
    case "$archive_file" in
        *.tar.gz)
            tar -xzf "$archive_file" -C "$INSTALL_DIR" --strip-components=1 || {
                error_exit "Failed to extract archive"
            }
            ;;
        *.zip)
            unzip -o "$archive_file" -d "$INSTALL_DIR" || {
                error_exit "Failed to extract archive"
            }
            ;;
        *)
            # Assume it's a single binary
            cp "$archive_file" "$INSTALL_DIR/$APP_NAME" || {
                error_exit "Failed to copy binary"
            }
            chmod +x "$INSTALL_DIR/$APP_NAME"
            ;;
    esac
    
    # Update version file
    echo "$version" > "$VERSION_FILE"
    
    # Set permissions
    chown -R root:root "$INSTALL_DIR"
    find "$INSTALL_DIR" -type f -name "$APP_NAME" -exec chmod +x {} \;

    # Check and update control board firmware if needed
    check_firmware_update
    
    # Ensure services are properly registered and configured
    ensure_service_registration
    
    # Start service if it was running
    # if [[ "$service_was_running" == true ]]; then
        start_service
    # fi
    
    
    log "${GREEN}Update installed successfully: $version${NC}"
}

# Rollback to previous version
rollback() {
    local latest_backup
    latest_backup=$(find "$BACKUP_DIR" -name "backup-*" -type d | sort -r | head -n1)
    
    if [[ -z "$latest_backup" ]]; then
        error_exit "No backup found for rollback"
    fi
    
    log "${YELLOW}Rolling back to backup: $(basename "$latest_backup")${NC}"
    
    stop_service
    
    # Replace current installation with backup
    rm -rf "$INSTALL_DIR"/*
    cp -r "$latest_backup"/* "$INSTALL_DIR/" || {
        error_exit "Failed to restore from backup"
    }
    
    start_service
    
    log "${GREEN}Rollback completed${NC}"
}

# Ensure services are properly registered and enabled
ensure_service_registration() {
    log "${BLUE}Ensuring system services are properly registered...${NC}"
    
    local service_script="$INSTALL_DIR/release/os/InstallServices.sh"
    local service_files_dir="$INSTALL_DIR/release/os"
    
    # Install services using the provided script if available
    if [[ -f "$service_script" ]]; then
        log "${BLUE}Running InstallServices.sh...${NC}"
        cd "$INSTALL_DIR/release/os"
        if ! bash "./InstallServices.sh"; then
            log "${YELLOW}Warning: InstallServices.sh failed, attempting manual service installation${NC}"
        fi
        cd - > /dev/null
    else
        log "${YELLOW}InstallServices.sh not found, attempting manual service installation${NC}"
    fi
    
    # Manual service installation as fallback
    if [[ -f "$service_files_dir/vidos.service" ]]; then
        cp "$service_files_dir/vidos.service" "/etc/systemd/system/vidos.service"
        log "${GREEN}VIDOS service file installed${NC}"
    else
        log "${YELLOW}Warning: vidos.service not found in release${NC}"
    fi
    
    if [[ -f "$service_files_dir/vidos-updater.service" ]]; then
        cp "$service_files_dir/vidos-updater.service" "/etc/systemd/system/vidos-updater.service"
        log "${GREEN}VIDOS updater service file installed${NC}"
    else
        log "${YELLOW}Warning: vidos-updater.service not found in release${NC}"
    fi
    
    # Reload systemd and enable services
    systemctl daemon-reload
    
    # Enable VIDOS service
    if systemctl enable vidos.service; then
        log "${GREEN}✓ VIDOS service enabled successfully${NC}"
    else
        log "${YELLOW}Warning: Failed to enable VIDOS service${NC}"
    fi
    
    # Verify service target path exists
    if [[ -f "$INSTALL_DIR/release/LaunchVidos.sh" ]]; then
        log "${GREEN}✓ Service target path verified: $INSTALL_DIR/release/LaunchVidos.sh${NC}"
    else
        log "${YELLOW}Warning: Service target path not found: $INSTALL_DIR/release/LaunchVidos.sh${NC}"
    fi
    
    # Show final service status for verification
    if systemctl is-enabled vidos.service >/dev/null 2>&1; then
        log "${GREEN}✓ VIDOS service is properly registered and will start on boot${NC}"
    else
        log "${YELLOW}Warning: VIDOS service may not be properly enabled${NC}"
    fi
}

# Check if firmware needs updating
check_firmware_update() {
    local firmware_dir="$INSTALL_DIR/release/os/h2ctl"
    local backup_dir="$BACKUP_DIR"

    # print the above
    # log "${BLUE}Firmware directory: $firmware_dir${NC}"
    # log "${BLUE}Backup directory: $backup_dir${NC}"
    
    # Find the newest firmware in backups with creation timestamp
    local backup_firmware
    backup_firmware=$(find "$backup_dir" -name "*.bin" -type f -printf "%p\n" | sort -n | tail -1)
    local backup_firmware_time=$(stat -c '%W' "$backup_firmware")

    #print the backup firmware time and file
    # log "${BLUE}Backup firmware creation time: $backup_firmware_time${NC}"
    # log "${BLUE}Backup firmware file: $backup_firmware${NC}"
    
    # Find the newest firmware in current dir with creation timestamp
    local new_firmware
    new_firmware=$(find "$firmware_dir" -name "*.bin" -type f -printf "%p\n" | sort -n | tail -1)
    local new_firmware_time=$(stat -c '%W' "$new_firmware")

    #print the new firmware time and file
    # log "${BLUE}New firmware creation time: $new_firmware_time${NC}"
    # log "${BLUE}New firmware file: $new_firmware${NC}"
    
    if [[ -z "$new_firmware" ]]; then
        log "${YELLOW}Warning: No new firmware file found${NC}"
        return
    fi
    
    if [[ -z "$backup_firmware" ]]; then
        log "${YELLOW}Warning: No backup firmware found for comparison${NC}"
        return
    fi
    
    if [[ -f "$backup_firmware" && -f "$new_firmware" ]]; then
        if [[ "$force_update" == true ]]; then
            log "${YELLOW}Forcing firmware update (--flag specified)${NC}"
            #print whether the new or old firmware is newer based on creation time
            if [ "$new_firmware_time" -gt "$backup_firmware_time" ]; then
                log "${GREEN}New firmware is newer than backup${NC}"
            else
                log "${GREEN}Backup firmware is newer or equal.${NC}"
            fi
        fi
        if [[ "$force_update" == true ]] || [ "$new_firmware_time" -gt "$backup_firmware_time" ]; then
            log "${BLUE}New control board firmware detected, updating...${NC}"
            local update_firmware_script="$INSTALL_DIR/release/os/UpdateFirmware.sh"
            if [ -f "$update_firmware_script" ]; then 
                cd "$INSTALL_DIR/release/os"
                if ! ./UpdateFirmware.sh; then
                    log "${YELLOW}Warning: Firmware update failed - continuing with main update${NC}"
                else
                    log "${GREEN}Firmware update completed${NC}"
                fi
                cd - > /dev/null
            else
                log "${YELLOW}Warning: UpdateFirmware.sh not found${NC}"
            fi
        else
            log "${GREEN}Firmware matches backup - no update needed${NC}"
        fi
    else
        log "${YELLOW}Warning: Could not find firmware files to compare${NC}"
    fi
}

# Main update function
perform_update() {
    local force_update="$1"
    
    local current_version
    local latest_version
    local architecture
    
    current_version=$(get_current_version)
    latest_version=$(get_latest_version)
    architecture=$(get_architecture)
    
    log "Current version: $current_version"
    log "Latest version: $latest_version"
    # log "Architecture: $architecture"
    
    if [[ "$current_version" == "$latest_version" && "$force_update" != true ]]; then
        log "${GREEN}Already up to date${NC}"
        return 0
    fi
    
    # Determine download filename
    local filename="${APP_NAME}-${architecture}"
    local download_url="https://github.com/$REPO/releases/download/$latest_version/$filename"
    
    # Try common extensions if base filename fails
    local temp_file="/tmp/${filename}"
    local extensions=("" ".tar.gz" ".zip")
    local downloaded=false

    # log "Trying download URL: https://github.com/$REPO/releases/download/$latest_version/"
    
    for ext in "${extensions[@]}"; do
        
        # log "Attempting filename: $filename$ext"

        local try_url="${download_url}${ext}"
        local try_file="${temp_file}${ext}"
       
        # log "${BLUE}Trying: $try_url${NC}"
        
        if curl -sf --head "$try_url" >/dev/null 2>&1; then
            download_file "$try_url" "$try_file"
            install_update "$try_file" "$latest_version"
            rm -f "$try_file"
            downloaded=true
            # sudo reboot now
            break
        fi
    done
    
    if [[ "$downloaded" != true ]]; then
        error_exit "Could not find release file for architecture $architecture"
    fi
}

# Print usage
usage() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --check-only    Check for updates but don't install"
    echo "  --force         Force update even if versions match"
    echo "  --rollback      Rollback to previous version"
    echo "  --help          Show this help message"
    echo ""
    echo "Configuration (edit script):"
    echo "  REPO: $REPO"
    echo "  APP_NAME: $APP_NAME"
    echo "  INSTALL_DIR: $INSTALL_DIR"
}

# Main script
main() {
    local check_only=false
    local force_update=false
    local do_rollback=false
    
    # Parse arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            --check-only)
                check_only=true
                shift
                ;;
            --force)
                force_update=true
                shift
                ;;
            --rollback)
                do_rollback=true
                shift
                ;;
            --help)
                usage
                exit 0
                ;;
            *)
                error_exit "Unknown option: $1"
                ;;
        esac
    done
    
    # Create log file if it doesn't exist
    mkdir -p "$(dirname "$LOG_FILE")"
    touch "$LOG_FILE"
    
    log "${BLUE}=== GitHub Auto-Updater Started ===${NC}"
    
    if [[ "$do_rollback" == true ]]; then
        check_root
        rollback
        exit 0
    fi
    
    if [[ "$check_only" == true ]]; then
        log "Checking for updates..."
        local current_version
        local latest_version
        
        current_version=$(get_current_version)
        latest_version=$(get_latest_version)
        
        log "Current version: $current_version"
        log "Latest version: $latest_version"
        
        if [[ "$current_version" != "$latest_version" ]]; then
            log "Update available!"
            exit 1
        else
            log "Up to date"
            exit 0
        fi
    fi
    
    check_root
    perform_update "$force_update"
    
    log "${GREEN}=== Update Process Completed ===${NC}"
}

# Run main function with all arguments
main "$@"