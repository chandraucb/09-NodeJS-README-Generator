//imports
const inquirer = require('inquirer')
const fs = require('fs')

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
//function writeToFile(fileName, data) {}
const { writeFile } = fs.promises;


// function to generate README content
const generateReadme = ({ title }) =>
  `${title}
  `;

// Function to initialize app
function init() {
    promptUser()
    .then((answers) => {
        console.log(answers)
        writeFile('README.md', generateReadme(answers))
    })
    .then(()=> console.log('Readme created successfully!'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
