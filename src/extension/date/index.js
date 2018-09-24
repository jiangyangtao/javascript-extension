/* eslint no-extend-native: ["error", { "exceptions": ["Date"] }] */

// 时间格式化
Date.prototype.Format = function Format(fmt) {
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

// 获取今天
Date.prototype.getToDay = function getToDay() {
  const _nowDate = new Date();
  const _year = _nowDate.getFullYear();
  const _month = (_nowDate.getMonth() + 1) > 10 ? (_nowDate.getMonth() + 1) : `0${_nowDate.getMonth() + 1}`;
  const _day = _nowDate.getDate() > 10 ? _nowDate.getDate() : `0${_nowDate.getDate()}`;
  return `${_year}-${_month}-${_day}`;
};

// 获取明天
Date.prototype.getTomorrow = function getTomorrow() {
  const _nowDate = new Date();
  _nowDate.setDate(_nowDate.getDate() + 1);
  const _year = _nowDate.getFullYear();
  const _month = (_nowDate.getMonth() + 1) > 10 ? (_nowDate.getMonth() + 1) : `0${_nowDate.getMonth() + 1}`;
  const _day = _nowDate.getDate() > 10 ? _nowDate.getDate() : `0${_nowDate.getDate()}`;
  return `${_year}-${_month}-${_day}`;
};

// 获取昨天
Date.prototype.getYesterday = function getYesterday() {
  const _nowDate = new Date();
  _nowDate.setDate(_nowDate.getDate() - 1);
  const _year = _nowDate.getFullYear();
  const _month = (_nowDate.getMonth() + 1) > 10 ? (_nowDate.getMonth() + 1) : `0${_nowDate.getMonth() + 1}`;
  const _day = _nowDate.getDate() > 10 ? _nowDate.getDate() : `0${_nowDate.getDate()}`;
  return `${_year}-${_month}-${_day}`;
};

// 获取当前日期加上的天数
Date.prototype.addDay = function addDay(days) {
  let _days = days;
  if (days === undefined || days === '' || days === null) _days = 1;
  const _nowDate = new Date();
  _nowDate.setDate(_nowDate.getDate() + _days);
  const _year = _nowDate.getFullYear();
  const _month = (_nowDate.getMonth() + 1) > 10 ? (_nowDate.getMonth() + 1) : `0${_nowDate.getMonth() + 1}`;
  const _day = _nowDate.getDate() > 10 ? _nowDate.getDate() : `0${_nowDate.getDate()}`;
  return `${_year}-${_month}-${_day}`;
};

// 获取设置日期加上的天数
Date.prototype.setAddDay = function setAddDay(days) {
  let _days = days;
  if (days === undefined || days === '' || days == null) _days = 1;
  const _nowDate = this;
  _nowDate.setDate(_nowDate.getDate() + _days);
  const _year = _nowDate.getFullYear();
  const _month = (_nowDate.getMonth() + 1) > 10 ? (_nowDate.getMonth() + 1) : `0${_nowDate.getMonth() + 1}`;
  const _day = _nowDate.getDate() > 10 ? _nowDate.getDate() : `0${_nowDate.getDate()}`;
  const _hour = _nowDate.getHours() > 10 ? _nowDate.getHours() : `0${_nowDate.getHours()}`;
  const _minute = _nowDate.getMinutes() > 10 ? _nowDate.getMinutes() : `0${_nowDate.getMinutes()}`;
  const _second = _nowDate.getSeconds() > 10 ? _nowDate.getSeconds() : `0${_nowDate.getSeconds()}`;
  return `${_year}-${_month}-${_day} ${_hour}:${_minute}:${_second}`;
};

// 获取当前时间的时间戳
Date.prototype.getUnixTime = function getUnixTime() {
  const _timestamp = Date.parse(new Date());
  return _timestamp / 1000;
};

// 获取设置时间的时间戳
Date.prototype.getSetUnixTime = function getSetUnixTime() {
  const _timestamp = Date.parse(this);
  return _timestamp / 1000;
};

// 获取某月的第一天的日期
Date.prototype.firstDayOfMonth = function firstDayOfMonth() {
  const _date = this;
  _date.setDate(1);
  return _date;
};

// 获取某月的最后一天的日期
Date.prototype.lastDayOfMonth = function lastDayOfMonth() {
  const date = this;
  let currentMonth = date.getMonth();
  const nextMonth = ++currentMonth;
  const nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
  const oneDay = 1000 * 60 * 60 * 24;
  return new Date(nextMonthFirstDay - oneDay);
};

// 获取某月的第一天的日期字符串
Date.prototype.firstDayStringOfMonth = function firstDayStringOfMonth() {
  return this.firstDayOfMonth().Format('yyyy-MM-dd');
};

// 获取某月的最后一天的日期字符串
Date.prototype.LastDayStringOfMonth = function LastDayStringOfMonth() {
  return this.lastDayOfMonth().Format('yyyy-MM-dd');
};

export default Date;
