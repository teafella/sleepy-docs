---
description: A full description of Hypno's "Features".
---

# Hypno 1 Manual

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
Need more help? [Read the FAQ](hypno-faq.md) or contact support@sleepycircuits.com
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

Hypno can act as a USB-MIDI host through its front microUSB port (or rear USB-A ports on a completed Hypno Kit), allowing you to edit or animate the module’s parameters with MIDI controllers, keyboards and more. In some cases, a USB OTG (microUSB adapter) is necessary. A list of recommended adapters and known-compatible MIDI devices is available in the [List of Compatible USB Accessories](hypno-manual.md#compatible-usb-accessories) below.&#x20;

_Note: direct host to host USB-MIDI connections, such as between Hypno and a laptop, are not supported._

<figure><img src="../.gitbook/assets/Hypno 2.4 MIDI Chart (1).png" alt=""><figcaption><p>Chart for Hypno 2.4 +</p></figcaption></figure>

When organizing \[presets via the usb the presets follow the below naming scheme.&#x20;

* patch” 0 - 1 - 2 “.json” are the three presets that are saved by default on the Hypno and are only recallable with the button combination (see page 9 of the manual)
* From “patch3.json” on, you can recall them with a Eb0 message on midi channel 16
* As the [Midi Quick Guide](https://www.youtube.com/watch?v=xghMVRDGoV8) video says, midi F# G# and A# keys are used to trigger the three buttons of the Hypno, meaning that in the naming system, you have to mind skipping numbers corresponding to those keys ! For instance, “patch6.json” won’t work

_(Thanks mcdouglas for the naming scheme breakdown!)_

<details>

<summary>OP-Z MIDI configuration (midi.json) from the OP-Z tutorial</summary>

Edit the midi.json file in the config folder of your OP-Z to match the code below if you would like your OP-Z to operate like the one in the [Hypno & OP-Z Tutorial](https://www.youtube.com/watch?v=KxKJ7ShE5RI). Typically only the `track_channels` and `parameter_cc_out` lines need editing. See _22.2 Content Mode_ in the [official OP-Z manual](https://teenage.engineering/guides/op-z/disk-modes) for more information about editing OP-Z configuration files.

```json
{
    "alt_program_change" : true,
    "channel_one_to_active" : true,
    "enable_program_change" : true,
    "incoming_midi" : true,
    "midi_echo" : true,
    "outgoing_midi" : true,
    "parameter_cc_out" :
    [
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
        [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ],
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ],
        [ 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 ]
    ],
    "timing_clock_in" : true,
    "timing_clock_out" : true,
    "track_channels" : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 14, 15 ],
    "track_enable" : [ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ]
}
```

</details>

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

As of firmware revision 2.0, Hypno is capable of accepting video input from UVC compliant devices (USB 2.0, MJPEG compressed output), such as webcams or capture cards, through its top USB port. The [Setup & Troubleshooting Manual](hypno-set-up-and-troubleshooting-manual.md#id-5.-uvc-input-usb-video-input) will walk you through setting up and troubleshooting this awesome feature.&#x20;

![](<../.gitbook/assets/Artboard 1 copy 5-100.jpg>)

As of [Firmware 2.2](hypno-firmware.md), Hypno can also load 720x480 resolution .MP4 videos and .JPEG Images from a connected USB drive. See the PDF Manual  for more information (quick guide video coming soon).

![](<../.gitbook/assets/Artboard 1 copy 7-100.jpg>)

* Video Input can be switched on-the-fly video loading from USB
  * Navigate to the root folder and take the file index knob all the way to the right (Clockwise)

[UVC Video Input Setup & Troubleshooting Guide](hypno-set-up-and-troubleshooting-manual.md#id-5.-uvc-input-usb-video-input)

<details>

<summary>Guide: Using laptops, phones and tablets as a UVC video source</summary>

**Connecting laptops, computers, digital cameras, and more**

If your device features an HDMI output, you can probably use it as an input source for Hypno’s UVC input. It’s as simple as connecting your computer/device to a USB 2.0 HDMI capture device, and then connecting the capture card to Hypno with a USB OTG cable (microUSB adapter). Some computers may have other ports in place of HDMI, such as Thunderbolt or mini DisplayPort, but these can be easily adapted with a cheap dongle.

**Connecting your iOS device to Hypno**

Our [video guide](https://youtu.be/JLVM5uxzAhk) will walk you through all the steps necessary to connect your iPad or iPhone using an HDMI capture device and some dongles. iOS devices with Lightning output will require the [Apple Lightning to Digital AV (HDMI) Adapter](https://www.apple.com/shop/product/MD826AM/A/lightning-digital-av-adapter). Newer iPad “Pro” models use USB-C instead of Lightning, greatly expanding your choice of adapters for HDMI output. Please be aware that apps which stream copyrighted material, like HBO Max or Netflix, will likely not work with generic HDMI capture devices due to copy protections in place.

**Connecting your Android device to Hypno**

Many Android devices have hardware video outputs, though they may only be available as MiniHDMI, MicroHDMI, or USB-C. Mini and MicroHDMI ports will simply require an appropriate cable or plug adapter to interface with your HDMI capture device connected to Hypno. USB-C devices will need a USB-C to HDMI adapter.

**UVC input and USB MIDI at the same time**

Some users have reported success with using UVC input and USB MIDI input concurrently by employing a USB/OTG hub, especially those that are externally powered. It’s important to exercise caution when connecting multiple USB devices to Hypno with unpowered hubs as they will increase the power draw for Hypno. Attempting to draw too much power from the front USB port can cause Hypno to behave erratically, or may even damage Hypno (please note this kind of damage is not covered under manufacturer’s warranty). This [powered OTG hub](https://www.amazon.com/gp/product/B078MNW25Q) works well for us in testing.

</details>

### Compatible USB Accessories

<details>

<summary>List of USB accessories that are confirmed to work with Hypno</summary>

**USB OTG adapters**

A USB OTG adapter is required to convert from Hypno’s microUSB interface to the common USB-A port for accessories. This allows you to connect USB 2.0 webcams, capture cards and MIDI devices directly to Hypno’s front panel microUSB port. We’ve had success with the following OTG adapters:

* [Rankie Micro USB (Male) to USB 2.0 (Female) OTG Adapter](https://www.amazon.com/Rankie-Female-Adapter-Convertor-3-Pack/dp/B00YOX4JU6/) (mating is good but not as reliable as some other adapters)
* [UGREEN Micro USB 2.0 OTG Cable](https://www.amazon.com/gp/product/B00LN3LQKQ/)
* [Lindy USB 2.0 OTG micro-B male / type A female adapter](https://www.lindy.com.au/usb-2-0-adapter-type-b-female-micro-b-male)
* [Micro USB 2.0 OTG Powered HUB with Ethernet](https://www.amazon.com/gp/product/B078MNW25Q/)
* [CableCreation Micro USB 2.0 OTG Cable](https://www.amazon.com/dp/B01M098EAG)

**Always use caution with USB hubs, and provide sufficient power headroom when connecting multiple devices to Hypno. Powered hubs are recommended whenever multiple USB-powered devices are required, such as a webcam and a MIDI controller. Damage to Hypno caused by excessive power draw is not covered by warranty.**

**Webcams**

* [ELP Camera Module](https://www.amazon.com/ELP-Camera-Megapixel-Windows-Android/dp/B00KA7WSSU)
* [Logitech HD Pro Webcam C920](https://www.amazon.com/Logitech-Widescreen-Calling-Recording-Desktop/dp/B006JH8T3S/) (can be purchased used quite easily)
* [Zoom Q2n](https://zoomcorp.com/en/jp/video-recorders/video-recorders/q2n/)
* [Zoom Q2n-4K](https://zoomcorp.com/en/us/video-recorders/video-recorders/q2n-4k-handy-video-recorder/)
* [Logitech C270](https://www.target.com/p/logitech-c270-3-0mp-webcam-black-960-000694/-/A-13252212)
* [Kano Webcam](https://www.amazon.com/dp/B08KSBSZTG/)
* Pi Zero Webcam Gadget

**Capture Cards**

* [HDMI Capture (Generic)](https://www.amazon.com/dp/B08BFJVC3B/) (sold under many names)
* [EasyCap devices](https://www.amazon.com/EasyCap-Capture-Video-Adapter-Converter/dp/B01H6OQI1W/) (sold under many names)

**Other**

* [Apple Lightning to Digital AV Adapter](https://www.amazon.com/Apple-Lightning-Digital-AV-Adapter/dp/B009WHV3BM/) (useful for taking HDMI out of an iOS device and plugging into an HDMI capture device)

**USB MIDI devices**

Hypno accepts MIDI control from **class-compliant USB 2.0 MIDI devices** like controllers, keyboards, synths, and grooveboxes. Because Hypno itself is a USB MIDI host, MIDI is not supported for host to host connections, such as between Hypno and a laptop. The following devices have been specifically tested with Hypno, but this is not a definitive list by any means:

* [Generic USB MIDI to DIN converter](https://www.amazon.com/GELRHONR-Interface-Indicator-Keyboard-Vista-6-5Ft/dp/B095CFDJD9/)
* Korg NanoKontrol2
* Arturia BeatStep Pro
* Elektron Digitakt
* Elektron Digitone
* Elektron Octatrack
* Teenage Engineering OP-Z (see our [Hypno & OP-Z Tutorial](https://www.youtube.com/watch?v=KxKJ7ShE5RI)!)
* iConnectivity Mio1
* MIDIPlus Tbox 2x2
* Novation RemoteZero SL
* Midi Fighter Twister
* Arturia Minilab Mk2
* WIDI Bluetooth Midi Bud
* [Roland UM-ONE MIDI Interface](https://www.roland.com/us/products/um-one/)

Not sure about a specific accessory? Email support@sleepycircuits.com and we’ll help you out.

</details>

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
Filesystem formatting may need further real world testing, please report issues via support@sleepycircuits.com
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

[Hypno and OBS Tutorial Video](https://www.youtube.com/watch?v=4zX9Nx4yTdU) on YouTube

### Spout/Syphon&#x20;

If your application supports Syphon or Spout (Such as vsynth in Max MSP), NDI can be converted to Spout or Syphon with the software solutions below:

* [NDI <-> Syphon](https://docs.vidvox.net/freebies_ndi_syphon.html)
* [NDI <-> Spou](https://spout.zeal.co/download-spout-to-ndi/)t



</details>

<details>

<summary>Full Guide: Hypno + OBS via NDI on Windows</summary>

1. Install [NDI Tools](https://ndi.tv/tools/) and verify your NDI connection in Studio Monitor (see the [NDI section of the Troubleshooting Guide](hypno-set-up-and-troubleshooting-manual.md#id-4.-ndi-output)). When installing NDI Tools, make sure to check the box for **Studio Monitor** in the installation configuration!

![NDI Studio Monitor Installation](../.gitbook/assets/ndi-win-studio-monitor-install.jpeg)

![Studio Monitor Hypno](../.gitbook/assets/ndi-win-studio-monitor-hypno.jpeg)

2. Install the latest version of [OBS](https://obsproject.com/download)
3. Install the latest version of the [obs-ndi plugin](https://obsproject.com/forum/resources/obs-ndi-newtek-ndi%E2%84%A2-integration-into-obs-studio.528/)
4. Next we need to access the individual firewall permissions in Windows through the Start menu

![Allow Firewall](../.gitbook/assets/ndi-win-firewall.jpeg)

5. Look for OBS in the list of applications. If “Public” is unchecked next to OBS, click on “Change Settings” and then check the box. Now click OK.

![OBS allow](../.gitbook/assets/ndi-win-obs-allow.jpeg)

6. Open OBS
7. When adding a new video source, “NDI Source” is now available

![NDI source](../.gitbook/assets/ndi-obs-source.jpeg)

8. After it’s been added, double-click on the NDI Source in the Sources box to bring up the device options. Select HYPNO (main).

![NDI hypno source](../.gitbook/assets/ndi-obs-hypno-source.jpeg)

9. Press OK. Hypno should now be viewable in your main output window.

If problems persist:

* VPNs may cause issues, disabling them can resolve connectivity problems.
* In some cases, disabling Windows Defender Firewall for Public Networks resolved connectivity issues. Not recommended when connected to public Wi-Fi networks (school, work, coffee shop).

</details>

<details>

<summary>Full Guide: Hypno + OBS via NDI on Mac</summary>

1. Install [NDI Tools](https://ndi.tv/tools/) for Mac (the installer automatically installs Studio Monitor) and verify your NDI connection in Studio Monitor (see the [NDI section of the Troubleshooting Guide](hypno-set-up-and-troubleshooting-manual.md#id-4.-ndi-output))
2. Install the latest version of [OBS](https://obsproject.com/download)
3. Install the latest version of the [obs-ndi plugin](https://obsproject.com/forum/resources/obs-ndi-newtek-ndi%E2%84%A2-integration-into-obs-studio.528/)
4. Restart your computer
5. Open OBS
6. When adding a new video source, “NDI Source” is now available

![NDI source](../.gitbook/assets/ndi-obs-source.jpeg)

7. After it’s been added, double-click on the NDI Source in the Sources box to bring up the device options. Select HYPNO (main).

![NDI hypno source](../.gitbook/assets/ndi-obs-hypno-source.jpeg)

8. Press OK. Hypno should now be viewable in your main output window.

**Note about M1/Apple Silicon Macs:** the NDI plugin has known issues with OBS on Apple Silicon. A workaround is to use NDI Virtual Input (part of NDI Tools) and then use a regular camera source in OBS.

</details>

<details>

<summary>Quick Tips for OBS and Hypno</summary>

* With no HDMI output connected, Hypno will output 720x480 over NDI. If the HDMI is connected, the NDI output resolution will match the resolution of the HDMI output.
* You can configure OBS to capture Hypno’s output to any resolution you like in the settings.
* Use the Transform right-click menu to flip, stretch, fit, rotate and center your image.
* Experiment with filters from the right-click menu to apply color correction, sharpening, or use masks and keys.
* Use [OBS Virtualcam](https://obsproject.com/forum/resources/obs-virtualcam.949/) to send OBS’ output to other recording or processing programs that do not accept NDI.
* Use NDI Virtual Input (part of [NDI Tools](https://ndi.tv/tools/)) to put Hypno directly into any application that supports webcam input.
* NDI output and UVC input at the same time is not a viable configuration due to the bandwidth requirements of either transmission. If you need to monitor or record Hypno on your computer while using UVC input, use an additional HDMI capture device instead.

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
