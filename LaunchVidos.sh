#!/bin/bash

#rotate command line
#echo 3 | sudo tee /sys/class/graphics/fbcon/rotate #dont do this here since it totally messed with the touchscreen evdev readings

# export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/pi/lib/ndi
#ndi patch for rock
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/rock/VIDOS/lib/ndi

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
cd $DIR

# sudo pigpiod

# gpio mode 14 in
# gpio mode 15 in
# gpio mode 16 in

# BUTTON1="$(gpio read 14)"
# BUTTON2="$(gpio read 15)"
# BUTTON3="$(gpio read 16)"

# Set pins to white
# {0,1, 2}, {3, 4, 5}, {6,7,13}
# gpio mode 0 out
# gpio mode 1 out
# gpio mode 2 out
# gpio mode 3 out
# gpio mode 4 out
# gpio mode 5 out
# gpio mode 6 out
# gpio mode 7 out
# gpio mode 13 out

#enter clone mode if all buttons are held on startup
# if [[ 1 == ${BUTTON1} && 1 == ${BUTTON2} && 1 == ${BUTTON3} ]]; then 
#     echo "ENTER CLONE MODE"
#     gpio write 0 0
# 	gpio write 1 0
# 	gpio write 2 1
# 	gpio write 3 0
# 	gpio write 4 0
# 	gpio write 5 1
# 	gpio write 6 0
# 	gpio write 7 0
# 	gpio write 13 1
# 	# while [ 1 ]; do
# 	# 	ls
# 	# 	cd ..
# 	# 	sudo ./clone.sh
# 	# done

# else
	# gpio write 0 0
	# gpio write 1 0
	# gpio write 2 0
	# gpio write 3 0
	# gpio write 4 0
	# gpio write 5 0
	# gpio write 6 0
	# gpio write 7 0
	# gpio write 13 0

	#sudo raspi-config --expand-rootfs

	# echo "CHECKING FOR HYPNO UPDATES!"
	# echo "---------------------------"
	# git pull

	# sudo systemctl enable getty@ttyGS0.service #for mirroring the terminal to upstream serial device


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

    #if the pi setting is to boot to CLI run VIDOS
    if raspi-config nonint get_boot_cli | grep -q "0"; then
        echo "CLI_MODE, Starting VIDOS"
		# echo "Checking for Updates"
		# sudo ./os/CheckForUpdates.sh

        # Check update_required flag in version.json and set shell flag
        UPDATE_REQUIRED=false
        if [ -f ./os/version.json ]; then
            if command -v jq >/dev/null 2>&1; then
                update_required_value=$(jq -r '.update_required' ./os/version.json)
                if [ "$update_required_value" = "true" ]; then
                    echo "Update is required! (update_required is true in version.json)"
                    UPDATE_REQUIRED=true
                else
                    echo "Update is NOT required. (update_required is false or missing in version.json)"
                fi
            else
                if grep -q '"update_required": *true' ./os/version.json; then
                    echo "Update is required! (update_required is true in version.json)"
                    UPDATE_REQUIRED=true
                else
                    echo "Update is NOT required. (update_required is false or missing in version.json)"
                fi
            fi
        fi

        # Place update logic here if needed
        if [ "$UPDATE_REQUIRED" = true ]; then
            # Example: sudo ./os/CheckForUpdates.sh
            echo "Update is required! pulling new version from net (update_required is true in version.json)"
            sudo ./os/CheckForUpdates.sh

			echo "Updating VIDOS Main Engine"
			sudo ./os/UpdateEngine.sh

			echo "Updating Sleepy PCB Firmware"
			sudo ./os/UpdateFirmware.sh
            # echo "Running update logic..."
            : # (no-op, replace with your update command)
        fi

		echo "Starting VIDOS"
        sudo nice --18 ./main.out  2>&1 | tee ./log.txt
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


