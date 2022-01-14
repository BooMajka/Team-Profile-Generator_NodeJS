const Employee = require("../lib/Employee.js");

test("return Employee's name", () => {
  const result = new Employee("Maya", "1", "maya@gmail.com");
  expect(result.getName()).toBe("Maya");
});

test("return Employee's id", () => {
  const result = new Employee("Maya", "1", "maya@gmail.com");
  expect(result.getId()).toBe("1");
});

test("return Employee's email", () => {
  const result = new Employee("Maya", "1", "maya@gmail.com");
  expect(result.getEmail()).toBe("maya@gmail.com");
});
