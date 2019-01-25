#!/usr/bin/env node
'use strict';

var fs = require('fs');

var path = require('path');

var program = require('commander');

var COLOR_GREEN = '\x1b[32m';
var COLOR_RESET = '\x1b[0m';
var CWD = path.resolve('.');
var bootstrapAppJs;
var bootstrapAppConfig;
program.version('1.0.0').option('-a, --api [number]', 'Add API version ' + COLOR_GREEN + '-v 3' + COLOR_RESET + ' or ' + COLOR_GREEN + '-v 4' + COLOR_RESET + '. Default version of ESRI API is v4', 4).parse(process.argv); // Input app name from command line

var appName = program.args[0];
var templatesFolder = 'templates';
var bootstrapAppCss = "".concat(__dirname, "/").concat(templatesFolder, "/App.css");
var bootstrapAppJs3 = "".concat(__dirname, "/").concat(templatesFolder, "/v3/App.js");
var bootstrapAppConfig3 = "".concat(__dirname, "/").concat(templatesFolder, "/v3/config.js");
var bootstrapAppJs4 = "".concat(__dirname, "/").concat(templatesFolder, "/v4/App.js");
var bootstrapAppConfig4 = "".concat(__dirname, "/").concat(templatesFolder, "/v4/config.js");
var bootstrapAppHtml = "".concat(__dirname, "/").concat(templatesFolder, "/index.html");

if (program.api === '3') {
  bootstrapAppJs = bootstrapAppJs3;
  bootstrapAppConfig = bootstrapAppConfig3;
} else {
  bootstrapAppJs = bootstrapAppJs4;
  bootstrapAppConfig = bootstrapAppConfig4;
}

if (process.argv.length <= 2) {
  console.log("Run ".concat(COLOR_GREEN, "create-esri-react-app [app_name]").concat(COLOR_RESET, " to bootstrap your ESRI React App."));
} else {
  /**
   *  Move to App.js
   */
  var moveAppJS = function moveAppJS(bootstrapFile, appName) {
    var source = fs.createReadStream(bootstrapFile);
    var destination = fs.createWriteStream("./".concat(appName, "/src/App.js"));
    source.pipe(destination);
    source.on('end', function () {
      /* end */
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
    var dest = fs.createWriteStream("./".concat(appName, "/src/App.css"));
    source.pipe(dest);
    source.on('end', function () {
      /* end */
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
    var dest = fs.createWriteStream("./".concat(appName, "/public/index.html"));
    source.pipe(dest);
    source.on('end', function () {
      /* end */
    });
    source.on('error', function (err) {
      /* error */
    });
  };
  /**
   *  Move config.js file
   */


  var moveAppCONFIG = function moveAppCONFIG(bootstrapFile, appName) {
    var source = fs.createReadStream(bootstrapFile);
    var dest = fs.createWriteStream("./".concat(appName, "/src/config.js"));
    source.pipe(dest);
    source.on('end', function () {
      /* end */
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


  console.log("Creating a new ESRI React App in ".concat(COLOR_GREEN).concat(CWD, "/").concat(appName).concat(COLOR_RESET, "."));
  console.log("    - ESRI api v".concat(program.api));
  var reactLogo = "./".concat(appName, "/src/logo.svg");
  var createEsriApp = "npx create-react-app ".concat(appName);
  exec(createEsriApp, function (error, stdout, stderr) {
    var addModule = "cd ".concat(appName, " && npm install esri-loader --save");
    exec(addModule, function (error, stdout, stderr) {
      console.log('');
      console.log("Success! ESRI React App ".concat(COLOR_GREEN).concat(appName).concat(COLOR_RESET, " is created at ").concat(COLOR_GREEN).concat(CWD).concat(COLOR_RESET));
      console.log('Inside that directory, you can run several commands:');
      console.log('');
      console.log('We suggest that you begin by typing:');
      console.log('');
      console.log("    ".concat(COLOR_GREEN, " cd ").concat(COLOR_RESET, " ").concat(appName));
      console.log("    ".concat(COLOR_GREEN, " npm start ").concat(COLOR_RESET, " or ").concat(COLOR_GREEN, " yarn start").concat(COLOR_RESET));
      moveAppJS(bootstrapAppJs, appName);
      moveAppCSS(bootstrapAppCss, appName);
      moveAppHTML(bootstrapAppHtml, appName);
      moveAppCONFIG(bootstrapAppConfig, appName);
      fs.unlinkSync(reactLogo);
    });
  });
}