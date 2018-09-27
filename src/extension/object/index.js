/* eslint no-extend-native: ["error", { "exceptions": ["Object"] }] */

Object.prototype.forEach = function forEach(fn) {
  for (const key in this) {
    if(this.hasOwnProperty(key)) fn(key, this[key], this);
  }
};
