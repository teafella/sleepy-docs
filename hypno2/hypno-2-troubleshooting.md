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

### Display Flickering

1. Try a shorter HDMI cable
2. Check display resolution settings
3. Test with a different display

## Power Issues

### Won't Turn On

1. Ensure power adapter is the official Pi5 one
2. Check power adapter connection
3. Try a different power outlet
4. Contact support if issue persists

### Random Shutdowns

1. Check power adapter rating/model
2. Ensure adequate ventilation
3. Check for overheating

## Audio Issues

### No Audio Response

1. Check microphone sensitivity settings
2. Test in a louder environment
3. Verify audio reactive mode is enabled and aux jack is unplugged
4. Try external audio input if available

## Control Issues

### Encoders Not Responding

1. Check if you're in the expected UI screen
2. Verify encoder is controlling the correct UI element (spatial mapping)
3. Try pressing encoder to reset the value
4. Restart the device if issue persists

### Touch Interface Issues

1. **Unresponsive Touch**: Check if screen is clean and dry
2. **Stuck in Fullscreen**: Touch anywhere on screen to return to controls
3. **UI Elements Not Working**: Verify you're touching black (interactive) areas, not white (labels)

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

## Performance Issues

### Slow Performance

1. **High CPU Usage**: Disable unused layers, reduce render complexity
2. **Storage Full**: Check available disk space, delete old recordings
3. **Overheating**: Ensure proper ventilation, enable fan in settings

### Recording Problems

1. **Recording Won't Start**: Check available disk space
2. **Poor Recording Quality**: Verify quality settings, check system performance
3. **Recording Stutters**: Reduce visual complexity during recording
4. **Can't Find Recordings**: Check Resources/Recordings/ directory

## Factory Reset

None yet.

## Getting Help

If these steps don't solve your issue:

1. Check the [FAQ](hypno-2-faq.md)
2. Visit the forum.sleepycircuits.com
3. Open a support ticket @ support@sleepycircuits.com

{% hint style="success" %}
Include your firmware version and describe the exact issue when contacting support. Include video recordings of issue if possible.
{% endhint %}
