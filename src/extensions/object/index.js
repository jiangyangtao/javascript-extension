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

// 将 Object 对象转换成 参数 的字符串形式
if (!Object.prototype.toParamString) {
  Object.defineProperty(Object.prototype, 'toParamString', {
    value: function toParamString() {
      if (!this) throw new TypeError();

      const param = this;
      let paramString = '';
      for (const key in param) {
        const value = param[key];
        if (paramString) paramString += '&';
        paramString += `${key}=${value}`;
      }
      return paramString;
    },
  });
}


// 将 Object 对象转换成 json 的字符串形式
if (!Object.prototype.toJsonString) {
  Object.defineProperty(Object.prototype, 'toJsonString', {
    value: function toJsonString() {
      if (!this) throw new TypeError();

      const obj = this;      
      return JSON.stringify(obj);
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
