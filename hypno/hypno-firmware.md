---
description: Directions for updating Hypno.
---

# Hypno 1 Firmware

{% hint style="info" %}
By downloading these images you agree not to decompile or reverse engineer our products or use them in a way that may be harmful to Sleepy Circuits, LLC or humanity as a whole.
{% endhint %}

{% embed url="https://youtu.be/YvDNsAs5yWQ" %}

## Firmware Images

{% hint style="danger" %}
**Warning**: Updating will wipe your presets. Save them to your USB Drive! \
&#xNAN;_(Recall your preset, plug in a USB Drive into Hypno and re-save your preset, it will save to USB automatically when a drive is found, check the presets directory on drive after)_
{% endhint %}

{% hint style="warning" %}
**Which Firmware Do I Need?**&#x20;

* All Firmware is designed to fit on 32GB storage media (SD Card or EMMC)
* Hypno (Old Version Based on CM3+) download the PI3/CM3 image.&#x20;
* Hypno w/ Fullsize Pi - Download the PI3 or PI4/CM4 version based on Pi used.&#x20;
{% endhint %}

{% hint style="info" %}
**PAL/NTSC** Composite can be switched by the user, see [Hypno Manual](hypno-manual.md#setting-composite-video-output-to-pal-or-ntsc).
{% endhint %}

_Thanks for your patience with downloading these images._

Jun 2024: [**Hypno 2.4.4 PI3/CM3**](https://www.dropbox.com/scl/fi/3jb9xxw0saqub3hsjru8p/HypnoCM332GB-2.4.4-Reup-.img.gz?rlkey=tgsm31x8xhfa92znrkoyu6o4w\&dl=1) | [**Hypno 2.4.4 PI4/CM4**](https://www.dropbox.com/scl/fi/6hstbdjf383z6d6tsymku/HypnoPI4CM4-2.4.4.img.gz?rlkey=xmw3m9a1vsgeds8280kwsjqzd\&dl=1) **|** [**Hypno 2.4.4 PI4/CM4 NTSC w/ Composite (Disables HDMI)**  ](https://www.dropbox.com/scl/fi/1rqr4384284fk2d6acsdb/HypnoPI4_2.4.4_COMPOSITE_NTSC.img.gz?rlkey=f6i14inirqw6rz94fxe7eml66\&dl=1)

* Presets now recall correctly again
* USBs with over 50 videos dont crash anymore and switch correctly
  * re tested usb webcam inputs are still correctly selectable
* bugfixes for elektron device 0vel noteons
* bugfixes for Mezzz "hypno mode" echoes

Feb 2024: [**Hypno 2.4 NTSC PI3/CM3**](https://www.dropbox.com/scl/fi/qfxkzdwrqzik42ganzj4g/HypnoPi3CM3-2.4.2.img.gz?rlkey=vkw42eqidech1hjicty43xfj6\&dl=1) **|** [**Hypno 2.4 NTSC PI4/CM4**](https://www.dropbox.com/scl/fi/7wwpjvunis2hd06slfc80/HypnoPi4-2.4.1.img.gz?rlkey=a7rez7vylz5nz4xqnewwal7a7\&dl=1) **|** [**Forum Thread**](https://forum.sleepycircuits.com/t/hypno-2-4-release/1175)

* Graphics Engine Resolution scaling
* Display mode selection for pi4 (pi3 just auto selects the first mode like before)
  * config.txt entry "hypno\_preferred\_width="
* Reworked midi scanning
  * Multiple MIDI devices now useable at once
* CC echoes for midi controller UI setting
  * simply echoes the set value to the map's CC back to the controller
* New MIDI Map options
  * Notes 117 + are reserved for system functions for Mezzz integration&#x20;
  * Shape toggles moved to single notes instead of all sharps
    * adds more preset slots
  * Button patching can be toggled via note mesages
  * Button modes selectable via CC
* Raspberry Pi OS updated so modern runs of PI3 (2022 PCB marking) boot normally.
* Switchable MIDI Channel in /boot/config.txt
* Bugfix: fractal mod not saving/ disabled on shape change
* Bugfix: Midi note echoes out crashing Engine on shape/fb switch due to lack of mutex
* Bugfix: Hue offsets not being saved correctly
* Any channel Mezzz hypno mode activation with midi note chirp from Mezzz (needs 1.2.1 Mezzz)
* Known bugs not addressed in this version
  * Midi input pauses briefly on patch recall due to requiring a full midi state echo for connected controllers.
  * CV offset on startup bug: leaving gain patched with physical cable makes a weird offset to the parameter for that whole session (couldn't figure this one out yet)
  * Help Mode glitching out and showing weird black pixels instead of text.

**Dec 2022:**[ **NTSC 2.3 PI3/CM3**](https://www.dropbox.com/scl/fi/bv0e94f0t8n3bdhke3ktg/Hypno2.3-PI3-Release2.img.gz?rlkey=x8wbj7m0zxzlo7pkzu1rn7o7d\&dl=1) **|**[ **NTSC 2.3 PI4**](https://www.dropbox.com/scl/fi/86bcc09flzoln2mtn9t3s/Hypno2.3-PI4-Release2.img.gz?rlkey=czheheqo8bik13pvgfyo4s986\&dl=1) **|** [**Forum Thread**](https://forum.sleepycircuits.com/t/hypno-2-3-release/870?u=sleepyron)

* hue remapping on preset pot 2 (gain), all the way to the right is hue mapping left is gain default
  * help text displays mapping
* Reset y axis centering on y crop of video shapes
* On Device fat32 drive formatting for usb stick&#x20;
  * pop up dialog (Y/N G/R w/ text onscreen)
  * startup center button hold activated
  * default logo video placed on usb @ sleepy/sleepy\_loop.mp4
  * (drive still needs to appear in the linux's /dev/ so some USBs may still not format correctly, mac os extended USBs still not format-able)
* Bugfix: Incorrect midi backend flag.
* Bugfix: fixed a crash where incorrect conditionals for filename and hidden file filtering caused invalid video input filename strings
* Bugfix: bug where some files would get skipped by the folder navigation due to a typo in code
* Bugfix: Video playback freezes when left shape is unpatched&#x20;

**May 2022: NTSC 2.2.3 PI3/CM3 | NTSC 2.2.3 PI4 |** [**Forum Thread**](https://forum.sleepycircuits.com/t/hypno-2-2-3-release/663)

* Folder-based file navigation for usb loading&#x20;
  * Help mode: displays file and folder names
* Fixed bug where presets were not saving to USB
* Y offset drift
  * Some shapes polarize while others have a Y offset in its place
* Removed fractal axis and only have a modulation ctl (like scan)
  * Y mod doesn't do anything in polarization shapes, polar mod _is_ independent of fractal mod now
* Enabled cropping/luma-keying/aspect stretch for _most shapes_
  * X/Y cropping/alt shaping
    * Sin
      * Dual sin/tri modulator function
    * Tan
      * Dual tan/tan modulator function
    * Circle
      * Diameter and squash
    * Poly (formally square)
      * X/Y stretch
  * Lumakey
    * Sin
    * Tan
    * Circle
    * Poly (formally square)
      * Not actual lumakey but similar effect, controls edge smoothness
  * Aspect stretch
    * Poly (formally square) - num sides (aspect stretch already possible with crop X/Y controls)
  * New manual: [Hypno Manual](hypno-manual.md)

#### Nov 2021: NTSC 2.2.2 | [Forum Thread](https://forum.sleepycircuits.com/t/hypno-firmware-2-2/520?u=sleepyron)

* USB Stick MP4/JPEG Loading&#x20;
  * MP4 sample file: [Cube](https://www.dropbox.com/s/470eqeggn9mjxql/Cube1.mp4?dl=1)
  * JPEG sample file: [Triangle](https://www.dropbox.com/s/npgi09pnkcy0g6h/Triangle.jpg?dl=1)
  * Place files in root directory
  * Recommended Filesystem Format FAT32&#x20;
    * Supported Filesystems: vfat ext2 ext3 ext4 ntfs-3g ntfs exfat hfsplus (may need further  real-world testing)
  * Use 640x480 .MP4s (480p30) for best performance (Convert w/ [Handbrake](https://handbrake.fr/), Drop down to 480p30fast)
  * For image loading, Use square or common (640x480 recommended) resolutions.
* Help Mode shows filenames when indexing through files
* USB Preset Backup
  * USB source saved via filename
* NDI now stops sending when it doesn’t sense it is in use.
* NDI SDK updated to version 5

#### Jul 2021: **NTSC 2.1.7** | **PAL 2.1.7**

* MIDI CCs offset by 1 (CC0 is now blank, should be helpful for Elektron machines)
  * Midi map update on the manual
* Timed 90deg snapping (after 3 secs in deadzone) on all shapes
* New “Help Mode” ( on/off by holding both of the side buttons and turning center/hue knob all the way up, you will see text to indicate it is on)
* Trigger ins fixed (before they where failing after long term/many triggers)
* X Crop now zooms when turned up to preserve scale of video (more zoom!)
* Presets now recall internal modulation positions



**Feb 2021: NTSC 2.1.5 | PAL 2.1.5**

* Video Input button combos reworked ( see new [manual page](hypno-manual.md) )
  * inputs on channel A and B now have dedicated pages / controls
* Frequencies are now catching controls just like Gain (LED is off when slider is not in its real position)
* Firmware number boot splash screen
* Bugfixing with CV
  * Preset recall should now work as expected with CV ( front panel controls are decoupled/un-caught when recalling)
  * Fixed some instances where catching controls would never catch
* Infinite feedback and single shape frame rates improved with more intelligent draw call optimization
* Input rotates the correct way
* Lumakey works based on input frame luma before gain/recolor (more consistent)
* Better defaults when input is plugged in (rotation/modulations reset, freq at 0)



## How to Update Your Hypno (CM3/4  Onboard eMMC)

1. Download the latest Hypno Image (See Above)
2. Extract .gz archive (Optional but speeds up flashing significantly)
3. [Install Balena Etcher](https://www.balena.io/etcher/)
4. Unscrew and remove Hypno from its enclosure, if yours does not have screws and is still not coming out it uses "tab-locks" [this video](https://vimeo.com/472684965) shows you how to remove it.
5. Flip the switch on the left side of Hypno into the up/ON/update position. (CM4 WS adapter has this switch on the blue pi adapter itself).
6. Connect Hypno to computer via front usb port
7. Start Balena Etcher
8. Open downloaded .img in Etcher and follow the instructions (Hypno shows up as a “Compute Module” & may take a second to initialize)
   1. CM4 based Hypno: Some systems require running [Rpiboot ](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)before module is recognized
9. Once flashing is complete, disconnect Hypno, **put update switch into the down position** and power Hypno.



## How to Update Your Hypno (Pi3/4 via SD Card)

1. Download the latest Hypno Image (Above)
2. Extract .gz archive (Optional but speeds up flashing significantly)
3. [Install Balena Etcher](https://www.balena.io/etcher/)
4. Unscrew and remove Hypno from its enclosure.
5. Remove the Pi's SD card and put it into your computer via a card reader.
6. Start Balena Etcher
7. Open downloaded .img in Etcher and follow the instructions to flash the SD
8. Once flashing is complete, disconnect SD card and put back into your Hypno.

## Troubleshooting

### **Hypno is not booting and only the right LED is glowing a faint green:**

_This means your pi is not able to boot the image on your storage device._&#x20;

* Hypno CM3+ (Original Ver):&#x20;
  * Make sure the update switch is in the down position
  * Cycle power (Hypno will not boot while in update mode)
* Hypno Kit: Re-flash firmware onto the SD
  * If this doesn't work try to use your raspberry pi with an image from[ Raspberry Pi Imager](https://www.raspberrypi.com/software/) to verify your Pi is functional and booting correctly
  * Re-flash above firmware, making sure to leave enough space (\~32GB) on your computer for the image to fully decompress and flash.&#x20;
  * Try extracting the image before flashing (expand the .gz file)
  * Try booting your Hypno outside of its case before continuing assembly.

### _**“**_**Missing Drivers” error in Etcher on Windows:**

* In some cases Windows users will need to install and run [RPiboot](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) for the Compute module to be recognized

### **Compute Module does not initialize in Balena, or is not recognized by my computer**

* Ensure that Hypno is isolated from all accessories
* Compute module based Hypnos: Make sure the boot switch is on (or toward the word "update")
* Connect Hypno directly to a computer using the provided USB cable with no hubs or adapters (provided cable has data lines, sometimes other cables are power only)
* Try another microUSB cable (cables < 6’ are recommended)
* try to install the rpiboot driver (see above for Windows Instructions, Mac users may need to build rpiboot from source as described [here](https://github.com/raspberrypi/usbboot)

{% hint style="info" %}
Still having trouble? Check out the [Troubleshooting Guide](hypno-set-up-and-troubleshooting-manual.md)
{% endhint %}
