// 计算时间差异
if (!Number.prototype.diffTimer) {
  Number.prototype.diffTimer = function diffTimer() {
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
  };
}

// 数字补零
if (!Number.prototype.LenWithZero) {
  Number.prototype.LenWithZero = function LenWithZero(oCount) {
    let strText = this.toString();
    while (strText.length < oCount) {
      strText += '0';
    }
    return strText;
  };
}

// 获取大小
if (!Number.prototype.getSize) {
  Number.prototype.getSize = function getSize() {
    const _bytes = this;
    if (_bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(_bytes) / Math.log(k));
    return (_bytes / Math.pow(k, i)).toPrecision(3) + sizes[i];
  };
}

// 转为千分位显示
if (!Number.prototype.toThousand) {
  Number.prototype.toThousand = function toThousand() {
    return this.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  };
}

export default Number;
