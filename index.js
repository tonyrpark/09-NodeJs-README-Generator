//Variable Declaration
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
//generate.js is in separate folder
const generate = require("./assets/generate");

const questions = [
  //Project Title displayed as title of the README
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  //Description
  {
    type: "input",
    name: "description",
    message: "Type your description for your project: ",
  },
  //Installation Instructions
  {
    type: "input",
    name: "description",
    message: "Please provide your project's description: ",
  },
  //Usage Information
  {
    type: "input",
    name: "description",
    message: "Please provide your project's usage: ",
  },
  //Contribution Guidelines
  {
    type: "input",
    name: "description",
    message: "Please provide the contributing members of the project: ",
  },
  //Test Instructions
  {
    type: "input",
    name: "description",
    message: "Please provide the project tests: ",
  },
  //Github Username Request
  {
    type: "input",
    name: "description",
    message: "What is your GitHub username? ",
  },
  //Repo Link Request
  {
    type: "input",
    name: "description",
    message: "What is the link to your GitHub repository? ",
  },
];

//Code Snippet from npmjs.com/package/inquirer below:
// var inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then(answers => {
//     // Use user feedback for... whatever!!
//   })
//   .catch(error => {
//     if(error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else when wrong
//     }
//   });

//inquirer required code
