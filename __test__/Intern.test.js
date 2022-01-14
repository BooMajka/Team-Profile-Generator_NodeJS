const Intern = require("../lib/Intern");

describe("getSchool", () => {
  test("return Intern's school", () => {
    const result = new Intern().getSchool("UT");
    expect(result).toBe("UT");
  });
});
