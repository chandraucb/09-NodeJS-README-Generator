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
    - Why did you build this project? 
    - What problem does it solve?
    - What did you learn?
`
  }, {
    type: 'confirm',
    name: 'toc',
    message: `Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
`,
    default: false,
    transformer: (answer) => (answer ? '👍' : '👎')
  }, {
    type: 'input',
    name: 'installation',
    message : `What are the steps required to install your project? 
Provide a step-by-step description of how to get the development environment running.
`
    }, {
        type: 'input',
        name: 'usage',
        message : `Provide instructions and examples for use. Include screenshots as needed.
To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:            
        ![alt text](assets/images/screenshot.png)
    `
    }
];

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
