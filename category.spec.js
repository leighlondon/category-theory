const category = require("./category");
const compose = category.compose;
const identity = category.identity;

describe("compose", () => {
  it("composes basic functions", () => {
    const f = () => 1;
    const g = x => x + 2;
    let x = compose(
      f,
      g
    );
    expect(x).toBe(3);
  });
});

describe("identity", () => {
  it("returns the identity of the input", () => {
    expect(identity(123)).toBe(123);
  });
});
