const validate = require("./validate");

describe("validate", () => {
  test("returns false for incorrect validation object", () => {
    expect(validate(null)).toBe(false);
  });

  test("returns true for correct validation object of type string", () => {
    expect(
      validate(
        {
          fieldName: "test",
          callback: (data) => {
            console.log("data was defined as:", JSON.stringify(data));
          },
        },
        {
          someNumber: 1,
          someArray: ["test1", "test2"],
          someString: "validateMe",
        }
      )
    ).toBe(true);
  });
});
