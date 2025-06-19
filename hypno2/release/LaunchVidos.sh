#!/bin/bash

#rotate command line
#echo 3 | sudo tee /sys/class/graphics/fbcon/rotate #dont do this here since it totally messed with the touchscreen evdev readings

# export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/pi/lib/ndi
#ndi patch for rock
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/rock/VIDOS/lib/ndi

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
cd $DIR
    cd $DIR
    # ./os/UpdateFirmware.sh  #slows down startup quite a bit since it needs network access to check for updates
	#check on if SSD mounted correctly at /media/ssd, see directions: https://gist.github.com/a-maumau/b826164698da318f992aad5498d0d934
	echo "Launching VIDOS"
	# while true 
	# do
	# git pull
	#camera driver suggessted optimizations ( in .)
	sudo rmmod uvcvideo
	sudo modprobe uvcvideo timeout=5000 nodrop=1  quirks=0x80 #

	#Bluetooth reset (sometimes glitchy on startup)
	# sudo systemctl stop bluetoth
	# sudo systemctl start bluetooth

	# # make sure other instances arent running
	# sudo systemctl stop v
	# sudo systemctl stop vidos

    #sudo raspi-config nonint do_boot_behaviour B4 #for desktop logged in
    #sudo raspi-config nonint do_boot_behaviour B2 #for CLI logged in

    # Function to check exit status and run updater if needed
    check_exit_and_update() {
        local exit_code=$1
        local program_name="$2"
        
        if [ $exit_code -eq 0 ]; then
            echo "$program_name completed successfully"
        elif [ $exit_code -eq 130 ]; then
            echo -e "\033[0;32m\n$program_name was interrupted by user (Ctrl+C) - this is fine\033[0m"
        else
            echo "ERROR: $program_name exited with code $exit_code"
            echo "Running updater to fix potential issues..."
            if [ -f "./os/Updater.sh" ]; then
                sudo ./os/Updater.sh
            else
                echo "ERROR: Updater.sh not found at ./os/Updater.sh"
            fi
        fi
    }

    #if the pi setting is to boot to CLI run VIDOS
    if raspi-config nonint get_boot_cli | grep -q "0"; then
        echo "CLI_MODE, Starting VIDOS"

        sudo nice --18 ./main.out  2>&1 | tee ./log.txt
        check_exit_and_update $? "VIDOS main program"
    else
        echo "DESKTOP_MODE, Starting Key Emulation Scripts"
        sudo python3 ./os/h2keyemu.py
    fi
    
    #check if x is running somehow? (not good bc on desktop boot this reads before x starts)
    # if ps -e | grep -q "X"; then
    #     echo "X FOUND"
        
    # else
    #     echo "NO X, RUNNING"
    # fi
	# ./main.out
	# done

# fi 


