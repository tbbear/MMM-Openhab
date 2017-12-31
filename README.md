## MMM-Openhab

Full control of your Openhab System using .

## How it works

The module reads actual result data from the Suntrol Powermanagement tool.

* Annotated .css file included for aligning and coloring text and header.

## Installation

* `git clone https://github.com/tbbear/MMM-Solardach` into the `~/MagicMirror/modules` directory.

* No API key needed! Only a Suntrol Photovoltaic roof!

## Config.js entry and options

    {
        module: 'MMM-SolarDach',
        position: 'top_right',                   // Best in left or right regions
        config: { 
		
		url: "http://xxx.xxx.xxx.xxx/rest/solarworld/lpvm/powerAndBatteryData"   // url of your Suntrol Powermanagement tool
	
        }
    },
	

## Special thanks to CowboysDude and Mykle1 for teaching me!
