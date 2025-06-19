---
description: A full description of Hypno's "Features".
---

# Hypno Manual

{% hint style="info" %}
As of May 2024 use of Hypno in Eurorack is no longer supported by Sleepy Circuits and the expanders have been discontinued due to reliability issues. If you are a new user plan to use Hypno as a standalone device.
{% endhint %}

## [**Hypno PDF Manual 2.4**](https://www.dropbox.com/scl/fi/k2eawjx9bl6vclq0506gn/HypnoManualFull2.4.pdf?rlkey=6eizk0d4bk5m4y0dxr6h4u02h\&dl=1)

<details>

<summary>Old Firmware Revision PDF Manuals</summary>

* [Hypno PDF Manual 2.3](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MihHguwCJe4er6oaMXF%2Fuploads%2FNIOkVlVzsUBDCASaDoie%2FHypnoManualFull2.3.pdf?alt=media\&token=48395878-00cd-4bbe-8a6a-39bad994a62e)
* [Hypno PDF Manual <= 2.2](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MihHguwCJe4er6oaMXF%2Fuploads%2FmGt82dgsO6ZG08zac9ai%2FHypnoManualFunctional2.pdf?alt=media\&token=6228af1b-1310-4b86-925a-b8fbb617f869)

</details>

## Video Mega Demo

{% embed url="https://youtu.be/0u0IHVW4dfY" %}

{% hint style="success" %}
Trying to decide whether you need a kit or a prebuilt? Not sure which Pi you want with your Hypno?  Check out our: [Hypno Expanders & Pi Selection guide](../archived-deprecated/historical-hypno-versions-expanders-and-pi-variants.md)
{% endhint %}

{% hint style="info" %}
Need more help? [Read the FAQ](hypno-faq.md), Ask a Question on the [Forum](https://forum.sleepycircuits.com), or [Contact Us](https://sleepycircuits.com/contact)
{% endhint %}

## No labels? No problem. Try the "Help Text" Mode!

<div align="left"><img src="../.gitbook/assets/Help Mode Graphic (1).png" alt=""></div>

## Updating Hypno

{% content-ref url="hypno-firmware.md" %}
[hypno-firmware.md](hypno-firmware.md)
{% endcontent-ref %}

## Hypno IO Overview

### Hypno w/ PI3B+&#x20;

<div><figure><img src="../.gitbook/assets/Hypno Pi3B+IO (1).jpg" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/PI3B+ SideIO Labeled (2).jpg" alt=""><figcaption></figcaption></figure></div>

### Hypno w/PI4

<div><figure><img src="../.gitbook/assets/Pi4-IO_BACK (1).jpg" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/Pi4-IOLabeled-SIDE (1).jpg" alt=""><figcaption></figcaption></figure></div>

## Basic Hypno Setups

Below are the 3 "most basic" setups with Hypno.&#x20;

{% hint style="danger" %}
**The circled numbers indicate** **the order in which the connections should be made.**
{% endhint %}

{% hint style="info" %}
Plug an HDMI cable into your display (TV, monitor, projector, caputre card, etc...), power your display on, and plug the other end of the HDMI cable into the Hypno **BEFORE** powering the Hypno on.
{% endhint %}

![](<../.gitbook/assets/Artboard 1-100.jpg>)

![](<../.gitbook/assets/Artboard 1 copy 2-100.jpg>)

![](<../.gitbook/assets/Artboard 1 copy-100.jpg>)

## Midi **Chart/**&#x4D;ap (CH 16)

Hypno can act as a USB-MIDI host through its front microUSB port (or rear USB-A ports on a completed Hypno Kit), allowing you to edit or animate the module’s parameters with MIDI controllers, keyboards and more. In some cases, a USB OTG (microUSB adapter) is necessary. A list of recommended adapters and known-compatible MIDI devices is available [on the forum.](https://forum.sleepycircuits.com/t/list-of-usb-accessories-that-work-with-hypno/127/)&#x20;

_Note: direct host to host USB-MIDI connections, such as between Hypno and a laptop, are not supported._

<figure><img src="../.gitbook/assets/Hypno 2.4 MIDI Chart (1).png" alt=""><figcaption><p>Chart for Hypno 2.4 +</p></figcaption></figure>

When organizing \[presets via the usb the presets follow the below naming scheme.&#x20;

* patch” 0 - 1 - 2 “.json” are the three presets that are saved by default on the Hypno and are only recallable with the button combination (see page 9 of the manual)
* From “patch3.json” on, you can recall them with a Eb0 message on midi channel 16
* As the [Midi Quick Guide](https://www.youtube.com/watch?v=xghMVRDGoV8) video says, midi F# G# and A# keys are used to trigger the three buttons of the Hypno, meaning that in the naming system, you have to mind skipping numbers corresponding to those keys ! For instance, “patch6.json” won’t work

_(Thanks @_[_mcdouglas_](https://forum.sleepycircuits.com/u/mcdouglas) _from the forum for the naming scheme breakdown!)_

## Video Quick-Guides

### Getting Started

{% tabs %}
{% tab title="Power" %}
{% embed url="https://www.youtube.com/watch?v=gKvyh9AVn1Y&list=PL7VnyiHlTILPsBFcGsfoDnJ0W5kIDI5GX&index=14" %}
{% endtab %}

{% tab title="Enclosure" %}
{% embed url="https://www.youtube.com/watch?v=ydF1L9ItOBE&list=PL7VnyiHlTILPsBFcGsfoDnJ0W5kIDI5GX&index=15" %}
{% endtab %}

{% tab title="Help Mode" %}
{% embed url="https://www.youtube.com/watch?v=hHmnN81uQUY&list=PL7VnyiHlTILPsBFcGsfoDnJ0W5kIDI5GX&index=1" %}
{% endtab %}
{% endtabs %}

### Engine Basics

{% tabs %}
{% tab title="Shapes" %}
{% embed url="https://youtu.be/qDwflfeZmxU" %}
{% endtab %}

{% tab title="Colorizer" %}
{% embed url="https://youtu.be/E8bX5b1JfWU" %}
{% endtab %}

{% tab title="Feedback Modes" %}
{% embed url="https://youtu.be/KtKb19NwFS4" %}
{% endtab %}

{% tab title="Feedback Controls" %}
{% embed url="https://www.youtube.com/watch?v=INt9_PE3dv8&list=PL7VnyiHlTILPsBFcGsfoDnJ0W5kIDI5GX&index=4" %}
{% endtab %}
{% endtabs %}

### Pages & UI

{% tabs %}
{% tab title="Fractals & Self Mod" %}
{% embed url="https://www.youtube.com/watch?v=Q9NHY-CCu6U&list=PL7VnyiHlTILPsBFcGsfoDnJ0W5kIDI5GX&index=5" %}
{% endtab %}

{% tab title="Button Patching" %}
{% embed url="https://www.youtube.com/watch?v=1uv79z1z4bA&list=PL7VnyiHlTILPsBFcGsfoDnJ0W5kIDI5GX&index=6" %}
{% endtab %}

{% tab title="Cropping & Keying" %}
{% embed url="https://www.youtube.com/watch?v=pjmfp4ab6Sw&list=PL7VnyiHlTILPsBFcGsfoDnJ0W5kIDI5GX&index=8" %}
{% endtab %}

{% tab title="Presets" %}
{% embed url="https://www.youtube.com/watch?v=JvqTCcC8ud0&list=PL7VnyiHlTILPsBFcGsfoDnJ0W5kIDI5GX&index=7" %}
{% endtab %}
{% endtabs %}

### Video Processing, Sampling & Advanced Functionality

{% tabs %}
{% tab title="Advanced Shaping" %}
{% embed url="https://youtu.be/my_gr449_Yo" %}
{% endtab %}

{% tab title="Video In" %}
{% embed url="https://www.youtube.com/watch?v=CurmVsxpubY&list=PL7VnyiHlTILPsBFcGsfoDnJ0W5kIDI5GX&index=8" %}
{% endtab %}

{% tab title="USB Sampling" %}
{% embed url="https://www.youtube.com/watch?v=x9mkvRHckG4&list=PL7VnyiHlTILPsBFcGsfoDnJ0W5kIDI5GX&index=10" %}
{% endtab %}

{% tab title="USB File Prep" %}
{% embed url="https://www.youtube.com/watch?v=a6ySRPMWjfw&list=PL7VnyiHlTILPsBFcGsfoDnJ0W5kIDI5GX&index=9&t=1s" %}
{% endtab %}

{% tab title="MIDI" %}
{% embed url="https://www.youtube.com/watch?v=xghMVRDGoV8&list=PL7VnyiHlTILPsBFcGsfoDnJ0W5kIDI5GX&index=9" %}
{% endtab %}
{% endtabs %}

## In-Depth Sleepy Tutorials

### Hypno Workflow & Concepts

{% tabs %}
{% tab title="Intro To Audiovisuals (w/ Mother 32)" %}
{% embed url="https://www.youtube.com/watch?v=2NjUEZZtq_0&t=2s" %}


{% endtab %}

{% tab title="Live Video Input | iOS & USB" %}
{% embed url="https://youtu.be/JLVM5uxzAhk" %}


{% endtab %}

{% tab title="Video Sampling w/ USB Drive" %}
{% embed url="https://www.youtube.com/watch?v=x0gzylsGYHc" %}
{% endtab %}
{% endtabs %}

### Using Other Gear with Hypno

{% tabs %}
{% tab title="Ableton" %}
{% embed url="https://youtu.be/3AMOFpY0HpE" %}
{% endtab %}

{% tab title="Edirol V4" %}
{% embed url="https://youtu.be/GXriAjCdTdY" %}
{% endtab %}

{% tab title="Max MSP + Hypno" %}
{% embed url="https://youtu.be/cmdeG2SnOl8" %}


{% endtab %}

{% tab title="OP-Z + Hypno" %}
{% embed url="https://www.youtube.com/watch?v=KxKJ7ShE5RI" %}


{% endtab %}
{% endtabs %}

## Using Hypno as a Transition/Texture Generator for Content Creation&#x20;

{% embed url="https://youtu.be/3_crgKlM1FQ" %}

## UVC Video Input (Cameras & Capture Cards)

As of firmware revision 2.0, Hypno is capable of accepting video input from UVC compliant devices (USB 2.0, MJPEG compressed output), such as webcams or capture cards, through its top USB port. Our forum guide will walk you through setting up and troubleshooting this awesome new feature.&#x20;

![](<../.gitbook/assets/Artboard 1 copy 5-100.jpg>)

As of [Firmware 2.2](https://forum.sleepycircuits.com/t/hypno-firmware-2-2/520?u=sleepybrian), Hypno can also load 720x480 resolution .MP4 videos and .JPEG Images from a connected USB drive. See the PDF Manual  for more information (quick guide video coming soon).

![](<../.gitbook/assets/Artboard 1 copy 7-100.jpg>)

* Video Input can be switched on-the-fly video loading from USB
  * Navigate to the root folder and take the file index knob all the way to the right (Clockwise)

[UVC Video Input Setup & Troubleshooting Guide](https://forum.sleepycircuits.com/t/uvc-video-input-setup-and-troubleshooting-guide/235)

## Video & Image Sampling Via USB

Hypno is able to load and loop videos on a USB drive, just plug one in to the USB port on the top or with a USB-micro to USB-A adapter depending on your Hypno version and it will automatically load the first video or image that it finds!

![](<../.gitbook/assets/Artboard 1 copy 7-100 (1).jpg>)

{% hint style="info" %}
For now, Hypno loads only one video/image or UVC input at a time via the teal shape
{% endhint %}

Place files in root directory or in a folder. Hypno will explore folders when exploring the root directory and load all mp4s but folder based video selection is only available for 1 level of folders.

### Preparing your USB Drive

Recommended USB Drive Filesystem Format is FAT32.&#x20;

Hypno also supports filesystems: vfat ext2 ext3 ext4 ntfs-3g ntfs exfat hfsplus&#x20;

{% hint style="warning" %}
Filesystem formatting may need further real world testing, please report issues [in the forum.](https://forum.sleepycircuits.com/t/hypno-2-2-3-release/663)
{% endhint %}

### Preparing your Files

**Images**: Use square or common (640x480 recommended) resolution JPEGs

**Videos:** Use 640x480 (or 720x480 for widescreen) .MP4s (480p30) for best performance (no length requirement)

### Converting Your Video Files with Handbrake

* Download [Handbrake](https://handbrake.fr/)
* Click Open Source and select your video
* Select the 480p30fast preset – this should convert the source file to a 640x480 h.264 .mp4 video

![](<../.gitbook/assets/Handbrake Conversion Example.png>)

* Pick a destination folder by clicking the Browse... button in the bottom right corner of the window.
* Hit Start (Bulk conversion is also available in Handbrake but not covered here)

### USB Loading Test Files

* MP4 sample file: [Cube](https://www.dropbox.com/s/470eqeggn9mjxql/Cube1.mp4?dl=1)
* JPEG sample file: [Triangle](https://www.dropbox.com/s/npgi09pnkcy0g6h/Triangle.jpg?dl=1)

## Recording Hypno w/ OBS (Via Capture Card)

It is easiest to record Hypno with an inexpensive capture card + Laptop.&#x20;

{% embed url="https://youtu.be/NDmuRfJRp7g" %}

[Download OBS on your PC](https://obsproject.com/)

* Setup a new Source and select your capture card (hit the plus under sources tab).
* In Settings - Video tab; setup your canvas/scaled to 720x480

![Settings - Video](<../.gitbook/assets/OBS Video Tab Settings.jpg>)

* In Settings - Output tab; Setup your desired output directory and format as follows

![Settings - Output](<../.gitbook/assets/OBS Output Settings (1).jpg>)

* Setup your hardware according to the "OBS Capture" Setup diagram below.
* Make sure your OBS screen shows the Hypno frame as expected, if it does not look right click the Hypno image coming in and click "Resize Input (Source Size)"
* Hit Record.&#x20;
* End the recording. Wait a second for it to finish writing the file and check your output directory for your new video!

![](<../.gitbook/assets/Artboard 1 copy 4-100 (1).jpg>)

## Recording Hypno w/ Video Inputs in OBS&#x20;

![](<../.gitbook/assets/Artboard 1 copy 6-100.jpg>)

![](<../.gitbook/assets/Artboard 1 copy 8-100.jpg>)

<details>

<summary>NDI Output (+ Spout/Syphon) (Deprecated)</summary>

Hypno is capable of broadcasting NDI video output. We reccomend installing [OBS](https://obsproject.com) & the [OBS NDI intergration ](https://github.com/Palakis/obs-ndi/releases)and/or [NDI Tools](https://www.ndi.tv/tools/), then follow _Methods of Connecting Hypno for NDI_ belo&#x77;_._ You should now be able to see a Hypno source in your target application such as OBS, Resolume, Touch Designer or other NDI Receiver.&#x20;

Video is streamed at a max of 720x480 or at the size of your currently attached screen via HDMI or Composite. NDI and a hardware output ( HDMI OR Composite) can be used simultaneously.

For more info check out NDI's own videos about their app suite: [https://www.youtube.com/playlist?list=PLzWoAFoxqPns7xA6BtQ-8KXs9kQKHodY9](https://www.youtube.com/playlist?list=PLzWoAFoxqPns7xA6BtQ-8KXs9kQKHodY9)

**Hypno's w/ a Raspberry Pi 4 will not initialize NDI unless an HDMI cable is connected and transmitting signal when the Hypno is powered on.**



### Methods of Connecting Hypno for NDI

#### Original Hypno&#x20;

* Front Micro-USB Port

#### Hypno with Pi3

* WiFi (see below for Wifi Configuration)
* Rear Ethernet Port (with or without Ethernet to USB dongle)

#### Hypno with Pi4

* Side USB-C Port
* WiFi (see below for Wifi Configuration)
* Rear Ethernet Port (with or without Ethernet to USB dongle)

### Additional Resources

[NDI Setup & Troubleshooting Guide for Mac](https://forum.sleepycircuits.com/t/ndi-obs-setup-troubleshooting-guide-for-mac/247/) on the forum

[NDI Setup & Troubleshooting Guide for Windows](https://forum.sleepycircuits.com/t/ndi-obs-setup-troubleshooting-guide-for-windows/165/) on the forum

[Hypno and OBS Tutorial Video](https://www.youtube.com/watch?v=4zX9Nx4yTdU) on YouTube

### Spout/Syphon&#x20;

If your application supports Syphon or Spout (Such as vsynth in Max MSP), NDI can be converted to Spout or Syphon with the software solutions below:

* [NDI <-> Syphon](https://docs.vidvox.net/freebies_ndi_syphon.html)
* [NDI <-> Spou](https://spout.zeal.co/download-spout-to-ndi/)t



</details>

## Hypno4Live

The bridge between Hypno and Ableton

* Compose visuals to your music
* Control all parameters
* Please note, you will need a host to host converter in order to send information from your computer to Hypno.
* The [CME WIDI Bud Pro](https://sleepycircuits.com/widi-bud-pro) is our recommended way to connect your Hypno to a Computer.

\*For Windows Users, You'll need to download both [MIDIberry](https://apps.microsoft.com/detail/9n39720h2m05?hl=en-US\&gl=US) and [loopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html) to get the CME WIDI bud to effectively register on your computer.&#x20;

\*Apple Users will be able to use their default MIDI drivers to select destinations.&#x20;

{% embed url="https://www.youtube.com/watch?v=3AMOFpY0HpE" %}

## Connecting WiFi (Optional, Hypno Kit Only)

{% hint style="info" %}
Do this to enable streaming [NDI](https://ndi.tv/tools/#download-tools) on your [LAN](https://en.wikipedia.org/wiki/Local_area_network). Performance varies with network reliability.
{% endhint %}

* **Insert micro SD card into your computer** (for a fresh new micro SD card created with Etcher, you have to eject and insert it again)
* **Create a new file on micro SD card in the /boot/ directory called wpa\_supplicant.conf** with your computer
  * The basic text editor from your operating system is recommended (Notepad, TextEdit etc.).&#x20;
  * Make sure the file has the .conf extension, sometimes your os will try to add a .txt extension to the filename (wpa\_supplicant.conf.txt will NOT work! the filename has to be exact)
* **Copy/Paste the following lines in this file**&#x20;

```
country=US
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
network={
  ssid="YOURSSID"
  scan_ssid=1
  psk="YOURPASSWORD"
  key_mgmt=WPA-PSK
}
```

* **Replace variables with your SSID and password**, and **change the country value to your region** (Example above is for USA region)
* **Save the file to the /boot/ directory on micro SD card** with the name **wpa\_supplicant.conf**&#x20;

## Setting Composite Out to PAL (or NTSC)&#x20;

{% hint style="warning" %}
If these directions aren't working for you or switching this is too cumbersome for your setup you may simply pick up one of these generic adapters HDMI->AV adapters at your preferred electronics supplier, just make sure its made to convert HDMI to Composite not the other way around as these generic boxes can look similar to each other in the product photos.

<img src="https://m.media-amazon.com/images/I/61aHyq6j-9L.__AC_SY300_SX300_QL70_FMwebp_.jpg" alt="" data-size="original">
{% endhint %}

{% embed url="https://www.youtube.com/watch?v=7PlrJx4MYKM" %}

{% hint style="info" %}
**Composite on PI4** requires **enable\_tvout=1** in config.txt&#x20;
{% endhint %}

* **This section concerns European Composite Users only, NTSC is enabled by default.**
* _**Hypno**_**&#x20;PI3/4&#x20;**_**Note:**_ Modern Pi models combine the audio out and composite out on to the same 3.5mm jackplug. This requires a particular type of lead, with audio left on the tip, audio right on ring 1, ground on ring 2, and video on the sleeve. This is the same as leads used on Apple devices. A full list of quirks based on your pi can be found [here](../archived-deprecated/historical-hypno-versions-expanders-and-pi-variants.md).
* If you require **PAL composite** output you will need to **replace sdtv\_mode in /boot/config.txt in your firmware image** with the following line
  * **Hypno CM3/4:** you can access the onboard /boot/ partition by flipping the switch to update, plugging into a computer via the front USB port and initializing the drive in etcher (select an image and your target pi but do NOT hit flash). You should see the directory appear in your File Browser when initialized.
  * **Hypno PI3/4:** Simply plug the SD card into your computer and the /boot/ partition will appear in your File Browser.

```
sdtv_mode=2
```

* OR If you require NTSC (this is the default configuration)

```
sdtv_mode=0
```

* Save the file and eject the drive!
  * **Hypno CM3/4 Users:** Don't forget to switch OFF the update switch (away from the word "update") when finished.

**If you require a more specific display mode** please consult [Pi's Official Documentation of /boot/config.txt Video Options](https://www.raspberrypi.org/documentation/computers/config_txt.html#video-options)

## Switch to Composite/HDMI on Kit with Pi4

/boot/config.txt should include the following lines to&#x20;

#### **Enable Composite**

```
enable_tvout=1
dtoverlay=vc4-kms-v3d,composite 
```

{% hint style="info" %}
Make sure any duplicate instances of dtoverlay=vc4-kms-v3d are deleted or commented out (only the above is present)
{% endhint %}

Also add this to the end of cmdline.txt (after rootwait)

```
//for PAL
video=Composite-1:720x576@50ie
//or for NTSC:
video=Composite-1:720x480@60ie
```

#### Enable HDMI output

```
enable_tvout=0
dtoverlay=vc4-kms-v3d
```

### Tested Sample Config Files

<details>

<summary>PI4 Composite w/NTSC full config.txt</summary>

```
# For more options and information see
# http://rpf.io/configtxt
# Some settings may impact device functionality. See link above for details

# uncomment if you get no picture on HDMI for a default "safe" mode
#hdmi_safe=1

# uncomment the following to adjust overscan. Use positive numbers if console
# goes off screen, and negative if there is too much border
#overscan_left=16
#overscan_right=16
#overscan_top=16
#overscan_bottom=16

# uncomment to force a console size. By default it will be display's dtoverlay=vc4-kms-v3d minus
# overscan.
#framebuffer_width=1280
#framebuffer_height=720

# uncomment if hdmi display is not detected and composite is being output
#hdmi_force_hotplug=1

# uncomment to force a specific HDMI mode (this will force VGA)
#hdmi_group=1
#hdmi_mode=1

# uncomment to force a HDMI mode rather than DVI. This can make audio work in
# DMT (computer monitor) modes
#hdmi_drive=2

# uncomment to increase signal to HDMI, if you have interference, blanking, or
# no display
#config_hdmi_boost=4

# uncomment for composite PAL
#sdtv_mode=2

#uncomment to overclock the arm. 700 MHz is the default.
#arm_freq=800

# Uncomment some or all of these to enable the optional hardware interfaces
#dtparam=i2c_arm=on
#dtparam=i2s=on
#dtparam=spi=on

# Uncomment this to enable infrared communication.
#dtoverlay=gpio-ir,gpio_pin=17
#dtoverlay=gpio-ir-tx,gpio_pin=18

# Additional overlays and parameters are documented /boot/overlays/README

# Enable audio (loads snd_bcm2835)
dtparam=audio=on

# Automatically load overlays for detected cameras
camera_auto_detect=1

# Automatically load overlays for detected DSI displays
display_auto_detect=1

# Enable DRM VC4 V3D driver

max_framebuffers=2

# Disable compensation for displays with overscan
disable_overscan=1

[cm4]
# Enable host mode on the 2711 built-in XHCI USB controller.
# This line should be removed if the legacy DWC2 controller is required
# (e.g. for USB device mode) or if USB support is not required.
otg_mode=1

[all]

[pi4]
# Run as fast as firmware / board allows
arm_boost=1

[all]
dtparam=spi=on
gpu_mem=256

enable_tvout=1
dtoverlay=vc4-kms-v3d,composite 

```

</details>
