// 指定数组根据关键字排序
// key : 关键字
// orderby : false/true,false=desc,true=asc。默认为true=asc
window.keySort = function keySort(key, orderby) {
  return (x, y) => {
    if (x[key] > y[key]) {
      if (!orderby) return -1;
      return 1;
    }

    if (x[key] < y[key]) {
      if (!orderby) return 1;
      return -1;
    }
    return 0;
  };
};

export default window;
