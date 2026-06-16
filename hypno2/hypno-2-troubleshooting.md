---
description: Troubleshooting guide for common Hypno 2 issues
---

# Hypno 2 Troubleshooting Guide

{% hint style="info" %}
Step-by-step solutions for common issues with Hypno 2.
{% endhint %}

## Display Issues

### No Display Output

1. Check HDMI cable connection
2. Try a different HDMI cable
3. Test with another display
4. Verify display supports 1080p resolution

### Display Flickering

1. Try a shorter HDMI cable
2. Check display resolution settings
3. Test with a different display
4. Avoid HDMI adapters when possible

### External Display Not Detected

1. A popup should appear when connecting a powered display
2. Check that the display is powered on before connecting HDMI
3. Try disconnecting and reconnecting the HDMI cable

## Power Issues

### Won't Turn On

1. Use the official Pi5 USB-C power adapter (required)
2. Check power adapter connection at both ends
3. Try a different power outlet
4. Contact support if issue persists

### Random Shutdowns

1. Verify you're using the official Pi5 power adapter
2. Ensure adequate ventilation around the device
3. Enable fan control in Settings if device is overheating
4. Check for overheating (device should not be hot to touch)

## Audio Issues

### No Audio Response

1. Check microphone sensitivity settings in modulation menu
2. Test in a louder environment
3. Verify audio reactive mode is enabled
4. Unplug AUX jack if using built-in microphone
5. Try external audio input via AUX jack

### No Audio Output

1. Check audio device selection in Settings → Audio Tab
2. Verify output volume is not muted
3. For Bluetooth audio, ensure device is paired and connected
4. Check that audio tracks have content assigned

### Capture Card Audio Not Working

1. Audio should auto-link to video from same capture card
2. Check that capture card has audio input capability
3. Verify audio source is providing signal to capture card

## Control Issues

### Encoders Not Responding

1. Check if you're in the expected UI screen
2. Verify encoder is controlling the correct UI element (spatial mapping: left encoder = left elements, etc.)
3. Press encoder to reset the value
4. Restart the device if issue persists

### Touch Interface Issues

1. **Unresponsive Touch**: Check if screen is clean and dry
2. **Stuck in Fullscreen**: Touch anywhere on screen to return to controls
3. **UI Elements Not Working**: Verify you're touching black (interactive) areas, not white (labels)
4. **Buttons Not Responding**: Some operations block UI during processing (check for progress indicators)

## USB/File Issues

### USB Drive Not Recognized

1. Use FAT32/exFAT formatted drive (recommended for compatibility)
2. Try a different USB port&#x20;
3. Check that files are in supported formats (MP4, JPEG, PNG, etc.)
4. Verify drive has adequate power (some high-capacity drives need powered hub)

### File Browser Issues

1. **Files Not Showing**: Check if files are in supported formats
2. **Slow Navigation**: Large directories may take time to index
3. **File Operations Stuck**: Wait for completion before disconnecting drives

### MIDI Connection Problems

1. **USB MIDI Not Detected**: Try different USB port, check device compatibility on forum.sleepycircuits.com
2. **Bluetooth MIDI Won't Pair**: Enable Bluetooth in Settings first, put controller in pairing mode
3. **MIDI Learn Not Working**: Ensure parameter is selected before moving MIDI control
4. **Latency Issues**: Check for USB interference, try different MIDI channel
5. **Multiple Controllers**: Verify each controller uses different MIDI channels

## Network & Connectivity Issues

### Wi-Fi Problems

1. **Can't Connect to Network**: Check password, verify network is 2.4GHz compatible
2. **Weak Signal**: Move closer to router, check for interference
3. **Connection Drops**: Check router stability, try different network
4. **Wi-Fi Not Enabling**: Restart device, check for hardware issues

### Update Issues

1. **Update Won't Start**: Ensure at least 2 GB of free disk space, check internet connection
2. **Update Failed**: Check available disk space, retry update after freeing space
3. **Update Button Not Appearing**: Verify internet connection, check current firmware version

## Performance Issues

### Slow Performance

1. **High CPU Usage**: Disable unused layers, reduce render complexity
2. **Storage Full**: Check available disk space, delete old recordings
3. **Overheating**: Ensure proper ventilation, enable fan in settings

### Recording Problems

1. **Recording Won't Start**: Check available disk space
2. **Recording Stutters**: Reduce visual complexity/sampled file sizes during recording
3. **Can't Find Recordings**: Check Resources/Recordings/ directory

## Video Input Issues

### USB Camera Not Detected

1. Verify camera is UVC-compatible (most modern USB cameras are)
2. Try a different USB port
3. Check if camera appears in file browser with camera icon
4. Some cameras need powered USB hub

### NDI Source Not Appearing

1. Ensure Hypno 2 and NDI source are on the same network
2. Check WiFi connection in Settings
3. NDI discovery may take a few seconds
4. Verify NDI source is actively broadcasting
5. Some networks block multicast (NDI discovery protocol)

### Capture Card Video Issues

1. Verify capture card is UVC-compatible
2. Check input source to capture card is providing signal
3. Try different resolution settings on input source
4. Some capture cards work better with certain USB ports

## Shader Issues

### Shader Won't Compile

1. Check error messages displayed in the editor
2. Common issues: missing semicolons, undefined variables
3. Verify GLSL syntax is correct for fragment shaders
4. Try reverting to a known working version (undo)

### Shader Editor Problems

1. **Can't See Code**: Check editor font in Settings → Global
2. **Cursor Not Moving**: Use encoders or touch to position cursor
3. **Changes Not Saving**: Press GO to confirm edits

## Recording Issues

### Recording Won't Start

1. Check available disk space in Settings → Storage
2. Ensure no other batch operation is running (check Brain icon)
3. Wait for any pending operations to complete

### Recording Quality Issues

1. Reduce visual complexity during recording
2. Use smaller/simpler source files
3. Check storage write speed (USB drives may be slower)

### Can't Find Recordings

1. Recordings save to VIDOS-Resources/Recordings/
2. Navigate to this folder in the file browser
3. Files are named with timestamps

## Batch Operation Issues

### Operations Stuck or Frozen

1. Check the Brain icon for progress status
2. Wait for completion - some operations take time
3. Batch operations can be cancelled via progress popup
4. Don't disconnect USB drives during operations

### Conflict Errors

1. Files with same names exist at destination
2. Either rename source files or clear destination
3. System validates and reports conflicts before starting

## Getting Help

If these steps don't solve your issue:

1. Check the [FAQ](hypno-2-faq.md)
2. Visit forum.sleepycircuits.com
3. Open a support ticket at support@sleepycircuits.com

{% hint style="success" %}
Include your firmware version and describe the exact issue when contacting support. Include video recordings of issues if possible.
{% endhint %}
