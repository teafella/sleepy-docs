# Hypno No-Pi Kit Guide

{% hint style="info" %}
**In Trouble?** Post on [our forum](https://forum.sleepycircuits.com), ask the [chat ](https://forum.sleepycircuits.com/t/new-beta-chat-room-via-matrix/554)or contact support@sleepycircuits.com
{% endhint %}

## Setting up your Workspace

{% hint style="warning" %}
**PRACTICE STATIC AWARENESS:** This assembly requires you to handle electrostatic-sensitive parts. Failure to follow these recommendations will result in part failure that is not covered by manufacturer warranties.

* **Touch metal** to discharge any static buildup BEFORE handing any Circuit Boards (PCBs)
* **Handle circuit boards by their edges!**
* **Avoid** completing any of these steps on **carpet** or while wearing **fluffy clothing.** These materials tend to charge humans with static.
* **Use a static mat and wristband** if available
{% endhint %}

## Part Lists

### **Kit Provided Part List**

{% hint style="info" %}
#### Purchase your Kit Here: [https://sleepycircuits.com/hypno](https://sleepycircuits.com/hypno)
{% endhint %}

* Hypno PCB Assembly
* All-Pi Enclosure
* USB A -> USB C Cable
* SD Card with the[ Hypno Firmware](../hypno/hypno-firmware.md)
* 4x 3.5mm Eurorack Screws

### User Acquired Part List

* [ ] Raspberry Pi 3B, 3B+ or 4B
  * [USE THIS TOOL TO FIND ONE IN STOCK](https://rpilocator.com)
  * The 4B has several RAM options. **They all work**, so try to find the most affordable one. **There is no advantage of buying a higher RAM model** for use with the Hypno.
  * 3A+ is also compatible, these allow Eurorack conversion with the [Eurorack Adapter Kit](hypno-hdmi-expander-diy-project.md)
  * Pi Zero, Compute Modules (aka CM) and other Pis not listed above are **not compatible** with Hypno Ki&#x74;**.**
* [ ] Phillips Screw Driver
* [ ] (Optional) AC Wall Plug PSU
  * [ ] < 3A usb power brick
    * [ ] [Amazon](https://www.amazon.com/Charger-Bordsek-Charging-Google-Adapter/dp/B09XB5JJLX/ref=sr_1_14?crid=35U5EEBVWA91W\&keywords=3A+usb+power+block\&qid=1661893153\&sprefix=3a+usb+power+block%2Caps%2C139\&sr=8-14)
  * [ ] OR PI Official USB-C 3A AC PSU&#x20;
    * [Chicago Dist](https://chicagodist.com/products/raspberry-pi-4-psu-us-white?pr_prod_strat=copurchase\&pr_rec_pid=3855112208463\&pr_ref_pid=225528933\&pr_seq=uniform)
    * [Amazon](https://www.amazon.com/Raspberry-Model-Official-SC0218-Accessory/dp/B07Z8P61DQ/ref=sr_1_5?dchild=1\&keywords=Raspberry%2BPi%2B4%2BPower%2BSupply%2Bin%2BWhite\&qid=1632168811\&sr=8-5\&th=1)

{% hint style="success" %}
Everything is Here? Lets Go!
{% endhint %}

## Connecting WiFi (Optional)

{% hint style="info" %}
Do this to enable streaming [NDI](https://ndi.tv/tools/#download-tools) on your [LAN](https://en.wikipedia.org/wiki/Local_area_network). Performance varies with network reliability.
{% endhint %}

<details>

<summary>Connecting WiFi Procedure</summary>

* **Insert micro SD card into your computer** (for a fresh new micro SD card created with Etcher, you have to eject and insert it again)
* **Create a new file on micro SD card in the /boot/ directory called wpa\_supplicant.conf** with your computer
  * The basic text editor from your operating system is recommended (Notepad, TextEdit etc.).&#x20;
  * Make sure the file has the .conf extension, sometimes your os will try to add a .txt extension to the filename (wpa\_supplicant.conf.txt will NOT work! the filename has to be exact)
* **Copy/Paste the following lines in this file**&#x20;

```
country=US
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
network={
  ssid="YOURSSID"
  scan_ssid=1
  psk="YOURPASSWORD"
  key_mgmt=WPA-PSK
}
```

* **Replace variables with your SSID and password**, and **change the country value to your region** (Example above is for USA region)
* **Save the file to the /boot/ directory on micro SD card** with the name **wpa\_supplicant.conf**&#x20;

</details>

## <mark style="color:red;">**Assemble!!!**</mark>

* Place flashed micro SD card into Raspberry Pi
* Plug your pi 40 pin header into the Hypno PCB
* Place Electronics into the Plastic Enclosure
  * Go around the sides and apply slight pressure around ports that are not aligning & pop them in.
* Screw in your Hypno with the provided Screws
* Plug in your HDMI and then power to the back USB-C and enjoy!

## Troubleshooting

* **Hypno isn't starting or working in the case** - Make sure to look through the vents in the plastic case to confirm header alignment, this is the most common issue in this situation.
* **Case Fit Issue - Top (or side) port section is bowing out** - go around the case and apply slight pressure around any ports that aren't seated all the way into their holes, once all the holes are all the way the case should fit just right.

