const Manager = require("../lib/Manager");

test("return Manager's number", () => {
  let result = new Manager();
  result.number = "1111";
  expect(result.number).toBe("1111");
});
