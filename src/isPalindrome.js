/**
 * @param {number} x
 * @return {boolean}
 * 121 => true
 * -121 => false
 * 10 => false
 */
var isPalindrome = function(x) {
  if(x == 0) return true;
  let str = String(x);
  if(str.length == 1) return true;
  let reverseStr = String(x).split('').reverse().join('');
  if(str === reverseStr) return true;
  return false;
};

let res = isPalindrome(12321)
console.log(res)