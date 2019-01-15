/**
 * @param {string} s
 * @return {number}
 * "Hello World" => 5
 * "lebron james"
 */
var lengthOfLastWord = function(s) {
  s = s.trim()
  if(s.length===0) return 0
  if(s.indexOf(' ') < 0) return s.length
  return s.length - 1  - s.lastIndexOf(' ')
};

let res = lengthOfLastWord("lebron james")
console.log(res)