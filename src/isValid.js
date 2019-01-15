/**
 * @param {string} s
 * @return {boolean}
 * "()" => true
 * "()[]{}" => true
 * "(]" => false
 */
var isValid = function(s) {
  if(s == null || s.length == 1) return false;
  while(s.indexOf('{}') > -1 || s.indexOf('()') > -1 || s.indexOf('[]') > -1){
       s = s.replace('{}', '');
       s = s.replace('()', '');
       s = s.replace('[]', '');
  }
  return s === '';
};

let res = isValid("([{}]){}")
console.log(res)