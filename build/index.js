#!/usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');
var bootstrapAppJs = __dirname + '/resources/App.js';
var bootstrapAppHtml = __dirname + '/resources/index-api-3.html';
var bootstrapAppCss = __dirname + '/resources/App.css';
var redColor = '\x1b[32m';
var resetColor = '\x1b[0m';
var currentWorkingDirectory = path.resolve('./');

// Input from command line
var appName = process.argv.slice(2);

if (process.argv.length <= 2) {
  console.log('Run' + redColor + ' create-esri-react-app app_name' + resetColor);
} else {

  /*
   * Move JS file
   */
  var moveAppJS = function moveAppJS(bootstrapFile, appName) {
    var source = fs.createReadStream(bootstrapFile);
    var dest = fs.createWriteStream('./' + appName + '/src/App.js');

    source.pipe(dest);
    source.on('end', function () {
      /* copied */
    });
    source.on('error', function (err) {
      /* error */
    });
  };

  /*
   * Move CSS file
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

  /*
   * Move HTML file
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
   * Execute commands
   */
  var exec = require('child_process').exec;

  // Create react App
  console.log('Creating a new ESRI React App in ' + redColor + currentWorkingDirectory + '/' + appName + resetColor + '.');
  var createEsriApp = 'create-react-app ' + appName;
  exec(createEsriApp, function (error, stdout, stderr) {
    var addModule = 'cd ' + appName + ' && yarn add esri-loader';
    exec(addModule, function (error, stdout, stderr) {
      console.log('');
      console.log('Success! ESRI React App ' + redColor + appName + resetColor + ' is created at ' + redColor + currentWorkingDirectory + resetColor + ' ');
      console.log('Inside that directory, you can run several commands:');
      console.log('');
      console.log('We suggest that you begin by typing:');
      console.log('');
      console.log('    ' + redColor + 'cd' + resetColor + ' ' + appName);
      console.log('    ' + redColor + 'yarn start' + resetColor);
      moveAppJS(bootstrapAppJs, appName);
      moveAppHTML(bootstrapAppHtml, appName);
      moveAppCSS(bootstrapAppCss, appName);
    });
  });
}