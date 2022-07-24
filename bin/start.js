var fs = require('fs');
var path = require('path');

global.globalSystemToolMode = true;
global.hideLog = true;
global.verboseLevel = 0;
var verboseLevel = process.argv.find(a => a.startsWith('-verbose='));
if (typeof verboseLevel !== 'undefined') {
  global.hideLog = false;
  verboseLevel = Number(verboseLevel.replace('-verbose=', ''));
  if (!isNaN(verboseLevel)) {
    global.verboseLevel = verboseLevel;
  }
  process.argv = process.argv.filter(a => !a.startsWith('-verbose='));
}

if (process.argv.includes('-verbose')) {
  global.hideLog = false;
  process.argv = process.argv.filter(a => a !== '-verbose');
}

var pathToDistFolder = path.join(__dirname, '../dist');
var pathToBundleFolder = path.join(__dirname, '../bundle');

var pathToDistRun = path.join(__dirname, '../dist/index.js');
var pathToBundletRun = path.join(__dirname, '../bundle/index.js');
var pathToIndexRun = path.join(__dirname, '../index.js');

var distExist = fs.existsSync(pathToDistRun);
var bundleExist = fs.existsSync(pathToBundletRun);

var run;

if (bundleExist && distExist) {
  if (fs.lstatSync(pathToDistFolder).mtimeMs > fs.lstatSync(pathToBundleFolder).mtimeMs) {
    mode = 'dist';
    run = require(pathToDistRun.replace(/\.js$/g, '')).run;
  } else {
    mode = 'bundle';
    run = require(pathToBundletRun.replace(/\.js$/g, '')).run;
  }
} else {
  if (distExist) {
    mode = 'dist';
    run = require(pathToDistRun.replace(/\.js$/g, '')).run;
  } else if (bundleExist) {
    mode = 'bundle';
    run = require(pathToBundletRun.replace(/\.js$/g, '')).run;
  } else {
    mode = 'npm';
    run = require(pathToIndexRun.replace(/\.js$/g, '')).run;
  }
}

run(process.argv);
