const memoize = require("./memoize");

describe("memoize", () => {
  it("hands back a function", () => {
    expect(typeof memoize).toBe("function");
  });
});
