import { Employee } from "./Employee";

export class Engineer extends Employee {
  contstructor(name, id, email) {
    super(name, id, email);
    gitHub = this.gitHub;
  }
  getGithub() {
    return this.getGithub;
  }
  getRole() {
    return "Engineer";
  }
}
