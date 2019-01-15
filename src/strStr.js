/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * "hello" "ll" => 2
 * "aaaaa" "bba" => -1
 * "" "" => 0
 */
var strStr = function(haystack, needle) {
  if(needle.length > haystack.length){
      return -1
  }
  if(haystack.indexOf(needle)){
      return haystack.indexOf(needle)
  }else{
     let first = needle.substr(0,1)
     return haystack.indexOf(first) 
  }
};

let res = strStr("hello", "")
console.log(res)