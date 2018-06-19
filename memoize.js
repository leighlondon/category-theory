const memoize = func => {
  let cache = {};
  const memo = arg => {
    if (!cache[arg]) cache[arg] = func(arg);
    return cache[arg];
  };
  return memo;
};

module.exports = memoize;
