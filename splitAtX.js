function splitAtX(string) {
  const index = string.indexOf('x');

  if (index === -1) return ""; // no 'x' found

  const before = string.slice(0, index);
  const after = string.slice(index + 1);

  return before.length >= after.length ? before : after;
}

module.exports = splitAtX;
