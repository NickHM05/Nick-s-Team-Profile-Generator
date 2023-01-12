const inquirer = require('inquirer');
const { writeFile } = require('./utils/generate-site.js');
const pageTemplate = require("./src/pageTemplate");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//The array for number of employees created.
employeeBucket = [];

const managerQ = [
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
    validate: idInput => {
      if (idInput) {
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
        console.log("Please enter the correct email address from your Manager.");
        return false;
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

const employeeQ = [
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

const engineerQ = [
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

const internQ = [
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
const addManager = async () => {
  const result = await inquirer.prompt(managerQ)
  console.log('hope this works')
  const managerHere = new Manager(
    result.name,
    result.id,
    result.email,
    result.officeNumber
  );
  //push to employeeTeam array here
  employeeBucket.push(managerHere);
  console.log(employeeBucket)
  addEmployee();
};

//addEmployee() function will be the switchboard to addEngineer(), addIntern(), and exiting inquirer and generatePage();
const addEmployee = async () => {
  console.log('inside add employee')
  const result = await inquirer.prompt(employeeQ)
  //.then(function (result) {
    console.log("result.follower")
  console.log(result.addEmployee)
  switch (result.addEmployee) {
    case "Yes, please add an Engineer to my team":
      addEngineer();
      break;

    case "Yes, please add an Intern to my team":
      addIntern();
      break;

    case "No, there are no new team members to add":
      writeFile(employeeBucket);
      break;
    default: console.log('No cases triggered.')
  }
  //    })
}
// addEngineer() function prompts questions and creates new Engineer object and adds to employeeTeam array
const addEngineer = async () => {
  const result = await inquirer.prompt(engineerQ)
  console.log('inside addengineer')
  const engineerOccurance = new Engineer(
    result.name,
    result.id,
    result.email,
    result.github
  )
  employeeBucket.push(engineerOccurance);
  addEmployee();
}

// addIntern() function prompts questions and creates new Intern object and adds to employeeTeam array
const addIntern = async () => {
  const result = await inquirer.prompt(internQ)

  const internOccurance = new Intern(
    result.name,
    result.id,
    result.email,
    result.school
  )


  employeeBucket.push(internOccurance)
  addEmployee();
}

// call addManager function to initialize the client application.
addManager();