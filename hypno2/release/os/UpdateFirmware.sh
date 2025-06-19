#!/bin/bash

# Logging function with wall broadcast
log_message() {
    local message="$1"
    echo "$message"
    # Broadcast message to all users using wall
    echo "$message" | wall 2>/dev/null || true
}

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
    log_message "Firmware update directory: $DIR"
    log_message "Flashing latest Firmware Bin"
    cd $DIR

    # if git pull | grep -q "Already up to date"; then
    #     echo "Already up to date! Not flashing"
    # else
        cd $DIR
        cd ..
        log_message "Please wait, writing new firmware..."
        python3 os/esptool/esptool.py --no-stub flash_id
        if python3 os/esptool/esptool.py write_flash 0x0000 os/h2ctl/Latest.bin | grep -q "Could not connect"; then
            log_message "Flashing Failed! Trying one more time."
            if python3 os/esptool/esptool.py write_flash 0x0000 os/h2ctl/Latest.bin | grep "Could not connect"; then
                python3 os/esptool/esptool.py --no-stub flash_id
                log_message "Flashing Failed! Please try again."
                #do a reset just in case this ut us in some weird spot
                exit 1
            else
                log_message "Flashing Success!"
                exit 0
            fi
        else
            log_message "Flashing Success!"
            exit 0
        fi
    # fi 

