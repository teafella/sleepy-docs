---
description: Welcome to the Sleepy-verse!
---

# Hypno FAQ

{% hint style="info" %}
See the table of contents on the right (may need to zoom out in-browser) or just keep scrolling until you find your question.
{% endhint %}

## How do I Use Hypno

<details>

<summary>How do I use Hypno?</summary>

The full graphic manual, along with many video demonstrations of individual functions, can be found on the [Hypno Manual](hypno-manual.md). We also have a [YouTube page](https://www.youtube.com/@SleepyCircuits) that we regularly update, so be sure to subscribe. Many operational questions may be answered or linked inside this FAQ.

</details>

## How can I "reset" Hypno to its default state?

<details>

<summary>How can I “reset” Hypno to its default state?</summary>

Hypno always boots to the default patch, but to save yourself the time and effort of power cycling, you can use one of Hypno’s built-in features: presets. Simply save a preset of the default patch, and you’ll be able to recall it whenever you want! Check out [our video on presets](https://youtu.be/JvqTCcC8ud0?si=f2vIBZKxoCyZpDmz) to learn more.

</details>

## How do I update Hypno's firmware?

<details>

<summary>How do I update Hypno’s firmware?</summary>

Firmware downloads and instructions are at [this page.](https://sleepycircuits.gitbook.io/sleepy-circuits/hypno/hypno-firmware)

</details>

## How do I get Hypno out of its Enclosure?

<details>

<summary>How do I get Hypno out of its enclosure?</summary>

Current versions of Hypno are attached to the enclosure with standard Eurorack m3 screws, simply unscrew them from the case to remove Hypno. For older versions, we made [a video to show you how](https://vimeo.com/472684965). For Hypno Kit see [here](https://youtu.be/QfaHEeOPxZY?t=322) (and reverse the process shown).&#x20;

</details>

## What kind of video outputs is Hypno Capable of?

<details>

<summary>What kind of video outputs is Hypno capable of?</summary>

Hypno has built in HDMI digital video output on the top or side of the unit, depending on your model. Certain Raspberry Pi versions include a TRRS multipack for composite output. The composite video can be standard definition NTSC or PAL (480i/576i). It is not possible to use both outputs simultaneously; Hypno will automatically use the HDMI output if it is connected to an active display on boot. If no display is detected, it will default to composite. NDI video output via USB is possible in either video output mode.

</details>

## How do I record Hypno's output?

<details>

<summary>How do I record Hypno’s output?</summary>

Hypno is capable of outputting three different video formats: HDMI (digital), composite (analog), and NDI (digital). We made a [video explaining](https://youtu.be/NDmuRfJRp7g?si=0HvoBbXP854ylhR3) one of the easiest ways to record Hypno with the free software [OBS](https://obsproject.com). Except for NDI, a capture device is required to stream Hypno’s video output into a computer. You can get started recording Hypno without additional hardware by using its NDI output over USB or Ethernet. Full NDI + OBS setup guides for Windows and Mac are in the [Setup & Troubleshooting Manual](hypno-set-up-and-troubleshooting-manual.md#4-ndi-output).

</details>

## What other video devices can I use with Hypno?

<details>

<summary>What other video devices can I use with Hypno?</summary>

The sky is the limit! Because Hypno has both analog and digital outputs, you can patch it into tons of different analog video switchers (like the Roland V-4, as shown in [this video](https://youtu.be/GXriAjCdTdY?si=hQORZpemUjaUF3A9)) and digital video switchers (such as the Blackmagic Atem Mini or Roland V-4EX), or interface with [LZX video synthesizers](https://lzxindustries.net) and video glitch devices from [Syntonie](http://www.syntonie.fr/) and [BPMC](http://www.glitchart.com/). If you have a computer, you use programs like [OBS](https://obsproject.com/), [Resolume](https://www.resolume.com/), [GLMixer](https://sourceforge.net/projects/glmixer/), [Max](https://youtu.be/cmdeG2SnOl8) for post-processing and capture.\
You can also run video streams from analog and digital hardware (like an [iPad or iPhone](https://youtu.be/JLVM5uxzAhk)) into Hypno’s engine for processing, further opening up new worlds of hypnotic visuals.&#x20;

</details>

## How do I interface Hypno with my LZX video modular?

<details>

<summary>How do I interface Hypno with my LZX video modular?</summary>

[LZX Industries](https://lzxindustries.net) is a popular brand of analog video synthesizers for the Eurorack format, and there are many ways for them to play with Hypno — in both directions.

**Getting your LZX video modular into Hypno (LZX → Hypno)**

Hypno can accept video input from external sources, letting you use Hypno as a final output/effect for your analog video synthesizers. You’ll need:

* Hypno + microUSB OTG adapter
* An HDMI to USB 2.0 capture device
* A YPbPr (analog component) to HDMI upscaling converter (only for Visual Cortex — skip for Memory Palace)
* An LZX Visual Cortex with component video cables, OR a Memory Palace with its DVI adapter

Signal chains:

* Visual Cortex YPbPr out → YPbPr-to-HDMI upscaling converter → HDMI-to-USB 2.0 capture device → USB OTG adapter → Hypno
* Memory Palace DVI out → DVI-to-HDMI dongle/cable → HDMI-to-USB 2.0 capture device → USB OTG adapter → Hypno

Visual Cortex outputs 480i analog component, so the converter MUST support upscaling; Memory Palace outputs progressive 480p over DVI, so no analog conversion is needed and it gives the highest quality result. The video gets compressed a bit in this chain (mostly from the USB 2.0 capture device) but overall quality is impressive.

**Using Hypno in your LZX modular video ecosystem (Hypno → LZX)**

Two things to know: current LZX modules only decode grayscale from composite (Visual Cortex/Vidiot), and there are no HDMI input modules in the LZX catalog. So:

* _Grayscale via composite (simplest):_ connect Hypno’s composite output to Visual Cortex, Vidiot, or Cadet I+III. You only get luma, but Hypno acts as an incredibly capable “complex VCO”: colorize it with Mapper, Staircase, Topogram, Fortress, etc.; use it as a complex modulator for Navigator, Shapechanger, Prismatic Ray; generate hard/soft keys via Doorway or Memory Palace; or parallel-process the luma three ways and recombine in an RGB compositor. Dial back feedback/gain and use a single shape generator for more defined patterns.
* _Full color via HDMI + converters:_ convert Hypno’s HDMI down to 480i component using an HDMI-to-VGA dongle plus a scan converter (best bang for buck), a downscaling HDMI-to-YPbPr box (must support 480i/576i output), pro AV converters (Extron/Kramer/TVOne), or a video mixer like the Roland V-4EX (HDMI in, 480i component out).
* _Composite to component:_ possible via video mixers (Panasonic MX-70, Roland V-440HD/V-4EX, Datavideo SE-500, Sony DFS700), but offers no real fidelity gain over composite itself.

Questions about a specific LZX setup? Email support@sleepycircuits.com.

</details>

## How do I use Hypno’s USB video input?

<details>

<summary>How do I use Hypno’s USB video input?</summary>

First, please make sure to check out [this portion of the manual ](https://sleepycircuits.gitbook.io/sleepy-circuits/hypno/hypno-manual#uvc-video-input-cameras-and-capture-cards\\)all about this function. Make sure to follow the connection diagram found there precisely, following the order of connections. There are 2 types of inputs Hypno can recognize, USB MP4 files or UVC webcams. We have a [video guide about UVC video input here ](https://youtu.be/CurmVsxpubY?si=noGxk4L1tGrNFkUV) and [USB MP4 sampling here](https://youtu.be/x9mkvRHckG4?si=0iDuzpU4iQYYRKe-).

We also keep a running [List of Compatible USB Accessories (Webcams/Capture Cards and MIDI devices)](hypno-set-up-and-troubleshooting-manual.md#compatible-usb-accessories) in the Setup & Troubleshooting Manual. So if youre not sure about your accessory make sure to check this out.

</details>

## Where can I get some sweet video content to run through Hypno

<details>

<summary>Where can I get some sweet video content to run through Hypno?</summary>

Sleepy Circuits offers a number of [Videos Packs on our website](https://sleepycircuits.com/video-packs), many of which are free.

</details>

## How do I use Hypno’s NDI output?

<details>

<summary>How do I use Hypno’s NDI output?</summary>

Hypno is capable of broadcasting its output as NDI video via its USB ports (or the Ethernet port on properly equipped Hypno Kit). Full NDI + OBS setup guides for Windows and Mac are in the [Setup & Troubleshooting Manual](hypno-set-up-and-troubleshooting-manual.md#4-ndi-output).

</details>



## Will my synthesizer work with Hypno / Is Hypno audio reactive?

<details>

<summary>Will my synthesizer work with Hypno / Is Hypno audio reactive?</summary>

Short answer: yes! Hypno is compatible with both Eurorack control voltages and MIDI control. If your synthesizer, MIDI controller, modular, or groovebox can output either of these, you can use it to control Hypno and program animations that are timed to music. Our [Hypno & OP-Z Tutorial](https://www.youtube.com/watch?v=KxKJ7ShE5RI) goes over some basics for controlling your visuals with MIDI, while our [Making Audiovisuals with Mother-32 and Hypno](https://youtu.be/2NjUEZZtq_0) video will teach you how to interface Hypno’s visuals with control signals from your musical synthesizers. The full guide to making audiovisual patches is below.

**The Case for Asynchronous Visuals and Music**

Hypno has a multitude of built in modulations to animate its parameters. These alone will add a great deal of motion to your patch. Even without external synchronization, you can make outstanding visuals for music using asynchronous modulations — when cycling elements in music and video are slightly out of sync, the resulting phase effects can be quite appealing. Sometimes the best audio-visual experiences are the ones you didn’t entirely expect to create.

**Understanding Voltage and Modular Synthesizers**

In the sub-audio range (<20Hz), “slow” currents used to modulate another value are called control voltages or CV. In general modular synthesizers work within a range of +5V to -5V, which is also what Hypno expects through its CV inputs. CV sources fall into four main categories:

* **LFOs** (Low Frequency Oscillators) produce cycling voltages in waveforms like triangle, sine, saw and square — automatically repeating motion, synced or unsynced to your music.
* **Envelope generators** produce “one shot” voltage changes (attack/decay stages), triggered externally — good for single events of animation, such as when a new note is played.
* **Sequencers** play back voltage values in a predetermined order, clocked by your system — repeating sequences of parameter values.
* **Random** modules produce continuous, non-repeating voltages for breaking monotony and adding unpredictable movement.

Check out [ModularGrid](http://www.modulargrid.net) to explore the vast number of modules that exist!

**Using Your Modular Synth to Animate Hypno**

It is as easy as patching an LFO or envelope from your synth to one of Hypno’s CV inputs — have Shape A frequency follow your filter cutoff, or fade the master gain with the same signals controlling your VCA. Some tips:

* Hypno’s CV inputs accept +5V to -5V; +5V is the knob at maximum, -5V at minimum.
* Voltages beyond +/-5V will be **clipped**. A little extra won’t hurt Hypno, but avoid signals above +/-12V as this could damage your module.
* Incoming CV is summed with the parameter’s knob position, letting you **offset** the modulation.
* You’ll often want to **scale/attenuate** your CV depending on how much modulation you want.
* Some signals may need **amplification** — especially from the LZX ecosystem, which uses a 0–1V standard.
* Use **multiples** or **stackcables** to split CV out to Hypno for parallel changes in music and visuals.
* Combine LFOs and envelopes with **mixers** and **VCAs** for more complex CV.

**Generating Control Voltages from Music**

* Just patch the music in! This provides a usable audioreactive effect, though busy music translates into jittery motion. Standard line level audio may need amplification to Eurorack levels — see [this Perfect Circuit article](https://www.perfectcircuit.com/signal/eurorack-line-level).
* For “beat reactive” visuals, use an **envelope follower**, which creates rising and falling voltages from the volume peaks of audio ([Noise Engineering’s article](https://www.noiseengineering.us/blog/envelope-following) is a great primer).
* A **low-pass filter** can “smooth out” busy peaks; an **EQ** can isolate the kick or hats for individual modulation.
* Get the **click track** to synchronize or trigger events in your system.

**MIDI Sequencing and Modulation**

Every parameter in Hypno is mapped to a CC# (see the [MIDI chart in the manual](hypno-manual.md)). Incoming MIDI messages override the front panel knob positions and CV inputs. Using a MIDI sequencer, groovebox, or drum machine with extra MIDI tracks:

* Sequence CC values in patterns to change Hypno’s parameters in perfect time with your music
* Change presets in time with the music by writing MIDI note sequences
* Use MIDI LFOs and automations for tempo-synced animations
* Polymetric sequences create less repetitive modulation patterns
* Probability and random features add unpredictability to your modulations

</details>

## What kind of signals can I patch into Hypno’s CV/Gate inputs?

<details>

<summary>What kind of signals can I patch into Hypno’s CV/Gate inputs?</summary>

Hypno’s 1/8"/3.5mm Eurorack-style inputs accept a range of +/-5V modulation signals from Eurorack and other modular synthesizers. Voltages above or below this range will be clipped. Do not patch any voltages greater than +/-12V into Hypno as this may damage the module.

</details>

## What are some Eurorack modules that work with Hypno?

<details>

<summary>What are some Eurorack modules that work with Hypno?</summary>

Here is our list of favorite LFOs and other modulators that open up a lot of interesting animations with Hypno:

* [**ALM Busy Circuits Pamela’s New Workout**](https://busycircuits.com/alm017/) — 8 simultaneous, clocked modulators with individual control over clock divisions, waveshape, level, phase and more. Will quickly fill almost every patch point on Hypno for synchronous and asynchronous modulation. Menu-driven, but hard to beat for its size, density and price. Outputs 0–5V.
* [**XAOC Devices Batumi**](http://xaocdevices.com/main/batumi/) — multi-mode quad LFO with 12 simultaneous outputs. Four independent LFOs, each with 3 waveform outputs, usable in free, quadrature, clock divided, or phase modulated modes. Quadrature and phase modes are extremely sweet for dialing in animation that “pushes and pulls.” Outputs -5V/+5V.
* [**XAOC Devices Zadar**](http://xaocdevices.com/main/zadar/) — quad “vector” envelope generating triggered modulation from a large library of vector shapes, from simple to complex. Envelopes can be triggered externally or looped like an oscillator, with a great deal of waveshape control. Outputs 0–10V.
* [**Make Noise Maths**](http://www.makenoisemusic.com/modules/maths) — arguably the most popular eurorack module of all time. Two A/D function generators that can be triggered or looped, plus powerful voltage processing to combine and transform voltages from other modules. Can also act as an envelope follower for audio reactivity. Overall range -10/+10V.
* [**LZX Industries Sensory Translator**](https://lzxindustries.net/products/sensory-translator) — multiband envelope follower that splits incoming audio into 5 frequency bands and generates CV for each. Superb for modulation synced to music, with an onboard microphone. NOTE: LZX modules work on a 0–1V standard, far below Eurorack ranges, so it will require some amplification to use with Hypno.
* [**SSF Ultra Random Analog**](http://www.steadystatefate.com/ultra-random-analog) — generates several different random voltages at once, with stepped or smooth options. Great for breaking the monotony of cyclic modulation and adding unpredictable movement. Outputs -10V/+10V.
* [**Ornament & Crime**](https://ornament-and-cri.me/) — packs many module types into one generic interface: envelope generator, sequencer, quadrature wavetable LFO, and much more. Killer bang for buck (there’s an 8hp mini version too). Range about -3V/+5V.

</details>

## How do I control Hypno with MIDI?

<details>

<summary>How do I control Hypno with MIDI?</summary>

Hypno can accept MIDI control from class-compliant USB MIDI controllers and interfaces. Simply connect the MIDI device with a USB OTG cable ( you may need a microUSB adapter). The [online Hypno manual](hypno-manual.md) provides a table for the MIDI implementation and there’s a [short video tutorial](https://youtu.be/xghMVRDGoV8?si=4Jo2ODDqG_oWyKse) too. We’ve also released an informative [Hypno & OP-Z Tutorial ](https://www.youtube.com/watch?v=KxKJ7ShE5RI)which contains tons of useful tips for controlling Hypno with MIDI. MIDI devices we have tested are also documented in the [List of Compatible USB Accessories](hypno-set-up-and-troubleshooting-manual.md#compatible-usb-accessories) in the Setup & Troubleshooting Manual.

</details>

## When my audio interface and Hypno are connected to my computer, I sometimes experience electrical hum; How do I eliminate this?

<details>

<summary>When my audio interface and Hypno are connected to my computer, I sometimes experience electrical hum; How do I eliminate this?</summary>

Ground loops are a common cause of noise, hum, and interference in audio and video devices when each interconnected device is receiving its power from a separate source. We’ve provided some basic steps to isolate and eliminate ground loops in the [Setup & Troubleshooting Manual](hypno-set-up-and-troubleshooting-manual.md#ground-loops).

</details>

## **How do I get a Hypno?**

<details>

<summary><strong>How do I get a Hypno?</strong></summary>

Hypno is available to order directly from Sleepy Circuits via the [Hypno Product Page](https://sleepycircuits.com/hypno). We are not stocking retailers or resellers at this time.

#### If you're unsure which Hypno to get, check out our in depth guide[historical-hypno-versions-expanders-and-pi-variants.md](../archived-deprecated/historical-hypno-versions-expanders-and-pi-variants.md "mention")

</details>

## **When is my Hypno Shipping?**

<details>

<summary><strong>When is my Hypno Shipping?</strong></summary>

Mondays and Fridays are typically when shipments leave Sleepy Circuits HQ. We cannot guarantee shipping times, but we do include tracking information.

Hypno is produced in batches, and we do our best to estimate the timeline of future batches based on currently available information. When Hypno runs sell out, we may temporarily disable pre-orders until production can catch up, but rest assured we are making more! The lead time for shipment of pre-orders is always listed on the [Hypno product page.](https://sleepycircuits.com/hypno)

</details>

## Can you Ship a Hypno to my country?

<details>

<summary>Can you Ship a Hypno to my country?</summary>

We offer international shipping to a number of countries outside the USA. If your country is one of them, it will be available in the “Country” dropdown list on our check out page. Not all destinations are possible at this time. Feel free to reach out to us if your country isn't available and if local laws permit we will do our best to open shipping to your desired country

</details>

## How can I keep up with Sleepy Circuits?

<details>

<summary>How can I keep up with Sleepy Circuits?</summary>

All the ways! You can join our email list by entering your email into the signup box at the bottom of our [website](https://sleepycircuits.com). We’re also on [Instagram](https://www.instagram.com/sleepycircuits/), [YouTube](https://www.youtube.com/c/SleepyCircuits), and we have our own chat at [shadygram.com](https://shadygram.com), too, where you can talk all things Sleepy with other users (its sort of like a Sleepy hosted Discord/Slack).

</details>

## How do I get help or support for my Hypno?

<details>

<summary>How do I get help or support for my Hypno?</summary>

If we haven’t answered your question in this FAQ, or you need technical assistance, please send us an email at [support@sleepycircuits.com](mailto:support@sleepycircuits.com).

</details>

## I have an idea or feature request for Hypno.

<details>

<summary>I have an idea or feature request for Hypno.</summary>

Please feel free to email your ideas and feature requests to [support@sleepycircuits.com](mailto:support@sleepycircuits.com). We can’t respond to every request, but we always take user feedback into consideration. If you are very passionate about testing Hypno please reach out to support@sleepycircuits.com about our private beta program.

</details>

## What’s this I hear about a recall?

<details>

<summary>What’s this I hear about a recall?</summary>

In January of 2021, we identified a minor hardware flaw that could cause issues for some users. A voluntary recall is currently open for those experiencing this problem who would like it fixed. Hypnos produced since January 2021 no longer have this issue.

The recall covers **Hypnos shipped on or before Dec 2020** whose parameters show jitter when no CV inputs or MIDI are plugged in. To test: set Shape A to a single color line and watch the video without touching the unit. If any of the controls jump in the span of about 40–60 seconds, your unit is affected.

If this is the case, **please send an email to** [**support@sleepycircuits.com**](mailto:support@sleepycircuits.com) with:

1. Your Sleepy order number, or retailer name and order number if purchased elsewhere
2. Your most up to date mailing address
3. A one sentence description of the issue you are experiencing

Domestic (U.S.) customers will be issued a return label; your unit will be received, repaired, re-tested and mailed right back to you as quickly as humanly possible. International customers will need to arrange shipping and will be reimbursed for economical shipping costs — you MUST have your repair RMA authorized with us first, and mark the shipment as a repair/return on any customs declarations. There is no time limit on this recall.

</details>

###
