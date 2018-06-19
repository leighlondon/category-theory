const memoize = require("./memoize");

describe("memoize", () => {
  it("hands back a function", () => {
    expect(typeof memoize).toBe("function");
  });

  it("executes cached functions faster", () => {
    const mock = jest.fn(x => x);
    const memo = memoize(mock);
    expect(memo(1)).toBe(1);
    expect(memo(1)).toBe(1);
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("caches independent calls separately", () => {
    const mock = jest.fn(x => x);
    const memo = memoize(mock);
    expect(memo(1)).toBe(1);
    expect(memo(2)).toBe(2);
    expect(mock).toHaveBeenCalledTimes(2);
  });
});
