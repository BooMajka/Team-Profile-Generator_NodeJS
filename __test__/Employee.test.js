const Employee = require("../lib/Employee.js")

describe('getName', () => {
test("returns Employee's name", ()=>{
    const result = new Employee().getName("Maya");
    expect(result).toBe("Maya");
});
});

describe("getId", () => {
  test("returns Employee's id", () => {
    const result = new Employee().getId("1");
    expect(result).toBe("1");
  });
});

describe("getEmail", () => {
  test("returns Employee's email", () => {
    const result = new Employee().getEmail("maya@gmail.com");
    expect(result).toBe("maya@gmail.com");
  });
});