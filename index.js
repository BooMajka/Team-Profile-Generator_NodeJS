const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern");
const { generatePage } = require("./src/generateMarkdown");

const questionManager = [
  {
    type: "input",
    name: "manager_name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "manager_id",
    message: "What is your id?",
  },
  {
    type: "input",
    name: "manager_email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "manager_number",
    message: "What is your phone number?",
  },
];
const questionEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineer_name",
      message: "What is engineer's name?",
    },
    {
      type: "input",
      name: "engineer_id",
      message: "What is engineer's id?",
    },
    {
      type: "input",
      name: "engineer_email",
      message: "What is engineer's email?",
    },
    {
      type: "input",
      name: "engineer_github",
      message: "What is engineer's GitHub user?",
    },
  ]);
};

const questionIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "intern_name",
      message: "What is intern's name?",
    },
    {
      type: "input",
      name: "intern_id",
      message: "What is intern's id?",
    },
    {
      type: "input",
      name: "intern_email",
      message: "What is intern's email?",
    },
    {
      type: "input",
      name: "intern_school",
      message: "What is intern's school?",
    },
  ]);
};
const questionOptions = () => {
  return inquirer.prompt([
    {
      type: "checkbox",
      name: "options",
      message: "What would you like to do",
      choices: ["Add Engineer", "Add Intern", "Save and Finish"],
    },
  ]);
};

let manager = [];
let engineers = [];
let interns = [];


const chooseOption = () => {
  questionOptions().then((responsesDataOptions) => {

  if (responsesDataOptions[0] === "Add Engineer") {
    questionEngineer().then((responsesDataEngineer) => {
      engineers.push(new Engineer(responsesDataEngineer));
      chooseOption();
    });

  } else if (responsesDataOptions[0] === "Add Intern") {
    questionIntern().then((responsesDataIntern) => {
      interns.push(new Intern(responsesDataIntern));
      chooseOption();
    });
  } else {
    writeToFile("index.html", generatePage(manager, engineers, interns));
  }
})
}

const writeToFile = (file, data) => {
	return fs.writeFile(file, data, (err) => {
		if (err) return console.error(err);
		});
  };

const init = () => {
  inquirer.prompt(questionManager).then((responsesDataManager) => {
    manager.push(new Manager(responsesDataManager));
  })
  chooseOption();
};


init();
