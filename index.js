const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern");
const generatePage = require("./src/generatePage");

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

let managerArray = [];
let engineersArray = [];
let internsArray = [];

const chooseOption = () => {
  questionOptions().then((responsesDataOptions) => {

  if (responsesDataOptions.options[0] === "Add Engineer") {
    questionEngineer().then((responsesDataEngineer) => {
      let engineer = new Engineer(responsesDataEngineer);
      engineer.name = responsesDataEngineer.engineer_name;
      engineer.id = responsesDataEngineer.engineer_id;
      engineer.email = responsesDataEngineer.engineer_email;
      engineer.gitHub = responsesDataEngineer.engineer_github;
      engineersArray.push(engineer);
      chooseOption();
    });

  } else if (responsesDataOptions.options[0] === "Add Intern") {
    questionIntern().then((responsesDataIntern) => {
      let intern = new Intern(responsesDataIntern);
      intern.name = responsesDataIntern.intern_name;
      intern.id = responsesDataIntern.intern_id;
      intern.email = responsesDataIntern.intern_email;
      intern.school = responsesDataIntern.intern_school;
      internsArray.push(intern);
      chooseOption();
    });
  } else if (responsesDataOptions.options[0] === "Save and Finish"){
    return fs.writeFile(
      "index.html",
      generatePage(managerArray, engineersArray, internsArray),
      (err) => {
        if (err) return console.error(err);
      })
  }
})
}

const init = () => {
  inquirer
    .prompt(questionManager)
    .then((responsesDataManager) => {
      console.log("This is responsesDataManager:", responsesDataManager);
      let manager = new Manager(responsesDataManager);
      manager.name = responsesDataManager.manager_name;
      manager.id = responsesDataManager.manager_id;
      manager.email = responsesDataManager.manager_email;
      manager.number = responsesDataManager.manager_number;
      managerArray.push(manager);
    })
    .then(() => {
      chooseOption();
    });
};

init();
