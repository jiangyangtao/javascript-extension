if (!Object.prototype.forEach) {
  Object.prototype.forEach = function forEach(fn, thisArg) {
    for (const key in this) {
      if (this.hasOwnProperty(key)) fn.call(thisArg, key, this[key], this);
    }
  };
}
