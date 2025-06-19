#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
    echo $DIR
    echo "Flashing latest Firmware Bin"
    cd $DIR

    # if git pull | grep -q "Already up to date"; then
    #     echo "Already up to date! Not flashing"
    # else
        cd $DIR
        cd ..
        echo "Please wait, writing new firmware..."
        python3 os/esptool/esptool.py --no-stub flash_id
        if python3 os/esptool/esptool.py write_flash 0x0000 os/h2ctl/Latest.bin | grep -q "Could not connect"; then
            echo "Flashing Failed! Trying one more time."
            if python3 os/esptool/esptool.py write_flash 0x0000 os/h2ctl/Latest.bin | grep "Could not connect"; then
                python3 os/esptool/esptool.py --no-stub flash_id
                echo "Flashing Failed! Please try again."
                #do a reset just in case this ut us in some weird spot
                exit 1
            else
                echo "Flashing Success!"
                exit 0
            fi
        else
            echo "Flashing Success!"
            exit 0
        fi
    # fi 

