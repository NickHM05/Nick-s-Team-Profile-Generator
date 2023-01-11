const inquirer = require('inquirer');
//const fs = require('fs');
const { writeFile } = require('./utils/generate-site.js');
const pageTemplate = require("./Src/pageTemplate");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//The array for number of employees created.
employeeTeam = [];

const managerQnA = [
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
        type: "number",
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
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the correct email address from your Manager."); return false;
            }
        }
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: 'Enter your Manager\'s office number.',
        validate: officeInput => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter your Manager\'s office number.");
            return false;
          }
        }
      },
    ]

const employeeQnA = [
    {
        type: 'list',
        name: 'addEmployee',
        message: 'Would you like to add a new Employee to your team? (Engineer or Intern)',
        choices: [
          "Yes, please add an Engineer to my team",
          "Yes, please add an Intern to my team",
          "No, there are no new team members to add"
        ]
      }
]
const engineerQnA = [
    {
      type: 'input',
      name: 'name',
      message: 'What is this engineer\'s name?',
      validate: engineerNameInput => {
        if (engineerNameInput) {
          return true;
        } else {
          console.log("Please enter your engineer\'s name");
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'id',
      message: 'Enter this engineer\'s employee ID',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter this engineer\'s employee ID");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your team manager\'s email address',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your team manager\'s email address");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter this engineer\'s GitHub username',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter this engineer\'s GitHub username");
          return false;
        }
      }
    },
  ]
  
  const internQnA = [
    {
      type: 'input',
      name: 'name',
      message: 'What is this intern\'s name?',
      validate: internNameInput => {
        if (internNameInput) {
          return true;
        } else {
          console.log("Please enter your intern\'s name!");
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'id',
      message: 'Enter this intern\'s employee ID',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter this intern\'s employee ID!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your intern\'s email address',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your intern\'s email address!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter this intern\'s school name',
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter this intern\'s school name!");
          return false;
        }
      }
    },
  ]
  
//addManager() function will prompt the questions and will instantiate the new manager object and adds to the employeeTeam array
const addManager = async() => {
    const result = await inquirer.prompt(managerQnA)

    const managerHere = new Manager(
        result.name,
        result.id,
        result.email,
        result.officeNumber
        );
        //push to employeeTeam array here
        employeeTeam.push(managerHere);
        addEmployee();
};

//addEmployee() function will be the switchboard to addEngineer(), addIntern(), and exiting inquirer and generatePage();
const addEmployee =async() => {
    const result = await inquirer.prompt(employeeQnA)
    .then(function(result) {
      switch (result.addEmployee) {
        case "Yes, please add an Engineer to my team":
          addEngineer();
          break;
  
        case "Yes, please add an Intern to my team":
          addIntern();
          break;
  
        case "No, there are no more team members to add":
          writeFile(employeeTeam);
          break;
      }
    })
  }
  // addEngineer() function prompts questions and creates new Engineer object and adds to employeeTeam array
const addEngineer = async() => {
    const result = await inquirer.prompt(engineerQnA)
  
    const engineerOccurance = new Engineer(
      result.name,
      result.id,
      result.email,
      result.github
    )
    employeeTeam.push(engineerOccurance);
    addEmployee();
  }
  
  // addIntern() function prompts questions and creates new Intern object and adds to employeeTeam array
  const addIntern = async() => {
    const result = await inquirer.prompt(internQnA)
  
    const internOccurance = new Intern(
      result.name,
      result.id,
      result.email,
      result.school
    )
    employeeTeam.push(internOccurance)
    addEmployee();
  }
  
  // call addManager function to initialize the client application.
  addManager();