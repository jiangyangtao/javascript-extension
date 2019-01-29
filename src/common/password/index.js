import './../../extensions/math';

const password = {};
const key = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbol = '~!@#$%^&*()_+`-=';
const atSymbol = '@';
const joinAtSymbol = function joinAtSymbol(password) {
  const key =password.substr(Math.createRandom(0, password.length) - 1, 1);
  return password.replace(key,atSymbol);
}


password.newPassword = function newPassword(legnth = 8, containsAtSymbol = false, containsSymbol = false) {
  const _key = key;
  if(containsSymbol) _key = key + symbol;

  let passwordStr = '';
  for (let index = 0; index < length; index++) {
    passwordStr += _key.substr(Math.createRandom(0, _key.length) - 1, 1);
  }
  if(containsAtSymbol && passwordStr.indexOf('@') === -1) {
    passwordStr = joinAtSymbol(passwordStr);
  }
  return passwordStr;
}

export default password;