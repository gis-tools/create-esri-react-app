#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var program = require('commander');

var bootstrapAppJs3 = __dirname + '/resources/App3.js';
var bootstrapAppJs4 = __dirname + '/resources/App4.js';
var bootstrapAppHtml3 = __dirname + '/resources/index-api-3.html';
var bootstrapAppHtml4 = __dirname + '/resources/index-api-4.html';
var bootstrapAppCss = __dirname + '/resources/App.css';
var greenColor = '\x1b[32m';
var resetColor = '\x1b[0m';
var currentWorkingDirectory = path.resolve('./');
var bootstrapAppJs;
var bootstrapAppHtml;

program.version('0.1.0').option('-a, --api [number]', 'Add API version', 4).parse(process.argv);

// Input app name from command line
var appName = program.args[0];

if (program.api === '3') {
  bootstrapAppJs = bootstrapAppJs3;
  bootstrapAppHtml = bootstrapAppHtml3;
} else {
  bootstrapAppJs = bootstrapAppJs4;
  bootstrapAppHtml = bootstrapAppHtml4;
}

if (process.argv.length <= 2) {
  console.log('Run' + greenColor + ' create-esri-react-app app_name' + resetColor);
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
   * Execute CLI commands
   */
  var exec = require('child_process').exec;

  // Create react App
  console.log('Creating a new ESRI React App in ' + greenColor + currentWorkingDirectory + '/' + appName + resetColor + '.');
  console.log('    - ESRI api v%s', program.api);
  var createEsriApp = 'create-react-app ' + appName;
  exec(createEsriApp, function (error, stdout, stderr) {
    var addModule = 'cd ' + appName + ' && yarn add esri-loader';
    exec(addModule, function (error, stdout, stderr) {
      console.log('');
      console.log('Success! ESRI React App ' + greenColor + appName + resetColor + ' is created at ' + greenColor + currentWorkingDirectory + resetColor + ' ');
      console.log('Inside that directory, you can run several commands:');
      console.log('');
      console.log('We suggest that you begin by typing:');
      console.log('');
      console.log('    ' + greenColor + 'cd' + resetColor + ' ' + appName);
      console.log('    ' + greenColor + 'yarn start' + resetColor);
      moveAppJS(bootstrapAppJs, appName);
      moveAppHTML(bootstrapAppHtml, appName);
      moveAppCSS(bootstrapAppCss, appName);
    });
  });
}