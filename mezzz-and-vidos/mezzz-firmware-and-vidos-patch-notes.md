# Mezzz Firmware (& vidOS Patch Notes)

## Patch Notes

### [**Mezzz 1.4 Firmware**](https://www.dropbox.com/scl/fi/0ubw7e56moreqmara33qi/MezzzFirmwareV1.4.bin?rlkey=gm6lbzkk5lx2a80hxdsq6rtml\&dl=1) **(vidOS 1.4 on** [**App Store**](https://apps.apple.com/us/app/sleepy-vidos/id6448588001)**)**

* SDL Windowing Backend
  * fullscreen now working on desktop
  * better dynamic resizing on desktop
* Preset Saving/Loading&#x20;
  * Hypno like midi note save/load for app states
  * Mezzz now has a preset page when 2 LEDs are lit
    * page can be locked/unlocked by tapping center button
* LFO Modulation system Improved
  * New LFO shapes
  * per param magnitude of LFO wave
  * New Maps for modulation page
* Per Parameter Envelope Following
  * incl. smoothing per param
  * listens to mic or USB audio interface
* App lifecycle management handeled correctly
* on demand param echo instead of full state signalling at every opportunity
* Mezzz and vidOS settigns menu items now save on device from session to session
* touch/mouse now control camera "model view style"
  * single touch & drag rotates
  * double touch pan
  * pinch to zoom in/out&#x20;

### [Mezzz 1.2.1](https://www.dropbox.com/scl/fi/av58p96ilt2iz7b0k5k8j/MezzzFirmwareV1.2.1.bin?rlkey=7zls0451bufpkxugc813x5l3m\&dl=1)

* LED patterns now fully documented in new manual[ PDF](mezzz-manual.md)
* Side button CH switching is now a hold (to avoid bumps)
* Wired MIDI
* Settings Menu (Hold center and turn a knob)
  * Haptic Options
  * LED Brightness
  * Engine Resolution Scale
* Reworked Knob Sensitivity
  * Velocity Based Response (like Elektron/Push)
  * Default Haptic mode inverted
    * Now buzzes on out of bounds pulses
    * Other haptic mode is available in Settings menu
* MIDI Echoes&#x20;
  * Sending CC to Mezzz will set that knob value internally
  * Tested for use with Hypno and vidOS multi-controller setup (Requires Hypno 2.4 OR vidOS 2.0)
* MIDI Note Send (for Hypno style preset recall)
  * hold down 2 neighboring encoders then tap to send 48 different notes
* Hypno Mode
  * Hypno LED Mirroring
  * Button Patching
  * Support for Hypno's new Midi Channel setting
    * Detects Hypno's MIDI channel by sending a note off chirp and listening for an echo
  * Hypno style preset recall (no animation, see "MIDI Note Send" above)
    * tap to recall
    * hold to save

### [**Mezzz 1.0.0**](https://www.dropbox.com/scl/fi/y3cns9gcapf7eqxh70axi/MezzzFirmwareV1.0.0.bin?rlkey=xdzaqe7yw71amo989vkxvdgqu\&dl=1)

* CC remapping
* 2 user slots that save CC map (single channel, copied to all channels)
  * hold center and side to save
  * hold a side button on startup to recall
* new more consistent channel selection and cc selection UI (left to right like all knob cc UI)

beta0.03

* Enabled Center (pupil) button Map menu in latest vidOS (new sysex signals)

## How to Update Mezzz

1. Download .bin from link above
2. Connect Mezzz via the **included** USB-C Cable (supports data transfer)
3. Go to [https://adafruit.github.io/Adafruit\_WebSerial\_ESPTool/](https://adafruit.github.io/Adafruit_WebSerial_ESPTool/)&#x20;
   * Use a browser with WebSerial Support (Use Chrome when in doubt)
4. Turn Mezzz On while holding the center button (no LEDs will light up)
5. Hit Connect Button, look for cu.usbmodemXXXXX port, hit another connect button
6. Place downloaded .bin into any slot with address 0x0000&#x20;
7. Hit Program
8. Wait
9. When complete, cycle Mezzz power switch off and then on

## Troubleshooting

#### Serial port never shows up? Try activating Programing Mode

Hold the center button while turning the device **off and then on** to place Mezzz into Programing Mode. No leds will light up in this mode but the port will be visible.

#### Can't connect to serial port?

Make sure other programs aren't trying to use the port, including any IDE, browser, game engine, vj software etc.

#### Webtool not working?

* Try the alternative tool : [https://espressif.github.io/esptool-js/](https://espressif.github.io/esptool-js/)
* Follow directions above then change the flashing adress to 0x0000&#x20;

