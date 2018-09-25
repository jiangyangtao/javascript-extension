/* eslint no-extend-native: ["error", { "exceptions": ["Object"] }] */

Object.prototype.forEach = function forEach(fn) {
  let index = 0;
  for (const key in this) {
    fn(key, this[key], index);
    index++;
  }
};
