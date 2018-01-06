# MMM-Openhab

**Full control of your Openhab System using (touchscreen, mouse or touchpad (but that's only the beginning)**

![](snip1.png)

## How it works

The module displays all values from your Openhab sitemap. You can also change
all values and switches (like lites, temperature and s.o.)

After the installation u can find an example of an Openhab2 (version 2.2) modified sitemap file
using the html and css values fitting for MagicMirror. Copy them to your Openhab2 config dir 
into html. Now all u have to do is add a line at the beginning of your sitemap:

example:

sitemap MMM label="MMM-Openhab"
{
        // Set for MMM-Openhab
	Webview url="/static/MMM-View.html"
	...
}

Dont wonder about the "/static"  this is the same as "/html" but Openhab2 wants it this way.

* Annotated .css file included for aligning and coloring text and header.

## Installation

* git clone https://github.com/tbbear/MMM-Openhab` into the `~/MagicMirror/modules` directory.

* No API key needed! Only a running Openhab System.

## Config.js entry and options

    {
        module: 'MMM-Openhab',
        position: 'bottom_right',                   // Best in left or right regions
        config: { 
		
		url: "http://wr-pi-openhab:8080/basicui/app?sitemap=MMM"   // url of your Openhab sitemap
	
        }
    },
	
## Special thanks to CowboysDude and Mykle1 for teaching me!
