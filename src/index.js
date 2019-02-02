#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec; // Execute CLI commands
const program = require('commander');

const COLOR_GREEN = '\x1b[32m';
const COLOR_RESET = '\x1b[0m';
const CWD = path.resolve('.');

var templateJS;
var templateCONFIG;

program
  .version('1.0.0')
  .option('-a, --api [number]', `Add API version ${COLOR_GREEN}-a 3${COLOR_RESET} or ${COLOR_GREEN}-a 4${COLOR_RESET}. Default version of ESRI API is v4`, 4)
  .parse(process.argv);

// Input app name from command line
const appName = program.args[0];

const templatesFolder = 'templates';
const templateJs3 = path.join(__dirname, templatesFolder, './v3/App.js');
const templateConfig3 = path.join(__dirname, templatesFolder, './v3/config.js');
const templateJs4 = path.join(__dirname, templatesFolder, './v4/App.js');
const templateConfig4 = path.join(__dirname, templatesFolder, './v4/config.js');
const templateCSS = path.join(__dirname, templatesFolder, 'App.css');
const templateHTML = path.join(__dirname, templatesFolder, 'index.html');

if (program.api === '3') {
  templateJS = templateJs3;
  templateCONFIG = templateConfig3;
} else {
  templateJS = templateJs4;
  templateCONFIG = templateConfig4;
}

if (process.argv.length <= 2) {
  console.log(`Run ${COLOR_GREEN}create-esri-react-app [app_name]${COLOR_RESET} to bootstrap your ESRI React App.`);
} else {

  /**
   * Move Template file
   * @param templateFile
   * @param appName
   * @param configLocation
   */
  var moveTemplateFile = (appName, templateFile, configLocation) => {
    var source = fs.createReadStream(templateFile);
    var destination = fs.createWriteStream(`./${appName}/${configLocation}`);

    source.pipe(destination);
    source.on('end', function() {
      /* end */
    });
    source.on('error', function(err) {
      /* error */
    });
  };

  /**
   * Create ESRI React App
   */
  console.log(`Creating a new ESRI React App ${CWD}/${appName}${COLOR_RESET} in folder ${COLOR_GREEN}${CWD}/${appName}${COLOR_RESET}.`);
  console.log(`    - ESRI api v${program.api}`);
  var reactLogo = `./${appName}/src/logo.svg`;
  var createEsriApp = `npx create-react-app ${appName}`;
  exec(createEsriApp, function(error, stdout, stderr) {
    var addModule = `cd ${appName} && npm install esri-loader --save`;
    exec(addModule, function(error, stdout, stderr) {
      console.log('');
      console.log(`Success! ESRI React App ${COLOR_GREEN}${appName}${COLOR_RESET} is created at ${COLOR_GREEN}${CWD}${COLOR_RESET}`);
      console.log('Inside that directory, you can run several commands:');
      console.log('');
      console.log('We suggest that you begin by typing:');
      console.log('');
      console.log(`    ${COLOR_GREEN} cd ${COLOR_RESET} ${appName}`);
      console.log(`    ${COLOR_GREEN} npm start ${COLOR_RESET} or ${COLOR_GREEN} yarn start${COLOR_RESET}`);

      moveTemplateFile(appName, templateJS, 'src/App.js');
      moveTemplateFile(appName, templateCSS, 'src/App.css');
      moveTemplateFile(appName, templateHTML, 'public/index.html');
      moveTemplateFile(appName, templateCONFIG, 'src/config.js');

      // Remove reactLogo
      fs.unlinkSync(reactLogo);
    });
  });
}
