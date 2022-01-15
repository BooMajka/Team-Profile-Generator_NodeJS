const Employee = require("../lib/Employee");

test("return Employee's name", () => {
  let result = new Employee();
  result.name = "Maya";
  expect(result.getName()).toBe("Maya");
});

test("return Employee's id", () => {
  let result = new Employee();
  result.id = "1";
  expect(result.getId()).toBe("1");
});

test("return Employee's email", () => {
  let result = new Employee();
  result.email = "maya@gmail.com";
  expect(result.getEmail()).toBe("maya@gmail.com");
});


