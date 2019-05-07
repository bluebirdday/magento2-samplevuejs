# magento2-samplevuejs
A Magento 2 module that creates a page with a VueJS component developed by [Bluebird Day](https://www.bluebirdday.nl).

## Installation
Manually:

Add files into app/code/Bluebirdday/SampleVueJs directory.

```sh
$ php bin/magento module:enable Bluebirdday_SampleVueJs --clear-static-content
$ php bin/magento setup:upgrade
```

## Usage
Once the extension is installed you can view the VueJS component by browsing to **/vue**.

## Front-End module
* Inspired by the VueJS module implementation by [Mārtiņš Saukums](https://github.com/martinssu/magento2-newsletter-vuejs)
* VueJS + Babel + Webpack

## How to run
Go to app/code/Bluebirdday/SampleVueJs

* Install modules by running: `yarn`
* Watch & compile JS: `yarn dev`
* Compile JS: `yarn build`