#!/usr/bin/env node


'use strict';

var fs = require('fs');
var path = require('path');
var program = require('commander');

var colorGreen = '\x1b[32m';
var colorReset = '\x1b[0m';

var bootstrapAppCss = __dirname + '/resources/App.css';
var bootstrapAppJs3 = __dirname + '/resources/App3.js';
var bootstrapAppConfig3 = __dirname + '/resources/config3.js';
var bootstrapAppJs4 = __dirname + '/resources/App4.js';
var bootstrapAppConfig4 = __dirname + '/resources/config4.js';

var bootstrapAppHtml = __dirname + '/resources/index.html';

var currentWorkingDirectory = path.resolve('./');
var bootstrapAppJs;
var bootstrapAppConfig;

program.version('1.0.0').option('-a, --api [number]', 'Add API version ' + colorGreen + '-v 3' + colorReset + ' or ' + colorGreen + '-v 4' + colorReset + '. Default version of ESRI API is v4', 4).parse(process.argv);

// Input app name from command line
var appName = program.args[0];

if (program.api === '3') {
  bootstrapAppJs = bootstrapAppJs3;
  bootstrapAppConfig = bootstrapAppConfig3;
} else {
  bootstrapAppJs = bootstrapAppJs4;
  bootstrapAppConfig = bootstrapAppConfig4;
}

if (process.argv.length <= 2) {
  console.log('Run ' + colorGreen + ' create-esri-react-app [app_name]' + colorReset + 'to bootstrap your ESRI React App.');
} else {
  /**
   *  Move to App.js
   */
  var moveAppJS = function moveAppJS(bootstrapFile, appName) {
    var source = fs.createReadStream(bootstrapFile);
    var destination = fs.createWriteStream('./' + appName + '/src/App.js');

    source.pipe(destination);
    source.on('end', function () {
      /* copied */
    });
    source.on('error', function (err) {
      /* error */
    });
  };

  /**
   *  Move to App.css
   */
  var moveAppCSS = function moveAppCSS(bootstrapFile, appName) {
    var source = fs.createReadStream(bootstrapFile);
    var dest = fs.createWriteStream('./' + appName + '/src/App.css');

    source.pipe(dest);
    source.on('end', function () {
      /* copied */
    });
    source.on('error', function (err) {
      /* error */
    });
  };

  /**
   *  Move index.html file
   */
  var moveAppHTML = function moveAppHTML(bootstrapFile, appName) {
    var source = fs.createReadStream(bootstrapFile);
    var dest = fs.createWriteStream('./' + appName + '/public/index.html');

    source.pipe(dest);
    source.on('end', function () {
      /* copied */
    });
    source.on('error', function (err) {
      /* error */
    });
  };

  /**
   *  Move config.js file
   */
  var moveAppConfig = function moveAppHTML(bootstrapFile, appName) {
    var source = fs.createReadStream(bootstrapFile);
    var dest = fs.createWriteStream('./' + appName + '/src/config.js');

    source.pipe(dest);
    source.on('end', function () {
      /* copied */
    });
    source.on('error', function (err) {
      /* error */
    });
  };

  /**
   * Execute CLI commands
   */
  var exec = require('child_process').exec;

  /**
   * Create ESRI React App
   */
  console.log('Creating a new ESRI React App in ' + colorGreen + currentWorkingDirectory + '/' + appName + colorReset + '.');
  console.log('    - ESRI api v' + program.api);
  var reactLogo = './' + appName + '/src/logo.svg';
  var createEsriApp = 'npx create-react-app ' + appName;
  exec(createEsriApp, function (error, stdout, stderr) {
    var addModule = 'cd ' + appName + ' && npm install esri-loader --save';
    exec(addModule, function (error, stdout, stderr) {
      console.log('');
      console.log('Success! ESRI React App ' + colorGreen + appName + colorReset + ' is created at ' + colorGreen + currentWorkingDirectory + colorReset + ' ');
      console.log('Inside that directory, you can run several commands:');
      console.log('');
      console.log('We suggest that you begin by typing:');
      console.log('');
      console.log('    ' + colorGreen + 'cd' + colorReset + ' ' + appName);
      console.log('    ' + colorGreen + 'npm start' + colorReset + ' or ' + colorGreen + 'yarn start' + colorReset);
      moveAppJS(bootstrapAppJs, appName);
      moveAppHTML(bootstrapAppHtml, appName);
      moveAppCSS(bootstrapAppCss, appName);
      moveAppConfig(bootstrapAppConfig, appName);
      fs.unlinkSync(reactLogo);
    });
  });
}