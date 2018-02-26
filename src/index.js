module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.charAt(0) == '5' || str.charAt(0) == '8'){
    return false;
  }
return true;
/*
  for(var i = 0; i < str.length/2; i++) {
    for (var arr = 0; i < bracketsConfig.length; arr++) {
      if (str.charAt(i) == bracketsConfig[arr][0]) {
        if (str.charAt(str.length - i - 1) != bracketsConfig[arr][1]) {
          return false;
        }
      }
    }
  }
  return true;
*/
}
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
