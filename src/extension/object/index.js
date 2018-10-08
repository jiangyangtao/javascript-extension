if (!Object.prototype.forEach) {
  Object.prototype.forEach = function forEach(fn, thisArg) {
    if (this === undefined || this === null) throw new TypeError();
    if (typeof fn !== 'function') throw new TypeError();
    for (const key in this) {
      if (this.hasOwnProperty(key)) fn.call(thisArg, key, this[key], this);
    }
  };
}
