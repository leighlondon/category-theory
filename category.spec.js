const category = require("./category");
const compose = category.compose;
const identity = category.identity;

describe("compose", () => {
  it("composes basic functions", () => {
    const f = () => 1;
    const g = x => x + 2;
    let x = compose(f, g);
    expect(x).toBe(3);
  });
});

describe("identity", () => {
  it("returns the identity of the input", () => {
    expect(identity(123)).toBe(123);
  });
  it("is dynamic on type", () => {
    const tests = ["a", "ABC", 0x42, 54, { hello: "world" }];
    for (const t of tests) {
      expect(identity(t)).toBe(t);
    }
  });
});
