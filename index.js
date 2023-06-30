//imports
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

//README Questions
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  }];

//Function to show user prompts
const promptUser = () => {
    return inquirer.prompt(questions)
}

// function to write README file
const { writeFile } = fs.promises;

// Function to initialize app
function init() {
    promptUser()
    .then((answers) => {
        console.log(answers)
        writeFile('README.md', generateMarkdown(answers))
    })
    .then(()=> console.log('Readme created successfully!'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
