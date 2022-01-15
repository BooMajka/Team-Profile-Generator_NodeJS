const Engineer = require("../lib/Engineer");

test("return Engineer's gitHub", () => {
  let result = new Engineer();
  result.gitHub = "Maya";
  expect(result.getGithub()).toBe("Maya");
});
