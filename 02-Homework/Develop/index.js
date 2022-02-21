// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'project name',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for this project?',
      },
      {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
      },
      {
        type: 'input',
        name: 'problem',
        message: 'What problem does your project solve?',
      },
      {
        type: 'input',
        name: 'learnt',
        message: 'What did you learn through completing this project',
      },
      {
        type: 'input',
        name: 'steps',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      },    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
      },    {
        type: 'input',
        name: 'collaborators',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
      },    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.',
      },
    ]);
  };
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
