#!/bin/bash

#For PI5 had to use the script found at : https://qengineering.eu/install%20opencv%20on%20raspberry%20pi%205.html

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

cwd=$(pwd)

echo "INSTALLING OPENCV in ~/lib"

## Install dependencies
sudo apt-get -y install build-essential checkinstall cmake pkg-config yasm
sudo apt-get -y install git gfortran
sudo apt-get -y install libjpeg-dev libjasper-dev libpng-dev libgif-dev libwebp-dev

sudo apt-get -y install libtiff5-dev libtiff-dev libgtk2.0-dev libcanberra-gtk* sudo apt-get install libavcodec-dev libavformat-dev libswscale-dev


sudo apt-get -y install libavcodec-dev libavformat-dev libswscale-dev libdc1394-22-dev
sudo apt-get -y install libxine2-dev libv4l-dev
cd /usr/include/linux
sudo ln -s -f ../libv4l1-videodev.h videodev.h
cd $cwd

sudo apt-get -y install libgstreamer0.10-dev libgstreamer-plugins-base0.10-dev libgtk2.0-dev libtbb-dev qt5-default
sudo apt-get -y install libjasper-dev libatlas-base-dev libmp3lame-dev libtheora-dev libvorbis-dev libxvidcore-dev libx264-dev libopencore-amrnb-dev libopencore-amrwb-dev libavresample-dev x264 v4l-utils

# Optional dependencies
sudo apt-get -y install libprotobuf-dev protobuf-compiler libgoogle-glog-dev libgflags-dev libgphoto2-dev libeigen3-dev libhdf5-dev doxygen

cd ~
# sudo mkdir lib
cd ~/lib
sudo git clone https://github.com/opencv/opencv.git
cd opencv
sudo git checkout master

cd ..

sudo git clone https://github.com/opencv/opencv_contrib.git
cd opencv_contrib
sudo git checkout master

cd ..
cd opencv

sudo mkdir build
cd build
 #/usr/local/lib/ ?
sudo cmake -D CMAKE_BUILD_TYPE=RELEASE \
            -D INSTALL_C_EXAMPLES=OFF \
            -D WITH_TBB=ON \
            -D ENABLE_FREETYPE=ON \
            -D ENABLE_VFPV3=ON \
            -D FFMPEG_LIBDIR=~/lib/FFmpeg/build/lib/ \
            -D WITH_V4L=ON \
            -D OPENCV_GENERATE_PKGCONFIG=ON \
            -D WITH_QT=OFF \
            -D WITH_GTK=OFF \
            -D WITH_GSTREAMER=OFF \
            -D WITH_OPENCL=ON \
            -D OPENCV_EXTRA_MODULES_PATH=~/lib/opencv_contrib/modules \
            -D CMAKE_SHARED_LINKER_FLAGS=-latomic\
            -D BUILD_SHARED_LIBS=ON \
            -D BUILD_EXAMPLES=OFF \
            -D OPENCV_ENABLE_NONFREE=ON \
            -D PYTHON3_PACKAGES_PATH=/usr/lib/python3/dist-packages \
            -D WITH_WEBP=OFF \
            -D WITH_OPENGL=ON ..

#for 4.9
# sudo cmake -D CMAKE_BUILD_TYPE=RELEASE \
# -D CMAKE_INSTALL_PREFIX=/usr/local \
# -D OPENCV_EXTRA_MODULES_PATH=~/opencv_contrib/modules \
# -D ENABLE_FREETYPE=ON \
# -D WITH_OPENMP=ON \
# -D WITH_OPENCL=OFF \
# -D BUILD_TIFF=ON \
# -D WITH_FFMPEG=ON \
# -D WITH_TBB=ON \
# -D BUILD_TBB=ON \
# -D WITH_GSTREAMER=ON \
# -D BUILD_TESTS=OFF \
# -D WITH_EIGEN=OFF \
# -D WITH_V4L=ON \
# -D WITH_LIBV4L=ON \
# -D WITH_VTK=OFF \
# -D WITH_QT=OFF \
# -D WITH_PROTOBUF=ON \
# -D OPENCV_ENABLE_NONFREE=ON \
# -D INSTALL_C_EXAMPLES=OFF \
# -D INSTALL_PYTHON_EXAMPLES=OFF \
# -D PYTHON3_PACKAGES_PATH=/usr/lib/python3/dist-packages \
# -D OPENCV_GENERATE_PKGCONFIG=ON \
# -D BUILD_EXAMPLES=OFF ..

            # 
            #

            #ROCK
            #sudo cmake .. -DCMAKE_BUILD_TYPE=Release -DCMAKE_VERBOSE_MAKEFILE=ON -DCMAKE_INSTALL_PREFIX=/opt/opencv -DWITH_OPENGL=ON -DOPENCV_ENABLE_NONFREE=ON -DBUILD_TESTS=OFF -DBUILD_PERF_TESTS=OFF -DOPENCV_GENERATE_PKGCONFIG=ON  -DWITH_1394=OFF -DBUILD_opencv_python2=OFF -DBUILD_opencv_python3=OFF -DWITH_QT=ON

sudo make install
sudo ldconfig

#copy over pkgconfig (install doesnt do this for some reason)
# sudo cp /lib/opencv4.pc /usr/lib/pkgconfig/opencv4.pc
#not present on pi 4 last test


#if core is missing try copying out core .so out of build/lib and then copying in after make install (NO IDEA WHY)

#Based on guide: https://qengineering.eu/install-opencv-4.5-on-raspberry-pi-4.html
#some dependencies may be missing above, apt update/upgrade seems to fix freetype missing err



# Rockpi make (see: https://wiki.radxa.com/Rockpi4/dev/install-opencv)
 cmake -DCMAKE_BUILD_TYPE=RELEASE \
        -DCMAKE_INSTALL_PREFIX=/usr/local \
        -D WITH_TBB=ON \
        -D ENABLE_VFPV3=OFF \
        -D WITH_OPENGL=ON \
        -D OPENCV_GENERATE_PKGCONFIG=ON \
        -D WITH_QT=OFF \
        -D WITH_GTK=OFF \
        -D CMAKE_SHARED_LINKER_FLAGS=-latomic\
        -D BUILD_SHARED_LIBS=ON \
        -DPYTHON2_EXECUTABLE=$(which python) \
        -DPYTHON_INCLUDE_DIR=/usr/include/$PY_NAME \
        -DPYTHON_INCLUDE_DIR2=/usr/include/aarch64-linux-gnu/$PY_NAME \
        -DPYTHON_LIBRARY=/usr/lib/aarch64-linux-gnu/lib$PY_NAME.so \
        -DPYTHON2_NUMPY_INCLUDE_DIRS=/usr/lib/$PY_NAME/dist-packages/numpy/core/include/ \
        \
        -DBUILD_DOCS=OFF \
        -DBUILD_EXAMPLES=OFF \
        -DBUILD_TESTS=OFF \
        -DBUILD_PERF_TESTS=OFF \
        \
        -DOPENCV_EXTRA_MODULES_PATH=../../opencv_contrib-4.0.1/modules \
        ..