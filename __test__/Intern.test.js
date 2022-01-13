const Intern = require("../lib/Intern");

describe("getSchool", () => {
  test("returns Intern's school", () => {
    const result = new Intern().getSchool("UT");
    expect(result).toBe("UT");
  });
});
