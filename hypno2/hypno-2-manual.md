---
description: User manual for the Sleepy Circuits Hypno 2 Hardware Video Synthesizer
---

# Hypno 2 Manual

{% hint style="info" %}
Hypno 2 is a hardware video synthesizer with 3 knobs, 3 buttons, CV inputs and built-in microphone.
{% endhint %}

## Quick Start

1. Connect the USB-C Power Input
2. Use the 3 knobs to control parameters
3. Press knobs for additional functions
4. Use the 3 buttons for presets and navigation

## Controls

Hypno 2 has two different control modes depending on whether you're using the main video synthesizer application or desktop mode.

### Hardware Overview

* **3 Pushable Encoders**: Rotary encoders that can be turned and pressed
* **3 Keyboard Buttons**: Dedicated buttons for navigation and channel selection
* **Touch Interface**: 800×480 touchscreen for menu navigation

### Main Application Mode (Video Synthesizer)

#### Encoders

* **Left Encoder (Encoder 0)**: Controls leftmost parameters and UI elements
* **Center Encoder (Encoder 1)**: Controls center parameters and UI elements
* **Right Encoder (Encoder 2)**: Controls rightmost parameters and UI elements
* **Spatial Mapping**: Each encoder corresponds to its physical position on screen

#### Buttons (Main App)

* **Button 0 (Left)**: Channel and navigation functions
* **Button 1 (Center)**: Channel and navigation functions
* **Button 2 (Right)**: Channel and navigation functions
* **Button Combinations**: Simultaneous button presses for special functions

#### Channel System

* **16 Total Channels**: Channels 1-15 for video synthesis, Channel 16 for master effects
* **Channel Selection**: Use buttons to switch between channels
* **Parameter Pages**: Each channel has multiple pages of 3 parameters each

### Desktop Mode (Raspberry Pi Desktop)

When you switch to desktop mode (accessible via Settings → "Go to Desktop"), the hardware controls emulate standard computer input:

#### Encoders (Desktop Mode)

* **Left Encoder**: Mouse X movement
* **Center Encoder**: Mouse scroll wheel
* **Right Encoder**: Mouse Y movement

#### Buttons (Desktop Mode)

* **Button 0**: ESC key
* **Button 1**: SPACE key
* **Button 2**: ENTER key
* **Button 3**: Right mouse click
* **Button 4**: Middle mouse click
* **Button 5**: Left mouse click
* **Button 0 + Button 2**: F11 key (fullscreen toggle)

This allows you to navigate the Raspberry Pi desktop environment using the hardware controls.

## Interface Navigation

Hypno 2 features a sophisticated touch-optimized interface designed for 800×480 displays with consistent visual language and intuitive navigation.

### Screen Modes

#### Fullscreen Mode (Immersive View)

* **Purpose**: Clean output display without UI elements for performance or presentation
* **Access**: Touch anywhere on the screen from any mode to toggle
* **Use**: Preview your visual creation or for live performance
* **Return**: Touch anywhere in fullscreen to return to the control interface

#### Home Screen (Control Interface)

* **Purpose**: Main control center for parameters, settings, and navigation
* **Features**: Parameter control knobs, transport controls, recording controls, quick access buttons

### Visual Design Language

* **Black backgrounds**: Touchable buttons and interactive elements
* **White backgrounds**: Non-interactive labels and information
* **Blue indicators**: Selected or active elements
* **Color inversion**: Visual feedback when buttons are pressed

### Navigation Structure

```
Home Screen
├── Parameter View (Default)
│   ├── CC Parameter Pages (3 knobs per page)
│   ├── Channel Selection (1-16)
│   └── Transport & Recording Controls
├── Modulation View
│   └── Advanced parameter modulation controls
└── Overlay Menus (z-depth layered)
    ├── Settings Menu
    ├── File Browser
    ├── Virtual Keyboard
    └── Confirmation Dialogs
```

### Spatial Control System

The encoder spatial mapping remains consistent across all UI contexts (browser, settings, parameter control) for intuitive hardware interaction.

## Audio & Video Input

* **Audio Reactive**: Built-in microphone creates visuals that respond to sound with adjustable sensitivity
* **Video Input**: Connect video sources via USB or capture devices for live video processing

## Modulation System

Hypno 2 features advanced parameter modulation capabilities that can animate your visuals automatically. Each knob can be modulated by multiple sources with independent gain control.

### Modulation Sources

* **DC Sources**: Static modulation values (DC\_1 through DC\_4)
* **AC Sources**: Audio modulation inputs (AC\_1)
* **Audio Following**: Built-in microphone with adjustable magnitude and slew rate
* **BPM Sync**: Sync to external clock sources

### Modulation Functions

* **Sine Wave**: Smooth cyclic modulation
* **Cosine Wave**: 90-degree phase shifted sine wave
* **Triangle Wave**: Linear up-and-down modulation
* **Ramp Wave**: Sawtooth-style linear modulation
* **Tangent Wave**: Exponential-style periodic modulation
* **Smooth Random**: Natural organic modulation using Perlin noise
* **Pulse Wave**: Square wave with 50% duty cycle for strobe effects
* **Exponential**: Fast rise curve for crescendo effects
* **Logarithmic**: Fast attack, slow decay for natural decay
* **Stepped Random**: Sample & hold random values (16 steps per cycle)
* **Bounce**: Bouncing ball physics with 4 bounces per cycle
* **Chaos**: Lorenz attractor chaotic system for unpredictable patterns
* **Heartbeat**: Double-peak biological rhythm pattern
* **Pendulum**: Physics-based pendulum motion with non-linear timing

### BPM Sync Features

When BPM sync is enabled, modulation can lock to external clock sources:

**Division Options**: 1/32, 1/16, 1/8, 1/4, 1/2, 1/1, 2x, 4x, 8x, 16x\
**Sync Sources**: Two independent trigger inputs\
**Phase Continuity**: Smooth transitions when changing divisions or BPM

### Audio Following

The built-in microphone can modulate parameters with adjustable:

* **Magnitude**: Sensitivity to audio input (bipolar -1 to +1)
* **Slew Rate**: Smoothness of audio response (0 to 1)

## Settings Menu

Access the settings menu through the gear icon in the main interface. The settings are organized into system controls and network connectivity options.

### System Controls

* **System Information**: View current firmware version, hardware details, and system statistics
* **Go to Desktop**: Switch to Raspberry Pi desktop mode for system administration
* **Screen Brightness**: Adjust display brightness with + and - buttons for optimal viewing
* **Fan Control**: Enable or disable the cooling fan (useful for silent operation)
* **Factory Content**: Download official content packs and resources

### Network & Connectivity

#### Wi-Fi Management

* **Wi-Fi Enable/Disable**: Toggle wireless connectivity
* **Network Selection**: Browse and connect to available wireless networks
* **Signal Strength**: Visual indicators show connection quality
* **Connection Status**: Real-time status of network connectivity

#### Bluetooth Control

* **Bluetooth Enable/Disable**: Toggle Bluetooth functionality for wireless devices
* **Device Pairing**: Connect Bluetooth MIDI controllers and other devices
* **Connection Management**: Manage paired devices and connection status

### Performance Settings

* **Render Scaling**: Automatic performance optimization based on system load
* **Memory Management**: Efficient resource cleanup and caching
* **Background Tasks**: Monitor system processes and resource usage

## Supported File Formats

### Images

* **Raster Images**: JPEG, PNG, BMP, GIF
* **Vector Graphics**: SVG (Scalable Vector Graphics)

SVG files provide crisp, scalable graphics that maintain quality at any resolution. The Hypno 2 automatically renders SVG files at optimal quality when loaded into channels, ensuring sharp, pixelation-free visuals perfect for logos, icons, and geometric patterns that can scale from small UI elements to full-screen visuals.

### Video Files

* **Primary Format**: MP4 (H.264 encoding recommended)
* **Image Sequences**: Uncompressed directories for high-quality processing

### Other Formats

* **Shaders**: `.frag` fragment shader files for custom visual effects
* **Presets**: `.json` complete system state files for performance recall

## MIDI Control

Hypno 2 features comprehensive MIDI support for external control, enabling wireless performance setups and integration with existing MIDI workflows.

### Connection Types

#### USB MIDI Controllers

1. **Plug-and-Play**: Connect USB MIDI controller to Hypno 2
2. **Automatic Detection**: System automatically detects connected devices
3. **Multiple Devices**: Support for simultaneous MIDI controllers

#### Bluetooth MIDI Controllers

1. **Enable Bluetooth**: Access Settings → Bluetooth Control → Enable
2. **Pairing Mode**: Put MIDI controller in pairing mode
3. **Device Selection**: Select controller from Bluetooth device list in settings
4. **Wireless Control**: Enjoy untethered performance control

### Supported MIDI Messages

* **Control Change (CC)**: Continuous parameter control for knobs and sliders
* **Note Messages**: Trigger-based control for preset save/recall
* **Multiple Channels**: Each MIDI channel represents a Channel of video or the Mixer on CH 1

### MIDI Features

* **Preset Integration**: MIDI mappings are saved with presets
* **Wireless Performance**: Bluetooth MIDI enables cable-free setups

## File Management

Hypno 2 features an intuitive file browser with advanced selection and management capabilities for organizing your media files efficiently.

### File Browser Interface

The file browser provides a clean, touch-friendly interface for navigating and managing your files:

* **Checkboxes**: Every file and folder displays a checkbox for multi-selection
* **Master Checkbox**: Located in the browser header, provides quick select all/none functionality
* **Visual Feedback**: Selected files show checked boxes (X), unselected files show empty boxes (☐)
* **Selection Counter**: Header displays the current number of selected files
* **Spatial Navigation**: Use the three hardware encoders to navigate - left encoder for leftmost elements, center for middle elements, right encoder for rightmost elements
* **File Renaming**: Touch filename to rename using the virtual keyboard system

### Virtual Keyboard System

Hypno 2 includes a comprehensive virtual keyboard for text input and file management:

#### Keyboard Features

* **Full QWERTY Layout**: Complete keyboard with number row, letters, and special characters
* **Shift/Caps Support**: Visual feedback for shift and caps lock states
* **Text Cursor**: Visual cursor indicator ("|") shows insertion point
* **Cursor Navigation**: Left and right arrow keys for precise text positioning

#### Encoder Integration

* **Encoder Control**: Use hardware encoders for precise cursor positioning
* **Clockwise Rotation**: Move cursor to the right
* **Counter-clockwise Rotation**: Move cursor to the left
* **Touch Positioning**: Touch text field directly to position cursor

#### Text Editing

* **Insert Mode**: Type at cursor position for precise text editing
* **Backspace**: Delete characters to the left of cursor
* **Confirmation**: Press GO button to confirm input and close keyboard
* **Cancel**: Press NO button to cancel input and return to previous screen

### Multiple File Selection

The checkbox system makes selecting multiple files intuitive and efficient:

#### Basic Selection

1. **Select Individual Files**: Touch the checkbox next to any file to toggle its selection
2. **Select All Files**: Touch the master checkbox in the browser header to select all visible files
3. **Clear All Selections**: Touch the master checkbox again when files are selected to clear all selections
4. **Mixed Selection Indicator**: The master checkbox shows a partial state (◐) when some but not all files are selected

#### Selection Persistence

* **Directory Navigation**: Selected files remain selected when navigating between folders
* **Automatic Cleanup**: Selection state is automatically cleared when changing directories to maintain clean state
* **Memory Safety**: Selection system uses thread-safe operations for reliable performance

### Video Encoding

When working with video files, Hypno 2 offers flexible encoding options with real-time progress tracking:

Select files with checkboxes, choose quality preset, and monitor real-time progress bars with frame counts.

### USB Drive Management & File Operations

USB drives are automatically mounted when connected, with support for multiple partitions and safe removal. The checkbox selection system enables batch operations:

**Available Operations**: Move, copy, delete, encode/decode videos\
**Progress Tracking**: Real-time progress bars with cancellation support\
**Safety Features**: Proper drive unmounting and error handling

{% hint style="info" %}
**Pro Tip**: Use the master checkbox to quickly select all files in a directory, then deselect individual files you don't want to include in batch operations.
{% endhint %}

{% hint style="warning" %}
**Important**: Always wait for file operations to complete before disconnecting USB drives to prevent data loss.
{% endhint %}

## Recording & Export

Hypno 2 features comprehensive recording capabilities for capturing your visual performances with high quality and proper timing.

### Video Recording System

#### Recording Features

* **High Quality Recording**: Full resolution and frame rate capture
* **Progress Tracking**: Visual progress bars show encoding status with frame counts
* **Automatic Naming**: Files automatically named with timestamp for organization

#### Recording Workflow

1. **Setup Visual**: Configure your layers, effects, and parameters as desired
2. **Start Recording**: Press the record button (turns red when active)
3. **Perform**: Play your visual performance - recording runs in background
4. **Stop Recording**: Press record button again to finish recording
5. **Processing**: Monitor real-time progress bars during frame processing
6. **Assignment Option**: Choose to assign completed recording to active channel
7. **File Access**: Find recordings in Resources/Recordings/ directory

#### Batch Processing

* **Multiple Files**: Encode multiple recordings simultaneously
* **Individual Progress**: Each encoding job shows separate progress tracking
* **Queue Management**: Background processing allows continued use during encoding

## Mod Menu

The mod menu displays real-time information about modulation sources and inputs:

* **CV Inputs**: Shows the current values of all connected CV inputs with visual indicators on the left side
* **Audio Input**: Displays the current audio input level with an ear icon on the left side
* **Trigger Interval BPM**: Shows beats per minute readings for each trigger input @ 64ppqn

The trigger interval BPM display converts the frequency of incoming trigger signals into beats per minute, useful for syncing visual content to musical tempo. Each trigger input shows its own BPM readout with a clock icon, positioned vertically along the right edge of the screen for easy visibility.

{% hint style="success" %}
Need help? Check the [FAQ](hypno-2-faq.md) or [Troubleshooting Guide](hypno-2-troubleshooting.md)
{% endhint %}
