/**
 * @param {string} s
 * @return {string}
 * "hello" => "olleh"
 */
var reverseString = function(s) {
  return s.split('').reverse().join('')
};

let res = reverseString("hello")
console.log(res)