/**
 * @param {string} s
 * @return {number}
 * "leetcode" => 0
 * "loveleetcode" => 2
 */
var firstUniqChar = function(s) {
  let newArr = []
  for(let i = 0;i<s.length;i++){
     if(!newArr[s.charAt(i)]){
         newArr[s.charAt(i)] = 1
     }else{
         newArr[s.charAt(i)] += 1
     }
  }
  let k
  for(var j in newArr){
      if(newArr[j] === 1){
          k = j
          break
      }
  }
  return s.indexOf(k)
};

let res = firstUniqChar("leetcode")
console.log(res)