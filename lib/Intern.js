const Employee = require("./Employee");

class Intern extends Employee {
  contstructor(name, id, email) {
    // super(name, id, email);
    school = this.school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
module.exports = Intern;