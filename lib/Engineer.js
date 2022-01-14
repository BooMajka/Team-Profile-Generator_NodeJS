const Employee = require("./Employee");

class Engineer extends Employee {
  contstructor(name, id, email) {
    // super(name, id, email);
    gitHub = this.gitHub;
  }
  getGithub() {
    return this.getGithub;
  }
  getRole() {
    return "Engineer";
  }
}
let maya = new Engineer("Maya");
console.log(maya);

module.exports = Engineer;
