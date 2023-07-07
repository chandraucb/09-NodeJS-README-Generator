//imports
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
const { Octokit } = require("@octokit/rest")
const {Separator} = require('inquirer')

const octokit = new Octokit({
    auth: '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'
  })  

//README Questions
let questions = [{
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
  },{
    type: 'input',
    name: 'url',
    message : `Github URL for the project repository
`
    },{
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
    } , {
        type: 'input',
        name: 'credits',
        message : `List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.
`
    } , {
        type: 'list',
        name: 'license',
        message : `The last section of a high-quality README file is the license. 
This lets other developers know what they can and cannot do with your project. 
If you need help choosing a license, refer to 
[https://choosealicense.com/](https://choosealicense.com/).
`,
choices: ''
    } , {
        type: 'input',
        name: 'credits',
        message : `List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.
`
    } , {
        type: 'input',
        name: 'features',
        message : `If your project has a lot of features, list them here.
`
    } , {
        type: 'input',
        name: 'contribution',
        message : `If you created an application or package and would like other developers to contribute it, 
you can include guidelines for how to do so. 
The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
`
    } , {
        type: 'input',
        name: 'tests',
        message : `Go the extra mile and write tests for your application. 
Then provide examples on how to run them here.
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

    const promise = octokit.request('GET /licenses', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    promise.then((licenses) => {
        console.log(licenses)
        let licensesList = Object.keys(licenses.data).map((key) => 
            { 
                let value = {
                    "name" : licenses.data[key].key.toUpperCase() ,
                    "value" : licenses.data[key].key
                }
                return value
            }
        );
        console.log(licensesList)

        Object.keys(questions).forEach( (key) => {
            if ( questions[key].name === 'license' ) {
                questions[key].choices = licensesList
            }
        })
    
        promptUser()
        .then((answers) => {
            console.log(answers)
            writeFile('README.md', generateMarkdown(answers))
        })
        .then(()=> console.log('Readme created successfully!'))
        .catch((err) => console.error(err));

    })
}

// Function call to initialize app
init();
