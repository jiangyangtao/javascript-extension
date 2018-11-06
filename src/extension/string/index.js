// 去除字符串中的所有空格
if (!String.prototype.trimAll) {
  Object.defineProperty(String.prototype, 'trimAll', {
    value: function trimAll() {
      if (!this) throw new TypeError();

      return this.replace(/\s/g, '');
    },
  });
}

// 去除字符串中的尾部空格
if (!String.prototype.trimEnd) {
  Object.defineProperty(String.prototype, 'trimEnd', {
    value: function trimEnd() {
      if (!this) throw new TypeError();

      return this.replace(/(\s*$)/g, '');
    },
  });
}

// 去除字符串中的头部空格
if (!String.prototype.trimStart) {
  Object.defineProperty(String.prototype, 'trimStart', {
    value: function trimStart() {
      if (!this) throw new TypeError();

      return this.replace(/(^\s*)/g, '');
    },
  });
}

// 检测字符串中是否包含指定的关键字
// key : 指定的关键字
if (!String.prototype.contains) {
  Object.defineProperty(String.prototype, 'contains', {
    value: function contains(key) {
      if (!this) throw new TypeError();

      if (!key.isNull()) return false;
      if (typeof (key) !== 'string') return false;

      const _str = this;
      if (_str.length < key.length) return false;

      for (let i = 0; i < _str.length; i++) {
        const _subStr = _str.substr(i, key.length);
        if (_subStr === key) return true;
      }
      return false;
    },
  });
}

// 字符串末尾追加
if (!String.prototype.append) {
  Object.defineProperty(String.prototype, 'append', {
    value: function append(str) {
      if (!this) throw new TypeError();

      const self = this;
      const _str = self + str.toString();
      return _str;
    },
  });
}

// 移除指定字符串
if (!String.prototype.remove) {
  Object.defineProperty(String.prototype, 'remove', {
    value: function remove(key) {
      if (!this) throw new TypeError();

      return this.replace(new RegExp(key, 'g'), '');
    },
  });
}

// 替换当前字符串中所有符合条件的字符
if (!String.prototype.replaceAll) {
  Object.defineProperty(String.prototype, 'replaceAll', {
    value: function replaceAll(key, value) {
      if (!this) throw new TypeError();

      return this.replace(new RegExp(key, 'g'), value);
    },
  });
}


// 计算字符串长度，每个汉字占两个长度，英文字符每个占一个长度
if (!String.prototype.bytesLength) {
  Object.defineProperty(String.prototype, 'bytesLength', {
    value: function bytesLength() {
      if (!this) throw new TypeError();

      let sum = 0;
      for (let i = 0; i < this.length; i++) {
        if (this.charCodeAt(i) >= 0 && this.charCodeAt(i) <= 255) sum++;
        else sum += 2;
      }
      return sum;
    },
  });
}

// 身份证验证
if (!String.prototype.isChinaIdentityNumber) {
  Object.defineProperty(String.prototype, 'isChinaIdentityNumber', {
    value: function isChinaIdentityNumber() {
      if (!this) throw new TypeError();

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
    },
  });
}

// 根据身份证获取性别文字
if (!String.prototype.getSexTextByChinaIdNumber) {
  Object.defineProperty(String.prototype, 'getSexTextByChinaIdNumber', {
    value: function getSexTextByChinaIdNumber() {
      if (!this) throw new TypeError();

      if (!this.isChinaIdentityNumber()) return '';
      const _card = this;
      return _card.substr(16, 1) % 2 ? '男' : '女';
    },
  });
}

// 根据身份证获取性别数字
if (!String.prototype.getSexNoByChinaIdNumber) {
  Object.defineProperty(String.prototype, 'getSexNoByChinaIdNumber', {
    value: function getSexNoByChinaIdNumber() {
      if (!this) throw new TypeError();

      if (!this.isChinaIdentityNumber()) return -1;
      const card = this;
      return parseInt(card.substr(16, 1), 10);
    },
  });
}

// 根据身份证获取出身日期
if (!String.prototype.getBirthdayByChinaIdNumber) {
  Object.defineProperty(String.prototype, 'getBirthdayByChinaIdNumber', {
    value: function getBirthdayByChinaIdNumber() {
      if (!this) throw new TypeError();

      if (!this.isChinaIdentityNumber()) return '';
      const _card = this;
      if (_card.length !== 18) return '';
      return `${_card.substr(6, 4)}-${_card.substr(10, 2)}-${_card.substr(12, 2)}`;
    },
  });
}

// 根据身份证获取年龄
if (!String.prototype.getAgeByIdNumber) {
  Object.defineProperty(String.prototype, 'getAgeByIdNumber', {
    value: function getAgeByIdNumber() {
      if (!this) throw new TypeError();

      if (!this.verifyIdentityNumber()) return -1;

      const _birthday = this.getBirthdayByIdNumber();
      const diff = new Date() - new Date(_birthday);
      return parseInt((diff / (24 * 3600 * 1000)) / 365, 10);
    },
  });
}

// 获取url参数值
if (!String.prototype.getUrlParam) {
  Object.defineProperty(String.prototype, 'getUrlParam', {
    value: function getUrlParam(key) {
      if (!this) throw new TypeError();

      let url = this.toString();
      url = url.substr(url.lastIndexOf('?') + 1);
      const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
      const r = url.substr(1).match(reg);
      if (r != null) return decodeURIComponent(r[2]);
      return null;
    },
  });
}

// 获取url参数部分的字符串
if (!String.prototype.getQueryString) {
  Object.defineProperty(String.prototype, 'getQueryString', {
    value: function getQueryString() {
      if (!this) throw new TypeError();

      const url = this.toString();
      return url.substr(url.lastIndexOf('?') + 1);
    },
  });
}

// 获取url参数，再转换为 object
if (!String.prototype.getQueryToObject) {
  Object.defineProperty(String.prototype, 'getQueryToObject', {
    value: function getQueryToObject() {
      if (!this) throw new TypeError();

      const url = this.toString();
      const paramStr = url.substr(url.lastIndexOf('?') + 1);
      if (!paramStr) return null;
      const paramArray = paramStr.split('&');
      let json = null;
      for (const i in paramArray) {
        if (!json) json = {};
        const item = paramArray[i];
        const key = item.substring(0, item.indexOf('='));
        let value = item.substr(item.indexOf('=') + 1);
        if (value.isInt()) value = value.toInt();
        else if (value.isFloat()) value = value.toFloat();
        json[key] = value;
      }
      return json;
    },
  });
}

// 获取文件全名
if (!String.prototype.getFileName) {
  Object.defineProperty(String.prototype, 'getFileName', {
    value: function getFileName() {
      if (!this) throw new TypeError();

      const regEx = /^.*\/([^/?]*).*$/;
      return this.replace(regEx, '$1');
    },
  });
}

// 获取文件扩展名
if (!String.prototype.getExtendName) {
  Object.defineProperty(String.prototype, 'getExtendName', {
    value: function getExtendName() {
      if (!this) throw new TypeError();

      const regEx = /^.*\/[^/]*(\.[^.?]*).*$/;
      return this.replace(regEx, '$1');
    },
  });
}

// 转换为时间类型
if (!String.prototype.toDate) {
  Object.defineProperty(String.prototype, 'toDate', {
    value: function toDate() {
      if (!this) throw new TypeError();

      return new Date(this);
    },
  });
}

// C#时间格式化
if (!String.prototype.toFormDate) {
  Object.defineProperty(String.prototype, 'toFormDate', {
    value: function toFormDate() {
      if (!this) throw new TypeError();

      return new Date(parseInt(this.substr(6), 10)).Format('yyyy-MM-dd');
    },
  });
}

// 检测字符串是否为 int
if (!String.prototype.isInt) {
  Object.defineProperty(String.prototype, 'isInt', {
    value: function isInt() {
      const partten = /(^[1-9][0-9]*$)|(^[0-9]$)/;
      return partten.test(this);
    },
  });
}

// 检测字符串是否为 float
if (!String.prototype.isFloat) {
  Object.defineProperty(String.prototype, 'isFloat', {
    value: function isFloat() {
      const partten = /(^[1-9][0-9]*[\\.]{0,1}[0-9]*[0-9]$)|(^[0].[0-9]*[0-9]$)|(^[0-9]$)/;
      return partten.test(this);
    },
  });
}

// String 转化为 Number
if (!String.prototype.toInt) {
  Object.defineProperty(String.prototype, 'toInt', {
    value: function toInt() {
      if (!this) throw new TypeError();

      return isNaN(parseInt(this, 10)) ? 0 : parseInt(this, 10);
    },
  });
}

// 转为千分位显示
if (!String.prototype.toThousand) {
  Object.defineProperty(String.prototype, 'toThousand', {
    value: function toThousand() {
      if (!this) throw new TypeError();

      return isNaN(parseFloat(this)) ? this : parseFloat(this).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    },
  });
}

// String 转化为 Float
if (!String.prototype.toFloat) {
  Object.defineProperty(String.prototype, 'toFloat', {
    value: function toFloat() {
      if (!this) throw new TypeError();

      return isNaN(parseFloat(this)) ? 0 : parseFloat(this);
    },
  });
}

// 字符串转换为分割数组
// symbol 分割符，默认以逗号分割
if (!String.prototype.toSplitArray) {
  Object.defineProperty(String.prototype, 'toSplitArray', {
    value: function toSplitArray(symbol = ',') {
      if (!this) throw new TypeError();

      return this.split(symbol);
    },
  });
}

// 检测字符串是否为 null 或者为 undefined
if (!String.prototype.isNull) {
  Object.defineProperty(String.prototype, 'isNull', {
    value: function isNull() {
      if (this === undefined || this == null) return true;
      return false;
    },
  });
}

// 检测字符串是否不为 null 和不为 undefined
if (!String.prototype.notNull) {
  Object.defineProperty(String.prototype, 'notNull', {
    value: function notNull() {
      return !this.isNull();
    },
  });
}

// 检测字符串是否为 null 或者为 undefined 或者为 ""
if (!String.prototype.isNullOrEmpty) {
  Object.defineProperty(String.prototype, 'isNullOrEmpty', {
    value: function isNullOrEmpty() {
      if (this === undefined || this == null || this === '') return true;
      return false;
    },
  });
}

// 检测字符串是否不为 null 和不为 undefined 和不为 ""
if (!String.prototype.notNullAndEmpty) {
  Object.defineProperty(String.prototype, 'notNullAndEmpty', {
    value: function notNullAndEmpty() {
      return !this.isNullOrEmpty();
    },
  });
}

export default String;
