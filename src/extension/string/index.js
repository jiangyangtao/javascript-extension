// 去除字符串中的所有空格
if (!String.prototype.trimAll) {
  String.prototype.trimAll = function trimAll() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    return this.replace(/\s/g, '');
  };
}

// 去除字符串中的尾部空格
if (!String.prototype.trimEnd) {
  String.prototype.trimEnd = function trimEnd() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    return this.replace(/(\s*$)/g, '');
  };
}

// 去除字符串中的头部空格
if (!String.prototype.trimStart) {
  String.prototype.trimStart = function trimStart() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    return this.replace(/(^\s*)/g, '');
  };
}

// 检测字符串中是否包含指定的关键字
// key : 指定的关键字
if (!String.prototype.contains) {
  String.prototype.contains = function contains(key) {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    if (!key.isNull()) return false;
    if (typeof (key) !== 'string') return false;

    const _str = this;
    if (_str.length < key.length) return false;

    for (let i = 0; i < _str.length; i++) {
      const _subStr = _str.substr(i, key.length);
      if (_subStr === key) return true;
    }
    return false;
  };
}

// 字符串末尾追加
if (!String.prototype.append) {
  String.prototype.append = function append(str) {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    const _self = this;
    const _str = _self + str.toString();
    return _str;
  };
}

// 移除指定字符串
if (!String.prototype.remove) {
  String.prototype.remove = function remove(key) {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    return this.replace(new RegExp(key, 'g'), '');
  };
}

// 计算字符串长度，每个汉字占两个长度，英文字符每个占一个长度
if (!String.prototype.bytesLength) {
  String.prototype.bytesLength = function bytesLength() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      if (this.charCodeAt(i) >= 0 && this.charCodeAt(i) <= 255) sum++;
      else sum += 2;
    }
    return sum;
  };
}

// 身份证验证
if (!String.prototype.IdentityVerification) {
  String.prototype.IdentityVerification = function IdentityVerification() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    let _card = this;

    if (_card === undefined || _card === '' || _card == null || _card === 'undefined') {
      return false;
    }

    const _cityNo = {
      11: '北京',
      12: '天津',
      13: '河北',
      14: '山西',
      15: '内蒙古',
      21: '辽宁',
      22: '吉林',
      23: '黑龙江',
      31: '上海',
      32: '江苏',
      33: '浙江',
      34: '安徽',
      35: '福建',
      36: '江西',
      37: '山东',
      41: '河南',
      42: '湖北',
      43: '湖南',
      44: '广东',
      45: '广西',
      46: '海南',
      50: '重庆',
      51: '四川',
      52: '贵州',
      53: '云南',
      54: '西藏',
      61: '陕西',
      62: '甘肃',
      63: '青海',
      64: '宁夏',
      65: '新疆',
      71: '台湾',
      81: '香港',
      82: '澳门',
      91: '国外',
    };
    let _iSum = 0;
    if (!/^\d{17}(\d|x)$/i.test(_card)) return false;
    _card = _card.replace(/x$/i, 'a');
    if (_cityNo[parseInt(_card.substr(0, 2), 10)] == null) return false;
    const sBirthday = `${_card.substr(6, 4)}-${Number(_card.substr(10, 2))}-${Number(_card.substr(12, 2))}`;
    const d = new Date(sBirthday.replace(/-/g, '/'));
    if (sBirthday !== (`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`)) return false;
    for (let i = 17; i >= 0; i--) _iSum += (Math.pow(2, i) % 11) * parseInt(_card.charAt(17 - i), 11);
    if (_iSum % 11 !== 1) return false;
    return true;
  };
}

// 根据身份证获取性别文字
if (!String.prototype.getSexTextByID) {
  String.prototype.getSexTextByID = function getSexTextByID() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    if (!this.IdentityVerification()) return '';
    const _card = this;
    if (_card === undefined || _card === '' || _card == null || _card === 'undefined') {
      return '';
    }
    return _card.substr(16, 1) % 2 ? '男' : '女';
  };
}

// 根据身份证获取性别数字
if (!String.prototype.getSexNoByID) {
  String.prototype.getSexNoByID = function getSexNoByID() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    if (!this.IdentityVerification()) return -1;
    const _card = this;
    if (_card === undefined || _card === '' || _card == null || _card === 'undefined') {
      return '';
    }
    return parseInt(_card.substr(16, 1), 10);
  };
}

// 根据身份证获取出身日期
if (!String.prototype.getBirthdayByID) {
  String.prototype.getBirthdayByID = function getBirthdayByID() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    if (!this.IdentityVerification()) return '';
    const _card = this;
    if (_card.length !== 18) return '';

    const year = _card.substr(6, 4);
    const month = _card.substr(10, 2);
    const day = _card.substr(12, 2);
    return `${year}-${month}-${day}`;
  };
}

// 根据身份证获取年龄
if (!String.prototype.getAgeByID) {
  String.prototype.getAgeByID = function getAgeByID() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    if (!this.IdentityVerification()) return -1;

    const _birthday = this.getBirthdayByID();
    const diff = new Date() - new Date(_birthday);
    return parseInt((diff / (24 * 3600 * 1000)) / 365, 10);
  };
}

// 获取url参数值
if (!String.prototype.getUrlParam) {
  String.prototype.getUrlParam = function getUrlParam(key) {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    let _url = this.toString();
    if (_url.length === 0) {
      return null;
    }

    _url = _url.substr(_url.lastIndexOf('?'));
    const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
    const r = _url.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
  };
}

// 获取文件全名
if (!String.prototype.getFileName) {
  String.prototype.getFileName = function getFileName() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    const regEx = /^.*\/([^/?]*).*$/;
    return this.replace(regEx, '$1');
  };
}

// 获取文件扩展名
if (!String.prototype.getExtendName) {
  String.prototype.getExtendName = function getExtendName() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    const regEx = /^.*\/[^/]*(\.[^.?]*).*$/;
    return this.replace(regEx, '$1');
  };
}

// C#时间格式化
if (!String.prototype.toFormDate) {
  String.prototype.toFormDate = function toFormDate() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    if (!this) return '';
    return new Date(parseInt(this.substr(6), 10)).Format('yyyy-MM-dd');
  };
}

// String 转化为 Number
if (!String.prototype.toInt) {
  String.prototype.toInt = function toInt() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    return isNaN(parseInt(this, 10)) ? 0 : parseInt(this, 10);
  };
}

// 转为千分位显示
if (!String.prototype.toThousand) {
  String.prototype.toThousand = function toThousand() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    return isNaN(parseFloat(this)) ? this : parseFloat(this).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  };
}

// String 转化为 Float
if (!String.prototype.toFloat) {
  String.prototype.toFloat = function toFloat() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    return isNaN(parseFloat(this)) ? 0 : parseFloat(this);
  };
}

// 字符串转换为分割数组
// symbol 分割符，默认以逗号分割
if (!String.prototype.toSplitArray) {
  String.prototype.toSplitArray = function toSplitArray(symbol = ',') {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    return this.split(symbol);
  };
}

// 检测字符串是否为 null 或者为 undefined 或者为 ""
if (!String.prototype.isNull) {
  String.prototype.isNull = function isNull() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    if (this === undefined || this == null || this === '') return true;
    return false;
  };
}

// 检测不为 null 和不为 undefined 并且不为 ""
if (!String.prototype.notNull) {
  String.prototype.notNull = function notNull() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    return !this.isNull();
  };
}

// 检测字符串是否为 null 或者为 undefined 或者为 "" 或者为 "null" 或者为 "undefined"
if (!String.prototype.isNullOrEmpty) {
  String.prototype.isNullOrEmpty = function isNullOrEmpty() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    if (this === undefined || this == null || this === 'null' || this === 'undefined' || this === '') return true;
    return false;
  };
}

// 检测字符串不为 null 和不为 undefined 和不为 "" 和不者为 "null" 并且不为 "undefined"
if (!String.prototype.notNullAndEmpty) {
  String.prototype.notNullAndEmpty = function notNullAndEmpty() {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();

    return !this.isNullOrEmpty();
  };
}

export default String;
