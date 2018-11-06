if (!Object.prototype.forEach) {
  Object.defineProperty(Object.prototype, 'forEach', {
    value: function forEach(fn, thisArg) {
      if (this === undefined || this === null) throw new TypeError();
      if (typeof fn !== 'function') throw new TypeError();
      for (const key in this) {
        if (this.hasOwnProperty(key)) fn.call(thisArg, key, this[key], this);
      }
    },
  });
}

// 检测 object 对象是否为 null 或者为 undefined
if (!Object.prototype.isNull) {
  Object.defineProperty(Object.prototype, 'isNull', {
    value: function fisNull() {
      if (this === undefined || this == null) return true;
      return false;
    },
  });
}

// 检测 object 对象不为 null 和不为 undefined
if (!Object.prototype.notNull) {
  Object.defineProperty(Object.prototype, 'notNull', {
    value: function fnotNull() {
      return !this.isNull();
    },
  });
}
