/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */

// 移除数组中的空元素
Array.prototype.trimEmpty = function trimEmpty() {
  const array = this;
  const narray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      if (typeof array[i] === 'string') {
        if (array[i].trim()) narray.push(array[i]);
      } else narray.push(array[i]);
    }
  }
  return narray;
};

// 找到数组中指定元素的索引
Array.prototype.findIndex = function findIndex(element) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === element) {
      return i;
    }
  }
  return -1;
};

// 移除数组中的指定元素
Array.prototype.remove = function remove(element) {
  if (this.length <= 0) return this;
  for (let i = this.length - 1; i > -1; i--) {
    if (this[i] === element) this.splice(i, 1);
  }
  return this;
};

// 移除数组中的指定索引处的元素
Array.prototype.removeAt = function removeAt(index) {
  if (this.length <= 0 || i < 0 || i >= this.length) return this;
  return this.splice(index, 1);
};

// 去除数组中重复的元素
Array.prototype.unique = function unique(isStrict) {
  if (!this.length) return [];
  if (this.length < 2) return [this[0]] || [];
  const tempObj = {};
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    const v = this[i];
    const condition = isStrict ? (typeof tempObj[v] !== typeof v) : false;
    if ((typeof tempObj[v] === 'undefined') || condition) {
      tempObj[v] = v;
      newArr.push(v);
    }
  }
  return newArr;
};

// 去除数组中重复的元素
Array.prototype.arrayUnique = function arrayUnique() {
  return this.filter((element, index, self) => self.indexOf(element) === index);
};

// 统计元素在数组中出现的次数
Array.prototype.sameCount = function sameCount() {
  const res = [];
  const ary = this;
  ary.sort();
  for (let i = 0; i < ary.length;) {
    let count = 0;
    for (let j = i; j < ary.length; j++) {
      if (ary[i] === ary[j]) {
        count++;
      }
    }
    res.push([ary[i], count]);
    i += count;
  }
  return res;
};

// 检测数组中是否包含指定元素
Array.prototype.contains = function contains(element) {
  if (this.length <= 0) return false;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === element) return true;
  }
  return false;
};

// 数字数组由小到大排序
Array.prototype.minSortMax = function minSortMax() {
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

// 数字数组由大到小排序
Array.prototype.maxSortMin = function maxSortMin() {
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

// 获取数字数组中最大值
Array.prototype.getMaxValue = function getMaxValue() {
  let oValue = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] > oValue) {
      oValue = this[i];
    }
  }
  return oValue;
};

// 获取数字数组中最小值
Array.prototype.getMinValue = function getMinValue() {
  let oValue = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] < oValue) {
      oValue = this[i];
    }
  }
  return oValue;
};

// 数组尾部追加元素
Array.prototype.add = function add(element) {
  return this.push(element);
};

// 数组头部追加元素
Array.prototype.insert = function insert(element) {
  const _arr = [];
  _arr[0] = element;
  for (let i = 0; i < this.length; i++) {
    _arr.push(this[i]);
  }
  return _arr;
};

// 替换数组内部的元素
Array.prototype.replace = function replace(index, element) {
  if (this.length <= 0 || i < 0 || i >= this.length) return this;
  return this.splice(index, 1, element);
}

export default Array;
