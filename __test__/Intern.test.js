const Intern = require("../lib/Intern");

test("return Intern's school", () => {
  let result = new Intern();
  result.school = "UT";
  expect(result.getSchool()).toBe("UT");
});
