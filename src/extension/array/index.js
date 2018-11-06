// 移除数组中的空元素
if (!Array.prototype.trim) {
  Object.defineProperty(Array.prototype, 'trim', {
    value: function trim() {
      if (this === undefined || this === null) throw new TypeError();

      const newArray = [];
      for (let i = 0; i < this.length; i++) {
        if (this[i]) {
          if (typeof this[i] === 'string') {
            if (this[i].trim()) newArray.push(this[i]);
          } else newArray.push(this[i]);
        }
      }
      return newArray;
    },
  });
}


// 搜索与指定条件相匹配的元素，并返回 Array 中从零开始的索引到最后一个元素的元素范围内第一个匹配项的索引
if (!Array.prototype.findFirstIndex) {
  Object.defineProperty(Array.prototype, 'findFirstIndex', {
    value: function findFirstIndex(object, thisArg) {
      if (this === undefined || this === null) throw new TypeError();

      for (let i = 0; i < this.length; i++) {
        if (typeof object === 'function') {
          if (object.call(thisArg, this[i], i)) return i;
        } else if (this[i] === object) return i;
      }
      return -1;
    },
  });
}


// 搜索与指定条件相匹配的元素，并返回 Array 中从零开始的索引到最后一个元素的元素范围内最后一个匹配项的索引
if (!Array.prototype.findLastIndex) {
  Object.defineProperty(Array.prototype, 'findLastIndex', {
    value: function findLastIndex(object, thisArg) {
      if (this === undefined || this === null) throw new TypeError();

      let index = -1;
      for (let i = 0; i < this.length; i++) {
        if (typeof object === 'function') {
          if (object.call(thisArg, this[i], i)) index = i;
        } else if (this[i] === object) index = i;
      }
      return index;
    },
  });
}


// 搜索与指定条件相匹配的元素，并返回 Array 中包含指定元素个数、到指定索引结束的元素范围内所有匹配项的从零开始的索引
if (!Array.prototype.findAllIndex) {
  Object.defineProperty(Array.prototype, 'findAllIndex', {
    value: function findAllIndex(object, thisArg) {
      if (this === undefined || this === null) throw new TypeError();

      const indexArray = [];
      for (let i = 0; i < this.length; i++) {
        if (typeof object === 'function') {
          if (object.call(thisArg, this[i], i)) indexArray.push(i);
        } else if (this[i] === object) indexArray.push(i);
      }
      return indexArray;
    },
  });
}

// 移除数组中的指定条件的元素
if (!Array.prototype.remove) {
  Object.defineProperty(Array.prototype, 'remove', {
    value: function remove(object, thisArg) {
      if (this === undefined || this === null) throw new TypeError();
      if (this.length <= 0) return this;

      for (let i = this.length - 1; i > -1; i--) {
        if (typeof object === 'function') {
          if (object.call(thisArg, this[i], i)) this.splice(i, 1);
        } else if (this[i] === object) this.splice(i, 1);
      }
      return this;
    },
  });
}

// 移除数组中的指定索引处的元素
if (!Array.prototype.removeAt) {
  Object.defineProperty(Array.prototype, 'removeAt', {
    value: function removeAt(index) {
      if (this === undefined || this === null) throw new TypeError();

      if (this.length <= 0 || index < 0 || index >= this.length) return this;
      return this.splice(index, 1);
    },
  });
}

// 移除数组中重复的元素
if (!Array.prototype.removeRepeat) {
  Object.defineProperty(Array.prototype, 'removeRepeat', {
    value: function removeRepeat() {
      if (this === undefined || this === null) throw new TypeError();

      return this.filter((element, index, self) => self.indexOf(element) === index);
    },
  });
}

// 统计元素在数组中出现的次数
if (!Array.prototype.sameCount) {
  Object.defineProperty(Array.prototype, 'sameCount', {
    value: function sameCount() {
      if (this === undefined || this === null) throw new TypeError();

      const arr = this;
      const result = [];
      arr.sort();
      for (let i = 0; i < arr.length;) {
        let count = 0;
        for (let j = i; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            count++;
          }
        }
        result.push([arr[i], count]);
        i += count;
      }
      return result;
    },
  });
}

// 数组关键字排序
if (!Array.prototype.keySort) {
  Object.defineProperty(Array.prototype, 'keySort', {
    value: function keySort(key, orderby) {
      if (this === undefined || this === null) throw new TypeError();

      let _order = true;
      if (orderby === 'desc') _order = false;

      function sort(_key, _sort) {
        return (x, y) => {
          if (x[_key] > y[_key]) {
            if (!_sort) return -1;
            return 1;
          }

          if (x[_key] < y[_key]) {
            if (!_sort) return 1;
            return -1;
          }
          return 0;
        };
      }
      return this.sort(sort(key, _order));
    },
  });
}

// 检测数组中是否包含指定元素
if (!Array.prototype.contains) {
  Object.defineProperty(Array.prototype, 'contains', {
    value: function contains(object, thisArg) {
      if (this === undefined || this === null) throw new TypeError();

      if (this.length <= 0) return false;
      for (let i = 0; i < this.length; i++) {
        if (typeof object === 'function') {
          if (object.call(thisArg, this[i], i)) return true;
        } else if (this[i] === object) return true;
      }
      return false;
    },
  });
}

// 数字数组由小到大排序
if (!Array.prototype.minSortMax) {
  Object.defineProperty(Array.prototype, 'minSortMax', {
    value: function minSortMax() {
      if (this === undefined || this === null) throw new TypeError();

      let oValue;
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j <= i; j++) {
          if (this[i] < this[j]) {
            oValue = this[i];
            this[i] = this[j];
            this[j] = oValue;
          }
        }
      }
      return this;
    },
  });
}

// 数字数组由大到小排序
if (!Array.prototype.maxSortMin) {
  Object.defineProperty(Array.prototype, 'maxSortMin', {
    value: function maxSortMin() {
      if (this === undefined || this === null) throw new TypeError();

      let oValue;
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j <= i; j++) {
          if (this[i] > this[j]) {
            oValue = this[i];
            this[i] = this[j];
            this[j] = oValue;
          }
        }
      }
      return this;
    },
  });
}

// 获取数字数组中最大值
if (!Array.prototype.getMaxValue) {
  Object.defineProperty(Array.prototype, 'getMaxValue', {
    value: function getMaxValue() {
      if (this === undefined || this === null) throw new TypeError();

      let oValue = 0;
      for (let i = 0; i < this.length; i++) {
        if (this[i] > oValue) {
          oValue = this[i];
        }
      }
      return oValue;
    },
  });
}

// 获取数字数组中最小值
if (Array.prototype.getMinValue) {
  Object.defineProperty(Array.prototype, 'getMinValue', {
    value: function getMinValue() {
      if (this === undefined || this === null) throw new TypeError();

      let oValue = 0;
      for (let i = 0; i < this.length; i++) {
        if (this[i] < oValue) {
          oValue = this[i];
        }
      }
      return oValue;
    },
  });
}

// 在数组头部追加元素
if (!Array.prototype.insert) {
  Object.defineProperty(Array.prototype, 'insert', {
    value: function insert(value) {
      if (this === undefined || this === null) throw new TypeError();

      const newArray = [];
      newArray[0] = value;
      for (const i in this) {
        newArray.push(this[i]);
      }
      return newArray;
    },
  });
}

// 将某值设置给 Array 中指定位置的元素
if (!Array.prototype.setValue) {
  Object.defineProperty(Array.prototype, 'setValue', {
    value: function setValue(index, value) {
      if (this === undefined || this === null) throw new TypeError();

      if (this.length <= 0 || index < 0 || index >= this.length) return this;
      return this.splice(index, 1, value);
    },
  });
}

// 替换数组中指定条件的所有元素
if (!Array.prototype.replace) {
  Object.defineProperty(Array.prototype, 'replace', {
    value: function replace(conditions, value) {
      if (this === undefined || this === null) throw new TypeError();

      for (let i = 0; i < this.length; i++) {
        if (this[i] === conditions) this.splice(i, 1, value);
      }
      return this;
    },
  });
}

export default Array;
