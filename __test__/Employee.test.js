const Employee = require("../lib/Employee.js")

describe('getName', () => {
test("returns Employee's name", () => {
    const result = new Employee("Maya", "1", "maya@gmail.com");
    expect(result.getName()).toBe("Maya");
});
});

describe("getId", () => {
  test("returns Employee's id", () => {
    const result = new Employee("Maya", "1", "maya@gmail.com");
    expect(result.getId()).toBe("1");
  });
});

describe("getEmail", () => {
  test("returns Employee's email", () => {
    const result = new Employee("Maya", "1", "maya@gmail.com");
    expect(result.getEmail()).toBe("maya@gmail.com");
  });
});