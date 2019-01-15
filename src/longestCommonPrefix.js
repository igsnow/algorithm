/**
 * @param {string[]} strs
 * @return {string}
 * ['flower','flow','flight'] => "fl"
 * ["dog","racecar","car"] => ""
 */
var longestCommonPrefix = function(strs) {
  if(strs == null || strs.length == 0) return '';
  if(strs.length == 1) return strs[0];
  let arr = [];
  let result = '';
  strs.forEach(item => {
    arr.push(item.length);
  });
  let minLen = Math.min(...arr)
  for (let i = 0; i < minLen; i++) {
    let s = strs[0][i];
    if(strs.every(val => val[i] == s)){
      result += s;
    }else{
      break;
    }
  }  
  return result;
};

let res = longestCommonPrefix(['flower','flow','flight'])
console.log(res)
