const identity = x => x;
const compose = (f1, f2) => f2(f1());

exports.identity = identity;
exports.compose = compose;
