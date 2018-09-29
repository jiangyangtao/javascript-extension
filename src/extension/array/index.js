import Fn from './../function'

// 移除数组中的空元素
if (!Array.prototype.trim) {
  Array.prototype.trim = function trim() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    const newArray = [];
    for (let i = 0; i < this.length; i++) {
      if (this[i]) {
        if (typeof this[i] === 'string') {
          if (this[i].trim()) newArray.push(this[i]);
        } else newArray.push(this[i]);
      }
    }
    return newArray;
  };
}


// 搜索与指定条件相匹配的元素，并返回 Array 中从零开始的索引到最后一个元素的元素范围内第一个匹配项的索引
if (!Array.prototype.findFirstIndex) {
  Array.prototype.findFirstIndex = function findFirstIndex(object, thisArg) {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    for (let i = 0; i < this.length; i++) {
      if (typeof object === 'function') {
        if (object.call(thisArg, this[i], i)) return i;
      } else {
        if (this[i] === object) return i;
      }
    }
    return -1;
  };
}


// 搜索与指定条件相匹配的元素，并返回 Array 中从零开始的索引到最后一个元素的元素范围内最后一个匹配项的索引
if (!Array.prototype.findLastIndex) {
  Array.prototype.findLastIndex = function findLastIndex(object, thisArg) {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    let index = -1;
    for (let i = 0; i < this.length; i++) {
      if (typeof object === 'function') {
        if (object.call(thisArg, this[i], i)) index = i;
      } else {
        if (this[i] === object) index = i;
      }
    }
    return index;
  };
}


// 搜索与指定条件相匹配的元素，并返回 Array 中包含指定元素个数、到指定索引结束的元素范围内所有匹配项的从零开始的索引
if (!Array.prototype.findAllIndex) {
  Array.prototype.findAllIndex = function findAllIndex(object, thisArg) {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    const indexArray = [];
    for (let i = 0; i < this.length; i++) {
      if (typeof object === 'function') {
        if (object.call(thisArg, this[i], i)) indexArray.push(i);
      } else {
        if (this[i] === object) indexArray.push(i);
      }
    }
    return indexArray;
  };
}

// 移除数组中的指定条件的元素
if (!Array.prototype.remove) {
  Array.prototype.remove = function remove(element, thisArg) {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();
    if (this.length <= 0) return this;

    for (let i = this.length - 1; i > -1; i--) {
      if (typeof object === 'function') {
        if (object.call(thisArg, this[i], i)) this.splice(i, 1);
      } else {
        if (this[i] === element) this.splice(i, 1);
      }
    }
    return this;
  };
}

// 移除数组中的指定索引处的元素
if (!Array.prototype.removeAt) {
  Array.prototype.removeAt = function removeAt(index) {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    if (this.length <= 0 || index < 0 || index >= this.length) return this;
    return this.splice(index, 1);
  };
}

// 移除数组中重复的元素
if (!Array.prototype.removeRepeat) {
  Array.prototype.removeRepeat = function removeRepeat() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    return this.filter((element, index, self) => self.indexOf(element) === index);
  };
}

// 统计元素在数组中出现的次数
if (!Array.prototype.sameCount) {
  Array.prototype.sameCount = function sameCount() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

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
  };
}

// 数组关键字排序
if (!Array.prototype.keySort) {
  Array.prototype.keySort = function keySort(key, orderby = 'asc') {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    const _orderby = true;
    if (orderby === 'desc') _orderby = false;
    return this.sort(Fn.keySort(key, _orderby));
  }
}

// 检测数组中是否包含指定元素
if (!Array.prototype.contains) {
  Array.prototype.contains = function contains(element) {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    if (this.length <= 0) return false;
    for (let i = 0; i < this.length; i++) {
      if (this[i] === element) return true;
    }
    return false;
  };
}

// 数字数组由小到大排序
if (!Array.prototype.minSortMax) {
  Array.prototype.minSortMax = function minSortMax() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

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
  };
}

// 数字数组由大到小排序
if (!Array.prototype.maxSortMin) {
  Array.prototype.maxSortMin = function maxSortMin() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

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
  };
}

// 获取数字数组中最大值
if (!Array.prototype.getMaxValue) {
  Array.prototype.getMaxValue = function getMaxValue() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    let oValue = 0;
    for (let i = 0; i < this.length; i++) {
      if (this[i] > oValue) {
        oValue = this[i];
      }
    }
    return oValue;
  };
}

// 获取数字数组中最小值
if (Array.prototype.getMinValue) {
  Array.prototype.getMinValue = function getMinValue() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    let oValue = 0;
    for (let i = 0; i < this.length; i++) {
      if (this[i] < oValue) {
        oValue = this[i];
      }
    }
    return oValue;
  };
}

// 在数组头部追加元素
if (!Array.prototype.insert) {
  Array.prototype.insert = function insert(value) {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    const newArray = [];
    newArray[0] = value;
    for (const i in this) {
      newArray.push(this[i]);
    }
    return newArray;
  };
}

// 将某值设置给 Array 中指定位置的元素
if (!Array.prototype.setValue) {
  Array.prototype.setValue = function setValue(index, value) {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    if (this.length <= 0 || index < 0 || index >= this.length) return this;
    return this.splice(index, 1, value);
  };
}

// 替换数组中指定条件的所有元素
if (!Array.prototype.replace) {
  Array.prototype.replace = function replace(conditions, value) {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    for (let i = 0; i < this.length; i++) {
      if (this[i] === conditions) this.splice(i, 1, value);
    }
    return this;
  };
}

export default Array;
