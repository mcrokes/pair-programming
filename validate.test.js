const validate = require("./validate");
const getFunction = require("./index");

describe("validate", () => {
  test("returns false for incorrect validation object", async () => {
    expect(validate(null)).toBe(false);
  });

  test("returns true for correct validation object of type string", () => {
    expect(
      validate(
        [
          {
            fieldName: "someNumber",
            fieldType: "number",
          },
          {
            fieldName: "someString",
            fieldType: "number",
          },
        ],
        {
          someNumber: 1,
          someArray: ["test1", "test2"],
          someString: "validateMe",
        }
      )
    ).toBe(true);
  });
});
