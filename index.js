//Variable Declaration
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
//generate.js is in separate folder
const generate = require("./assets/generate.js");

const questions = [
  //Project Title displayed as title of the README
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  //Badge
  {
    type: "input",
    name: "badge",
    message: "Please list any badge links for this project: ",
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
    name: "installation",
    message: "Please provide your project's installation instructions: ",
  },
  //Usage Information
  {
    type: "input",
    name: "usage",
    message: "Please provide your project's usage: ",
  },
  //License Info
  {
    type: "input",
    name: "license",
    message: "Please provide project (any) license(s): ",
  },
  //Contribution Guidelines
  {
    type: "input",
    name: "contribute",
    message: "Please provide the contributing members of the project: ",
  },
  //Test Instructions
  {
    type: "input",
    name: "test",
    message: "Please provide the project tests: ",
  },
  //Github Username Request
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username? ",
  },
  //Repo Link Request
  {
    type: "input",
    name: "repository",
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
inquirer.prompt(questions).then(function (data) {
  const gitHubUrl = `https://api.github.com/users/${data.username}`;

  axios.get(gitHubUrl).then(function (res) {
    const gitHubData = {
      gitHubImage: res.data.avatar_url,
      email: res.data.email,
      profile: res.data.html_url,
      name: res.data.name,
    };

    fs.writeFile("README.md", generate(data, gitHubData), function (err) {
      if (err) {
        throw err;
      }

      console.log("README.md created successfully!");
    });
  });
});

function init() {}
init();
