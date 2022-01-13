const Engineer = require("../lib/Engineer");

describe("getGithub", () => {
  test("returns Engineer's github", () => {
    const result = new Engineer().getGithub("Maya");
    expect(result).toBe("Maya");
  });
});