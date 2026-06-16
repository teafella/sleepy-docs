---
description: Frequently asked questions about Hypno 2
---

# Hypno 2 FAQ

{% hint style="info" %}
Common questions and answers about using Hypno 2.
{% endhint %}

## Getting Started

**Q: What do I need to get started with Hypno 2?**
A: Just connect power using the official Pi5 USB-C adapter. Everything else is built-in.

**Q: Does Hypno 2 work with any HDMI display?**
A: Yes, it works with TVs, monitors, projectors, and capture cards that support 1080p. Some older displays may have compatibility issues.

**Q: How do I save my work?**
A: Touch the save preset button in the main interface. Presets save your complete system state including all parameters, effects, modulation settings, and MIDI mappings.

**Q: How do I load factory content?**
A: Go to Settings → System Tab → Factory Content Download. This requires an internet connection.

## Audio & Video

**Q: How does the audio reactive mode work?**
A: The built-in microphone picks up sound and modulates parameters based on audio levels. You can adjust the magnitude (bipolar -1 to +1) and slew rate for response smoothness.

**Q: Can I use external audio input?**
A: Yes, feed line level signals into the AUX jack. The AUX input provides AC modulation for parameters.

**Q: Can I process live video?**
A: Yes, connect UVC-compatible cameras or capture cards via USB. Multiple cameras are supported simultaneously.

**Q: Can I receive video over the network?**
A: Yes, Hypno 2 supports NDI (Network Device Interface). NDI sources on your network are automatically discovered and appear in the file browser.

**Q: How do I use capture card audio?**
A: USB capture cards with audio inputs are automatically detected and linked to their video counterparts. The audio becomes available as a track source in the mixer.

**Q: Can I edit shaders on the device?**
A: Yes, touch any `.frag` file in the browser to open the built-in shader editor with syntax highlighting, line numbers, and error display.

## File Management

**Q: What video formats are supported?**
A: MP4 (H.264/H.265), MOV, and WebM. Videos must be decoded before use in channels - use the batch decode function in the file browser.

**Q: What image formats are supported?**
A: JPEG (with EXIF orientation support), PNG, BMP, GIF, and SVG vector graphics.

**Q: What audio formats are supported?**
A: WAV (primary), MP3, OGG, and FLAC.

**Q: How do I search for files?**
A: Touch the search icon in the file browser, type your query, and matching files appear as you type.

**Q: How do batch operations work?**
A: Select files using checkboxes (or use the master checkbox for all), then choose an operation. Progress bars show real-time status with cancellation support.

**Q: Can I use external USB drives?**
A: Yes, USB drives mount automatically. Use safe removal in Settings → Storage before disconnecting to prevent data loss.

## Connectivity

**Q: Can I use MIDI controllers?**
A: Yes! Hypno 2 supports USB MIDI (plug-and-play) and Bluetooth MIDI (wireless). All channels come pre-mapped. You can remap any CC to any parameter.

**Q: Does it work with CV/Gate equipment?**
A: Yes, Hypno 2 has four CV inputs and two trigger/clock inputs for modular synthesizer integration.

**Q: Can I use Bluetooth audio devices?**
A: Yes, Bluetooth headsets and speakers (A2DP/HSP/HFP profiles) can be paired in Settings → Bluetooth.

**Q: Is OSC supported?**
A: Yes, Hypno 2 can send and receive OSC messages over UDP for integration with software like TouchOSC, Max/MSP, or Pure Data.

**Q: Can I use a wireless keyboard?**
A: Yes, both USB and Bluetooth HID keyboards are supported for text entry.

## Performance & Recording

**Q: How do I record my visuals?**
A: Press the record button (turns red when active), perform your sequence, then press again to stop. Recordings save to VIDOS-Resources/Recordings/.

**Q: Can I undo changes?**
A: Yes, the undo/redo system tracks up to 100 actions including parameter changes, preset loads, and shader changes.

**Q: Why are some files showing as "needs decoding"?**
A: Videos must be decoded before playback in channels. Select the files and use the decode batch operation for optimal performance.

## Troubleshooting

**Q: The display shows no signal**
A: When a powered display is connected, a popup asks if you want to use it. Check your HDMI cable connection if no popup appears.

**Q: How do I access desktop mode?**
A: Go to Settings → System Tab → "Go to Desktop" to switch to the Raspberry Pi operating system.

**Q: How do I get back to the main application from desktop mode?**
A: Launch it from the script on the desktop, or reboot the device.

**Q: My MIDI controller isn't responding**
A: Check that it's properly connected (USB) or paired (Bluetooth). Verify the correct MIDI channel and CC mapping in the modulation menu.

**Q: Videos are playing slowly**
A: Ensure videos are decoded. Large or high-resolution videos may need encoding to a more optimal format using the batch encode function.

{% hint style="success" %}
Still need help? Check the [Troubleshooting Guide](hypno-2-troubleshooting.md) or visit forum.sleepycircuits.com
{% endhint %}
