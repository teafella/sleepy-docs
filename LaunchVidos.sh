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

    #if the pi setting is to boot to CLI run VIDOS
    if raspi-config nonint get_boot_cli | grep -q "0"; then
        echo "CLI_MODE, Starting VIDOS"
		# echo "Checking for Updates"
		# sudo ./os/CheckForFirmwareUpdates.sh

        # Check update_required flag in version.json and set shell flag
        UPDATE_REQUIRED=false
        # Check git status first
        echo "Checking git repository status..."
        git fetch
        GIT_STATUS=$(git status)

        if echo "$GIT_STATUS" | grep -q "Your branch is up to date"; then
            echo "Local repository is up to date with remote."
        else
            echo "Local repository is not up to date with remote."
            echo "Changes detected:"
            git status
            UPDATE_REQUIRED=true
        fi

        # Place update logic here if needed
        if [ "$UPDATE_REQUIRED" = true ]; then
            
            echo "Update is Available!"
            ls
            echo "Pulling Updates. Please Wait..."

            echo "Updating VIDOS Main Engine"
            if git pull | grep -q "Already up to date"; then
                echo "Already up to date!"
            else
                echo "Repo updated!"
            fi

            #check for updates in sleepy_binaries
            sudo ./os/CheckForFirmwareUpdates.sh

			echo "Updating Sleepy PCB Firmware"
			sudo ./os/UpdateFirmware.sh
            # echo "Running update logic..."
            # : # (no-op, replace with your update command)
        fi

        # save the date of the latest git commit 
        GIT_COMMIT_DATE=$(sudo -E -u $(logname) git log -1 --format="%cd" --date=format:"%b %d, %Y")
        echo "Latest git commit date: $GIT_COMMIT_DATE"
        #save the date to os/version.json
        mkdir -p ./os/version.json
        echo "{\"date\": \"$GIT_COMMIT_DATE\"}" > ./os/version.json
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


