#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
cd $DIR

sudo cp vidos.service /etc/systemd/system/vidos.service
sudo cp vidos-updater.service /etc/systemd/system/vidos-updater.service #copy but dont enable
sudo systemctl enable vidos

# sudo cp server.service /etc/systemd/system/server.service
# sudo systemctl enable server

#usb ethernet gadget on pi5
#see: https://github.com/verxion/RaspberryPi/blob/main/Pi5-ethernet-and-power-over-usbc.md
#sudo cp usbgadget.service /etc/systemd/system/usbgadget.service
#sudo systemctl enable usbgadget.service