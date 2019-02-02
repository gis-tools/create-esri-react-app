#!/usr/bin/env node
'use strict';

var fs = require('fs');

var path = require('path');

var exec = require('child_process').exec; // Execute CLI commands


var program = require('commander');

var COLOR_GREEN = '\x1b[32m';
var COLOR_RESET = '\x1b[0m';
var CWD = path.resolve('.');
var templateJS;
var templateCONFIG;
program.version('1.0.0').option('-a, --api [number]', "Add API version ".concat(COLOR_GREEN, "-a 3").concat(COLOR_RESET, " or ").concat(COLOR_GREEN, "-a 4").concat(COLOR_RESET, ". Default version of ESRI API is v4"), 4).parse(process.argv); // Input app name from command line

var appName = program.args[0];
var templatesFolder = 'templates';
var templateJs3 = path.join(__dirname, templatesFolder, './v3/App.js');
var templateConfig3 = path.join(__dirname, templatesFolder, './v3/config.js');
var templateJs4 = path.join(__dirname, templatesFolder, './v4/App.js');
var templateConfig4 = path.join(__dirname, templatesFolder, './v4/config.js');
var templateCSS = path.join(__dirname, templatesFolder, 'App.css');
var templateHTML = path.join(__dirname, templatesFolder, 'index.html');

if (program.api === '3') {
  templateJS = templateJs3;
  templateCONFIG = templateConfig3;
} else {
  templateJS = templateJs4;
  templateCONFIG = templateConfig4;
}

if (process.argv.length <= 2) {
  console.log("Run ".concat(COLOR_GREEN, "create-esri-react-app [app_name]").concat(COLOR_RESET, " to bootstrap your ESRI React App."));
} else {
  /**
   * Move Template file
   * @param templateFile
   * @param appName
   * @param configLocation
   */
  var moveTemplateFile = function moveTemplateFile(appName, templateFile, configLocation) {
    var source = fs.createReadStream(templateFile);
    var destination = fs.createWriteStream("./".concat(appName, "/").concat(configLocation));
    source.pipe(destination);
    source.on('end', function () {
      /* end */
    });
    source.on('error', function (err) {
      /* error */
    });
  };
  /**
   * Create ESRI React App
   */


  console.log("Creating a new ESRI React App in folder ".concat(COLOR_GREEN).concat(CWD, "/").concat(appName).concat(COLOR_RESET, "."));
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
      moveTemplateFile(appName, templateJS, 'src/App.js');
      moveTemplateFile(appName, templateCSS, 'src/App.css');
      moveTemplateFile(appName, templateHTML, 'public/index.html');
      moveTemplateFile(appName, templateCONFIG, 'src/config.js'); // Remove reactLogo

      fs.unlinkSync(reactLogo);
    });
  });
}