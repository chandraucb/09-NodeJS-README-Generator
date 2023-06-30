//imports
const inquirer = require('inquirer')
const fs = require('fs')

//README Questions
const questions = [{
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'location',
    message: 'Where are you from?',
  },
  {
    type: 'input',
    name: 'hobby',
    message: 'What is your favorite hobby?',
  },
  {
    type: 'input',
    name: 'food',
    message: 'What is your favorite food?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  }];

//Function to show user prompts
const promptUser = () => {
    return inquirer.prompt(questions)
}

// function to write README file
//function writeToFile(fileName, data) {}
const { writeFile } = fs.promises;


// function to generate README content
const generateReadme = ({ name, location, github, linkedin }) =>
  `${name}
  `;

// Function to initialize app
function init() {
    promptUser()
    .then((answers) => {
        console.log(answers)
        writeFile('README.md', generateReadme(answers))
    })
    .then(()=> console.log('Read me file creatted successfully!'))
}

// Function call to initialize app
init();
