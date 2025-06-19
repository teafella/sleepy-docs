#!/bin/bash
    #sudo raspi-config nonint do_boot_behaviour B4 #for desktop logged in
    #sudo raspi-config nonint do_boot_behaviour B2 #for CLI logged in

    sudo raspi-config nonint do_boot_behaviour B2
    sudo reboot now


