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

SVG files provide crisp, scalable graphics that maintain quality at any resolution. The Hypno 2 automatically renders SVG files at optimal quality when loaded into channels, ensuring sharp, pixelation-free visuals perfect for logos, icons, and geometric patterns that can scale from small UI elements to full-screen visuals.

## File Management

Hypno 2 features an intuitive file browser with advanced selection and management capabilities for organizing your media files efficiently.

### File Browser Interface

The file browser provides a clean, touch-friendly interface for navigating and managing your files:

- **Always-Visible Checkboxes**: Every file and folder displays a checkbox for immediate selection
- **Master Checkbox**: Located in the browser header, provides quick select all/none functionality
- **Visual Feedback**: Selected files show checked boxes (✓), unselected files show empty boxes (☐)
- **Selection Counter**: Header displays the current number of selected files
- **Spatial Navigation**: Use the three hardware encoders to navigate - left encoder for leftmost elements, center for middle elements, right encoder for rightmost elements

### Multiple File Selection

The always-visible checkbox system makes selecting multiple files intuitive and efficient:

#### Basic Selection
1. **Select Individual Files**: Touch the checkbox next to any file to toggle its selection
2. **Select All Files**: Touch the master checkbox in the browser header to select all visible files
3. **Clear All Selections**: Touch the master checkbox again when files are selected to clear all selections
4. **Mixed Selection Indicator**: The master checkbox shows a partial state (◐) when some but not all files are selected

#### Selection Persistence
- **Directory Navigation**: Selected files remain selected when navigating between folders
- **Automatic Cleanup**: Selection state is automatically cleared when changing directories to maintain clean state
- **Memory Safety**: Selection system uses thread-safe operations for reliable performance

### Video Encoding

When working with video files, Hypno 2 offers flexible encoding options with real-time progress tracking:

#### Quality Presets
- **High Quality**: Maximum quality encoding (CRF 1, slow preset)
  - Best for archival purposes and professional workflows
  - Larger file sizes but pristine quality
  - Suitable for final output and preservation

- **Compatible**: Standard quality encoding (CRF 23, medium preset)  
  - Optimized for sharing and general playback
  - Balanced file size and quality
  - Suitable for streaming and distribution
  - Works with Android

#### Encoding Process
1. **Select Video Files**: Use checkboxes to select one or more video files
2. **Choose Quality**: Select your preferred quality preset from the encoding menu
3. **Monitor Progress**: Real-time progress bars show encoding status with frame counts
4. **Batch Processing**: Multiple files can be encoded simultaneously with individual progress tracking

### USB Drive Management

Hypno 2 automatically detects and manages USB storage devices for seamless file transfer:

#### Automatic Detection
- **Plug-and-Play**: USB drives are automatically mounted when connected
- **Multiple Partitions**: Each partition on a drive appears as a separate accessible folder
- **Drive Icons**: Visual indicators in the file browser show up to 3 connected drives
- **Capacity Display**: Drive information includes available space and total capacity

#### Safe Operations
- **Safe Removal**: Drives are properly unmounted when disconnected to prevent data corruption
- **Error Handling**: Graceful handling of drive disconnection during file operations
- **Stale Cleanup**: Automatic cleanup of mount points from previously disconnected drives

#### File Transfer
- Use the checkbox selection system to prepare files for transfer
- **Batch Operations**: Transfer multiple files simultaneously with progress tracking
- **Directory Support**: Full support for copying folders and maintaining directory structure

### File Operations

The checkbox selection system enables efficient batch operations:

#### Available Operations
- **Move Files**: Relocate selected files to different directories
- **Copy Files**: Duplicate selected files to new locations  
- **Delete Files**: Remove selected files with confirmation prompts
- **Encode Videos**: Batch encode multiple video files with chosen quality settings
- **Decode Videos**: Batch decode multiple video files to prepare for sampling

#### Operation Feedback
- **Progress Indicators**: Real-time progress bars for long-running operations
- **Cancellation**: Ability to cancel operations in progress
- **Error Reporting**: Clear feedback when operations encounter issues
- **Completion Status**: Visual confirmation when operations complete successfully

{% hint style="tip" %}
**Pro Tip**: Use the master checkbox to quickly select all files in a directory, then deselect individual files you don't want to include in batch operations.
{% endhint %}

{% hint style="warning" %}
**Important**: Always wait for file operations to complete before disconnecting USB drives to prevent data loss.
{% endhint %}

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