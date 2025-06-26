---
description: User manual for the Sleepy Circuits Hypno 2 Hardware Video Synthesizer
---

# Hypno 2 Manual

{% hint style="info" %}
Hypno 2 is a hardware video synthesizer with 3 knobs, 3 buttons, CV inputs and built-in microphone.
{% endhint %}

## Quick Start

1. Connect HDMI to your display (Optional, can use built-in display)
2. Power on display first, then Hypno 2
3. Use the 3 knobs to control parameters
4. Press knobs for additional functions
5. Use the 3 buttons for presets and navigation

## Controls

### Knobs
- **Left Knob**: Shape and pattern control
- **Center Knob**: Color and effects  
- **Right Knob**: Movement and feedback

### Buttons
- **Left Button**: Channel 1 Select
- **Center Button**: Master Channel Select
- **Right Button**: Channel 3 Select

## Audio Reactive Mode

The built-in microphone creates visuals that respond to sound. Adjust sensitivity with the audio controls.

## Video Input

Connect video sources via USB or capture devices for live video processing.

## Modulation System

Hypno 2 features advanced parameter modulation capabilities that can animate your visuals automatically. Each knob can be modulated by multiple sources with independent gain control.

### Modulation Sources
- **DC Sources**: Static modulation values (DC_1 through DC_4)
- **AC Sources**: Audio modulation inputs (AC_1)
- **Audio Following**: Built-in microphone with adjustable magnitude and slew rate
- **BPM Sync**: Sync to external clock sources

### Modulation Functions
- **Sine Wave**: Smooth cyclic modulation
- **Cosine Wave**: 90-degree phase shifted sine wave  
- **Triangle Wave**: Linear up-and-down modulation
- **Ramp Wave**: Sawtooth-style linear modulation
- **Tangent Wave**: Exponential-style periodic modulation
- **Smooth Random**: Natural organic modulation using Perlin noise
- **Pulse Wave**: Square wave with 50% duty cycle for strobe effects
- **Exponential**: Fast rise curve for crescendo effects
- **Logarithmic**: Fast attack, slow decay for natural decay
- **Stepped Random**: Sample & hold random values (16 steps per cycle)
- **Bounce**: Bouncing ball physics with 4 bounces per cycle
- **Chaos**: Lorenz attractor chaotic system for unpredictable patterns
- **Heartbeat**: Double-peak biological rhythm pattern
- **Pendulum**: Physics-based pendulum motion with non-linear timing

### BPM Sync Features
When BPM sync is enabled, modulation can lock to external clock sources:

**Division Options**: 1/32, 1/16, 1/8, 1/4, 1/2, 1/1, 2x, 4x, 8x, 16x  
**Sync Sources**: Two independent trigger inputs  
**Phase Continuity**: Smooth transitions when changing divisions or BPM

### Audio Following
The built-in microphone can modulate parameters with adjustable:
- **Magnitude**: Sensitivity to audio input (bipolar -1 to +1)  
- **Slew Rate**: Smoothness of audio response (0 to 1)

## Supported File Formats

### Images
- **Raster Images**: JPEG, PNG, BMP, GIF
- **Vector Graphics**: SVG (Scalable Vector Graphics)

SVG files provide crisp, scalable graphics that maintain quality at any resolution. Perfect for logos, icons, and geometric patterns that can scale from small UI elements to full-screen visuals.

## Overview

Hypno 2 is a hardware video synthesizer with advanced signal processing capabilities.

## Controls and Interface

### Mod Menu

The mod menu displays real-time information about modulation sources and inputs:

- **CV Inputs**: Shows the current values of all connected CV inputs with visual indicators on the left side
- **Audio Input**: Displays the current audio input level with an ear icon on the left side
- **Trigger Interval BPM**: Shows beats per minute readings for each trigger input @ 64ppqn

The trigger interval BPM display converts the frequency of incoming trigger signals into beats per minute, useful for syncing visual content to musical tempo. Each trigger input shows its own BPM readout with a clock icon, positioned vertically along the right edge of the screen for easy visibility.

{% hint style="success" %}
Need help? Check the [FAQ](hypno-2-faq.md) or [Troubleshooting Guide](hypno-2-troubleshooting.md)
{% endhint %} 