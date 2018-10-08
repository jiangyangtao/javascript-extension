// 时间格式化
if (!Date.prototype.Format) {
  Date.prototype.Format = function Format(fmt) {
    if (this === undefined || this === null) throw new TypeError();

    let _fmt = fmt;
    const o = {
      'M+': this.getMonth() + 1, // 月份
      'd+': this.getDate(), // 日
      'h+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分
      's+': this.getSeconds(), // 秒
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
      S: this.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(_fmt)) {
      _fmt = _fmt.replace(RegExp.$1, (`${this.getFullYear()}`).substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(_fmt)) {
        _fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
      }
    }
    return _fmt;
  };
}

// 指定日期增加天数
if (!Date.prototype.addDay) {
  Date.prototype.addDay = function addDay(value = 0) {
    if (this === undefined || this === null) throw new TypeError();
    if (!isNaN(value, 10)) throw new Error('NaN');

    this.setDate(this.getDate() + value);
    return this;
  };
}

// 指定时间增加小时数
if (!Date.prototype.addHours) {
  Date.prototype.addHours = function addHours(value = 0) {
    if (this === undefined || this === null) throw new TypeError();
    if (!isNaN(value, 10)) throw new Error('NaN');

    this.setDate(this.getHours() + value);
    return this;
  };
}

// 指定时间增加毫秒数
if (!Date.prototype.AddMilliseconds) {
  Date.prototype.AddMilliseconds = function AddMilliseconds(value = 0) {
    if (this === undefined || this === null) throw new TypeError();
    if (!isNaN(value, 10)) throw new Error('NaN');

    this.setDate(this.getMilliseconds() + value);
    return this;
  };
}

// 指定时间增加分钟数
if (!Date.prototype.addMinutes) {
  Date.prototype.addMinutes = function addMinutes(value = 0) {
    if (this === undefined || this === null) throw new TypeError();
    if (!isNaN(value, 10)) throw new Error('NaN');

    this.setDate(this.getMinutes() + value);
    return this;
  };
}

// 指定时间增加月数
if (!Date.prototype.addMonths) {
  Date.prototype.addMonths = function addMonths(value = 0) {
    if (this === undefined || this === null) throw new TypeError();
    if (!isNaN(value, 10)) throw new Error('NaN');

    this.setDate(this.getMonth() + value);
    return this;
  };
}

// 指定时间增加秒数
if (!Date.prototype.addSeconds) {
  Date.prototype.addSeconds = function addSeconds(value = 0) {
    if (this === undefined || this === null) throw new TypeError();
    if (!isNaN(value, 10)) throw new Error('NaN');

    this.setDate(this.getSeconds() + value);
    return this;
  };
}

// 指定时间增加年数
if (!Date.prototype.addYears) {
  Date.prototype.addYears = function addYears(value = 0) {
    if (this === undefined || this === null) throw new TypeError();

    if (value === 0) return this;
    this.setDate(this.getDate() + value);
    return this;
  };
}

// 获取指定时间的时间戳
if (!Date.prototype.getUnixTime) {
  Date.prototype.getUnixTime = function getUnixTime() {
    if (this === undefined || this === null) throw new TypeError();

    const _timestamp = Date.parse(this);
    return _timestamp / 1000;
  };
}

// 获取指定日期的第一天的日期
if (!Date.prototype.firstDayOfMonth) {
  Date.prototype.firstDayOfMonth = function firstDayOfMonth() {
    if (this === undefined || this === null) throw new TypeError();

    const _date = this;
    _date.setDate(1);
    return _date;
  };
}

// 获取指定日期的最后一天的日期
if (!Date.prototype.lastDayOfMonth) {
  Date.prototype.lastDayOfMonth = function lastDayOfMonth() {
    if (this === undefined || this === null) throw new TypeError();

    const date = this;
    let currentMonth = date.getMonth();
    const nextMonth = ++currentMonth;
    const nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
    const oneDay = 1000 * 60 * 60 * 24;
    return new Date(nextMonthFirstDay - oneDay);
  };
}

export default Date;
