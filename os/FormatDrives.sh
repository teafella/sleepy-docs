#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

#USB drive formatting,formats SDA AND SDB

(echo o; echo n; echo -ne '\n'; echo -ne '\n';echo -ne '\n';  echo -ne '\n'; echo t; echo b; echo w;) | sudo fdisk /dev/sda
echo "SDA fomatting..."
echo "Try making SDA1 FAT32"
sudo mkfs.vfat /dev/sda1

sudo mount /dev/sda1 /media/usb0

# echo "Loading Default Sleepy Files"
# sudo mkdir /media/usb0/presets
# sudo cp -r ~/.temp/assets/videos/sleepy /media/usb0/


# (echo o; echo n; echo -ne '\n'; echo -ne '\n';echo -ne '\n';  echo -ne '\n'; echo t; echo b; echo w;) | sudo fdisk /dev/sdb
# echo "SDB formatting..."
# sudo umount /dev/sdb1
# echo "Try making SDB1 FAT32"
# sudo mkfs.vfat /dev/sdb1
