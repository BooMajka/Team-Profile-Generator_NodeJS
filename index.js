const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const { generateMarkdownManager } = require("./src/generateMarkdown");

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
const questionEngineer = () => {
  return inquirer.prompt([
    {
      type: "checkbox",
      name: "options",
      message: "What would you like to do",
      choices: ["Add Engineer", "Add Intern", "Save and Finish"],
    },
  ]);
};
// const writeToFile = (file, data) => {
// 	return fs.writeFile(file, data, (err) => {
// 		if (err) return console.error(err);
// 		});
//   };

const init = () => {
  inquirer.prompt(questionManager).then((responsesDataManager) => {
    let manager = new Manager(responsesDataManager);
    // writeToFile("index.html", generatePage(manager));
  });
};
init();
