const Engineer = require("../lib/Engineer");

describe("getGithub", () => {
  test("return Engineer's github", () => {
    const result = new Engineer().getGithub("Maya");
    expect(result).toBe("Maya");
  });
});
