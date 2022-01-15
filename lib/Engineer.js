const Employee = require("./Employee");

class Engineer extends Employee {
  contstructor(name, id, email) {
    this.gitHub = gitHub;
  }
  getGithub() {
    return this.gitHub;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
