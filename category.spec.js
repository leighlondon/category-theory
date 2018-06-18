const compose = require("./category").compose;
const identity = require("./category").identity;

describe("compose", () => {
  it("composes basic functions", () => {
    expect(compose(() => 1, x => x + 2)).toBe(3);
  });
});

describe("identity", () => {
  it("returns the identity of the input", () => {
    expect(identity(123)).toBe(123);
  });
});
