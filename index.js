const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const pageTemplate = require("./src/page-template")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//The array for number of employees created.
employeeTeam = [];

const manageQuestions = [
    {
        type: "input",
        name: 'name',
        message: 'What is your Manager\'s name?',
        validate: managerName => {
            if (managerName) {
                return true;
            } else {
                console.log("Please enter the correct Manager's name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is your Manager\'s id?",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log("Please enter the correct Id from your Manager.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your Manager\'s email?",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter the correct email address from your Manager."); return false;
            }
        }
    },
]

const employeeQnA = []

const addManager = async() => {
    const result = await inquirer.createPromptModule(manageQuestions)

    const managerHere = new Manager(
        result.name,
        result.id,
        result.email,
        result.officeNumber
        );
        employeeQnA.push(managerHere);
        addEmployee();
};

const addEmployee ="";