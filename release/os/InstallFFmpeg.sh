#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

cwd=$(pwd)

echo "INSTALLING FFMPEG in ~/lib"


# FFMPEG
# sudo apt-get install libomxil-bellagio-dev; #
cd /usr/src
sudo git clone --depth 1 https://code.videolan.org/videolan/x264
cd x264
sudo ./configure --enable-static --disable-opencl --extra-cflags="-march=armv8-a+crc -mfpu=neon-fp-armv8 -mtune=cortex-a53" --enable-shared --enable-pic
sudo make -j4
sudo make -j4 install
sudo ldconfig

# ffmpeg compilation
sudo mkdir ~/lib/
cd ~/lib/
sudo git clone https://github.com/FFmpeg/FFmpeg.git
# 
cd FFmpeg
sudo mkdir build
sudo ./configure --prefix="/home/pi/lib/FFmpeg/build" --arch=armel --target-os=linux --enable-gpl --enable-libx264 --extra-cflags="-march=armv8-a+crc -mfpu=neon-fp-armv8 -mtune=cortex-a53" --enable-omx --enable-omx-rpi --enable-shared --enable-pic --enable-static --enable-postproc 
sudo make -j4 install
sudo ldconfig

cd ~/lib/FFmpeg/build/lib/pkgconfig
sudo cp *.pc /usr/lib/pkgconfig #put pkgconfig in default path


#latest pi4 ffmpeg installation command (CM4 Hypno proto)
#sudo ./configure  --prefix="/home/pi/lib/FFmpeg/build"  --extra-cflags="-I/usr/local/include"     --extra-ldflags="-L/usr/local/lib"     --extra-libs="-lpthread -lm -latomic"     --arch=armel     --enable-gmp     --enable-gpl          --enable-libfreetype --enable-libx264     --enable-mmal     --enable-nonfree --enable-version3 --target-os=linux --enable-pthreads --enable-hardcoded-tables --enable-shared --enable-static --enable-postproc