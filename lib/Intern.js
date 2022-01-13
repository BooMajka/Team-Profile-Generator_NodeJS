import { Employee } from "./Employee";

export class Intern extends Employee {
contstructor(name, id, email) {
	super(name, id, email)
	this.school = school;
}
getSchool() {
return this.school;
}
getRole() {
	return "Intern"
}
}