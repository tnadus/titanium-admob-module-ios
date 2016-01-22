# admob-module-ios Module

## Description

Admob mediation module provides Appcelerator Titanium Developers to show ads easily in their apps from popular ad networks such as Google Admob, Apple iAd, Facebook Ad, mDotm and inMobi. Both banners and interstitial (Fullscreen Ads) are supported.

# Screenshots from the module

![screenshot 1](https://dl.dropboxusercontent.com/u/6355786/Admob/screenshot1.png)
![screenshot 2](https://dl.dropboxusercontent.com/u/6355786/Admob/screenshot2.png)


## Installation

Mac OS X
--------
Copy the distribution zip file into the `~/Library/Application Support/Titanium` folder


## Registration of module for your project

Register your module with your application by editing `tiapp.xml` and adding your module.
Example:

<modules>
<module version="0.1">ti.admobmoduleios</module>
</modules>

When you run your project, the compiler will combine your module along with its dependencies
and assets into the application.

## Accessing the admob-module-ios Module

To access this module from JavaScript, you would do the following:

    var admob_module_ios = require("ti.admobmoduleios");

The admob_module_ios variable is a reference to the Module object.

## Reference

See app.js file in example/ folder for reference

## Usage

See app.js file in example/ folder for how to create banner and interstitial Ads

## Author

Tarum Nadus
tarumnadus@gmail.com

## License

Using the module is free how ever, the author gets %10 commission from the ad reveue.
