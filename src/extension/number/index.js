// 计算秒数的用时时间
if (!Number.prototype.diffTimer) {
  Object.defineProperty(Number.prototype, 'diffTimer', {
    value() {
      if (this === undefined || this === null) throw new TypeError();

      const _second = this;
      let second = parseInt(_second, 10);
      let minute = 0;
      let hour = 0;
      if (second > 60) {
        minute = parseInt(second / 60, 10);
        second = parseInt(second % 60, 10);
        if (minute > 60) {
          hour = parseInt(minute / 60, 10);
          minute = parseInt(minute % 60, 10);
        }
      }
      let result = `${parseInt(second, 10)}秒`;
      if (minute > 0) {
        result = `${parseInt(minute, 10)}分${result}`;
      }
      if (hour > 0) {
        result = `${parseInt(hour, 10)}小时${result}`;
      }
      return result;
    },
  });
}

// 数字补零
if (!Number.prototype.LenWithZero) {
  Object.defineProperty(Number.prototype, 'fillZero', {
    value(zero) {
      if (this === undefined || this === null) throw new TypeError();
      if (zero === undefined || zero === null || typeof zero !== 'string') throw new TypeError();

      let strText = this.toString();
      while (strText.length < zero) {
        strText += '0';
      }
      return strText;
    },
  });
}

// 计算字节占用容量
if (!Number.prototype.getSize) {
  Object.defineProperty(Number.prototype, 'getSize', {
    value() {
      if (this === undefined || this === null) throw new TypeError();

      const _bytes = this;
      if (_bytes === 0) return '0 B';
      const k = 1024;
      const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      const i = Math.floor(Math.log(_bytes) / Math.log(k));
      return (_bytes / Math.pow(k, i)).toPrecision(3) + sizes[i];
    },
  });
}

// 转为千分位显示
if (!Number.prototype.toThousand) {
  Object.defineProperty(Number.prototype, 'toThousand', {
    value() {
      if (this === undefined || this === null) throw new TypeError();

      return this.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    },
  });
}

// 时间戳转换为时间
if (!Number.prototype.toDate) {
  Object.defineProperty(Number.prototype, 'toDate', {
    value() {
      if (this === undefined || this === null || this < 0) throw new TypeError();

      return new Date(this);
    },
  });
}

export default Number;
