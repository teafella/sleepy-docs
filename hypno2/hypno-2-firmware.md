---
description: Firmware updates and installation for Hypno 2
---

# Hypno 2 Firmware

{% hint style="info" %}
By downloading these images you agree not to decompile our code or use the provided software in a way that may be harmful to Sleepy Circuits, LLC or humanity as a whole.
{% endhint %}

## Version Patch Notes

### v2.0

**Mixer and Sampler**

* Clip playback with play modes, seek, in/out points, speed, and follow actions.
* Gain sliders and a level meter.
* BPM and key analysis with locks and SYNC.
* LFO and tempo sync.
* Touch crossfader and seek bars.
* INIT button in the knob panels.

**Video**

* MP4, MOV, WebM, MKV and AVI now play directly with no decoding step.
* Generated previews for videos without decoded frames.
* Live sources and a recorder.

**Shaders**

* Improved ISF support: multi-pass, audio inputs and declared defaults.
* Bind your own images to a shader's image inputs.
* Undo shader swaps.
* Shaders are classified in the background, so browsing no longer freezes the unit.
* Native shaders start with knobs at 0.

**Sleepy Cloud and presets**

* Faster, more reliable Sleepy Cloud sync, with download progress in the top bar.
* Shared cloud items are badged and protected from edits.
* Clear messages when the cloud folder isn't available or a delete reaches the cloud.
* Items loaded on a track can't be deleted.
* Preset sync checks that you're online first.
* Online-only mode warns you before dropping decoded frames.

**System Link and devices**

* System Link now matches Shadygram, with shared shader time and per-knob mod pages synced across devices.
* Samba settings popup.
* BLE and OSC device support.
* Simpler sign-in: the keyboard pre-fills just your username.

## How to Update

1. Connect to Internet via WiFi or Ethernet
2. Tap the System Settings Gear > The Firmware version will turn into a button when a new version is available.
3. Make sure your device won't be unplugged during the process and confirm update.
4. Wait for update to complete and engine to restart, you will see some scrolling text, this is normal.

{% hint style="warning" %}
Do not power off the device during firmware update.
{% endhint %}

## Backup Your Settings

Your filesystem will be preserved, but you should still make a habit of backing up important media via the file browser.

{% hint style="success" %}
Having issues? See the [Troubleshooting Guide](hypno-2-troubleshooting.md)
{% endhint %}
