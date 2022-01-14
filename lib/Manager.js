const Employee = require("./Employee");

class Manager extends Employee {
  contstructor(name, id, email) {
    super(name, id, email);
    number = this.number;
  }
}
module.exports = Manager;
