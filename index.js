const inquirer = require('inquirer');
const fs = require('fs');
const {writeFile, copyFile}= require('./utils/generate-site.js');
const pageTemplate = require("./src/page-template")