// 时间格式化
if (!Date.prototype.format) {
  Object.defineProperty(Date.prototype, 'format', {
    value: function format(fmt) {
      if (this === undefined || this === null) throw new TypeError();

      const o = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds(),
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          `${this.getFullYear()}`.substr(4 - RegExp.$1.length),
        );
      }
      for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length),
          );
        }
      }
      return fmt;
    },
  });
}

// 转换到指定的时区，并返回指定时区的时间
if (!Date.prototype.toTimezone) {
  Object.defineProperty(Date.prototype, 'toTimezone', {
    value: function toTimezone(value = 0) {
      if (this === undefined || this === null) throw new TypeError();
      if (typeof value !== 'number') throw new Error('parameter not a number.');

      const now = new Date();
      const offset = now.getTimezoneOffset() * 60000;
      const utc = now.getTime() + offset;
      return new Date(utc + (3600000 * value));
    },
  });
}

// 获取本地时区
if (!Date.prototype.getLocaleTimezone) {
  Object.defineProperty(Date.prototype, 'getLocaleTimezone', {
    value: function getLocaleTimezone() {
      if (this === undefined || this === null) throw new TypeError();

      const now = new Date();
      const offset = now.getTimezoneOffset() / 60;
      if (offset <= 0) return Math.abs(offset);
      return offset + (offset * 2);
    },
  });
}

// 将时间转换为 Ojbect 对象
if (!Date.prototype.toObject) {
  Object.defineProperty(Date.prototype, 'toObject', {
    value: function toObject() {
      if (this === undefined || this === null) throw new TypeError();

      const dateTime = {};
      dateTime.year = this.getFullYear();
      dateTime.month = this.getMonth() + 1;
      dateTime.day = this.getDate();
      dateTime.hour = this.getHours();
      dateTime.minute = this.getMinutes();
      dateTime.millisecond = this.getMilliseconds();
      dateTime.week = this.getDay();
      dateTime.date = this.Format('yyyy-MM-dd');
      dateTime.time = this.Format('hh:mm:ss');
      return dateTime;
    },
  });
}

// 指定日期增加天数
if (!Date.prototype.addDay) {
  Object.defineProperty(Date.prototype, 'addDays', {
    value: function addDay(value = 0) {
      if (this === undefined || this === null) throw new TypeError();
      if (isNaN(value, 10)) throw new Error('NaN');

      this.setDate(this.getDate() + value);
      return this;
    },
  });
}

// 指定时间增加小时数
if (!Date.prototype.addHours) {
  Object.defineProperty(Date.prototype, 'addHours', {
    value: function addHours(value = 0) {
      if (this === undefined || this === null) throw new TypeError();
      if (isNaN(value, 10)) throw new Error('NaN');

      this.setDate(this.getHours() + value);
      return this;
    },
  });
}

// 指定时间增加毫秒数
if (!Date.prototype.addMilliseconds) {
  Object.defineProperty(Date.prototype, 'addMilliseconds', {
    value: function addMilliseconds(value = 0) {
      if (this === undefined || this === null) throw new TypeError();
      if (isNaN(value, 10)) throw new Error('NaN');

      this.setDate(this.getMilliseconds() + value);
      return this;
    },
  });
}

// 指定时间增加分钟数
if (!Date.prototype.addMinutes) {
  Object.defineProperty(Date.prototype, 'addMinutes', {
    value: function addMinutes(value = 0) {
      if (this === undefined || this === null) throw new TypeError();
      if (isNaN(value, 10)) throw new Error('NaN');

      this.setDate(this.getMinutes() + value);
      return this;
    },
  });
}

// 指定时间增加月数
if (!Date.prototype.addMonths) {
  Object.defineProperty(Date.prototype, 'addMonths', {
    value: function addMonths(value = 0) {
      if (this === undefined || this === null) throw new TypeError();
      if (isNaN(value, 10)) throw new Error('NaN');

      this.setDate(this.getMonth() + value);
      return this;
    },
  });
}

// 指定时间增加秒数
if (!Date.prototype.addSeconds) {
  Object.defineProperty(Date.prototype, 'addSeconds', {
    value: function addSeconds(value = 0) {
      if (this === undefined || this === null) throw new TypeError();
      if (isNaN(value, 10)) throw new Error('NaN');

      this.setDate(this.getSeconds() + value);
      return this;
    },
  });
}

// 指定时间增加年数
if (!Date.prototype.addYears) {
  Object.defineProperty(Date.prototype, 'addYears', {
    value: function addYears(value = 0) {
      if (this === undefined || this === null) throw new TypeError();

      if (value === 0) return this;
      this.setDate(this.getDate() + value);
      return this;
    },
  });
}

// 获取指定时间的时间戳
if (!Date.prototype.getUnixTime) {
  Object.defineProperty(Date.prototype, 'getUnixTime', {
    value: function getUnixTime() {
      if (this === undefined || this === null) throw new TypeError();

      const _timestamp = Date.parse(this);
      return _timestamp / 1000;
    },
  });
}

// 获取指定日期所在月的第一天
if (!Date.prototype.firstDayOfMonth) {
  Object.defineProperty(Date.prototype, 'firstDayOfMonth', {
    value: function firstDayOfMonth() {
      if (this === undefined || this === null) throw new TypeError();

      const _date = new Date(this.getTime());
      _date.setDate(1);
      return _date;
    },
  });
}

// 获取指定日期所在月的最后一天
if (!Date.prototype.lastDayOfMonth) {
  Object.defineProperty(Date.prototype, 'lastDayOfMonth', {
    value: function lastDayOfMonth() {
      if (this === undefined || this === null) throw new TypeError();

      const date = this;
      const nextMonth = date.getMonth() + 1;
      const nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
      const oneDay = 1000 * 60 * 60 * 24;
      return new Date(nextMonthFirstDay - oneDay);
    },
  });
}

// 获取指定日期所属周从星期天开始的第一天
if (!Date.prototype.firstDayOfWeekFromSunday) {
  Object.defineProperty(Date.prototype, 'firstDayOfWeekFromSunday', {
    value: function firstDayOfWeekFromSunday() {
      if (this === undefined || this === null) throw new TypeError();

      let day = new Date(this.getTime());
      const week = this.getDay();
      if (week > 0) day = day.addDay(-week);
      return day;
    },
  });
}

// 获取指定日期所属周从星期天开始的最后一天
if (!Date.prototype.lastDayOfWeekFromSunday) {
  Object.defineProperty(Date.prototype, 'lastDayOfWeekFromSunday', {
    value: function lastDayOfWeekFromSunday() {
      if (this === undefined || this === null) throw new TypeError();

      const day = new Date(this.getTime());
      return day.addDay(6 - this.getDay());
    },
  });
}

// 获取指定日期所属周从星期一开始的第一天
if (!Date.prototype.firstDayOfWeekFromMonday) {
  Object.defineProperty(Date.prototype, 'firstDayOfWeekFromMonday', {
    value: function firstDayOfWeekFromMonday() {
      if (this === undefined || this === null) throw new TypeError();

      let day = new Date(this.getTime());
      const week = this.getDay();
      if (week === 0) day = day.addDay(-6);
      if (week > 1) day = day.addDay(-week + 1);
      return day;
    },
  });
}

// 获取指定日期所属周从星期一开始的最后一天
if (!Date.prototype.lastDayOfWeekFromMonday) {
  Object.defineProperty(Date.prototype, 'lastDayOfWeekFromMonday', {
    value: function lastDayOfWeekFromMonday() {
      if (this === undefined || this === null) throw new TypeError();

      let day = new Date(this.getTime());
      const week = this.getDay();
      if (week > 0) day = day.addDay(7 - week);
      return day;
    },
  });
}

// 从指定的日期和时间中减去指定的日期和时间，并返回一个时间间隔
if (!Date.prototype.subtract) {
  Object.defineProperty(Date.prototype, 'subtract', {
    value: function subtract(date) {
      if (this === undefined || this === null) throw new TypeError();
      if (date === undefined || date === null) throw new TypeError();

      const diff = this - date;
      const result = {};
      result.days = Math.floor(diff / 86400000);
      result.hours = Math.floor((diff % 86400000) / 3600000);
      result.minutes = Math.floor(((diff % 86400000) % 3600000) / 60000);
      result.seconds = Math.floor((((diff % 86400000) % 3600000) % 60000) / 1000);
      result.milliseconds = Math.floor((((diff % 86400000) % 3600000) % 60000) % 1000);
      result.totalDays = diff / 86400000;
      result.totalHours = diff / 3600000;
      result.totalMinutes = parseInt(diff / 60000, 10);
      result.totalSeconds = diff / 1000;
      result.totalMilliseconds = diff;
      return result;
    },
  });
}

