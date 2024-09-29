const fs = require('fs');

const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

function license(value) {
 if (value === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
 } else if (value === 'GPLv3') {
    return "[![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
 } else if (value === 'Apache 2.0') {
    return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
 } else if (value === 'BSD 3-Clause') {
    return "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
 } else {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
 }
}

function validateInput(value) {
    if (value === "") {
        return "Please enter a value!";
    } else {
        return true;
    }
}

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: validateInput,
    },
    {
        type: 'input', 
        name: 'description', 
        message: 'Please provide a brief description of your project:',
        validate: validateInput,
    }, 
    {
        type: 'input', 
        name: 'installation', 
        message: 'Provide installation instructions for your project:',
        validate: validateInput,
    },
    {
        type: 'input',
        name: 'usage', 
        message: 'Please provide a description of how to use your project:',
        validate: validateInput,
    },
    {
        type: 'input', 
        name: 'license', 
        message: 'Please select the type of license you would like to use:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'MPL 2.0'],
        vali, date: validateInput,   
    }, 
    {
        type: 'input', 
        name: 'contributing',
        message: 'Please provide provide guidelines for contributing to your project:',
        validate: validateInput,
    }, 
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions for running tests on your project:',
        validate: validateInput,
    },

    // questions for the user

    {
        type: 'input',
        name: 'username', 
        message: 'What is your Github username?',
        validate: validateInput,
    }, 
    {
        type: 'input',
        name: 'email', 
        message: 'What is your email address?',
        validate: function (value) {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) { // regex for email validation
                return true;
            } else {
                return "Please enter a valid email address!";
            }
        },    
    }, 
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Success! Your README.md file has been generated");
    });
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        const markdown = generateMarkdown(responses);
        writeToFile("README.md", markdown);
    });
}

init();