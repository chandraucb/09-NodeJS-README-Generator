//imports
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

//README Questions
const questions = [{
    type: 'input',
    name: 'title',
    message: `What is your project title?
`,
  },{
    type: 'input',
    name: 'description',
    message : `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    - What was your motivation?
    - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    - What problem does it solve?
    - What did you learn?
`
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
