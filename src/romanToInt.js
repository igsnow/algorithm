/**
 * @param {string} s
 * @return {number}
 * "III" => 3
 * "IV" => 4
 * "IX" => 9
 * "LVIII" => 58
 * "MCMXCIV" => 1994
 */
var romanToInt = function(s) {
  const map = {
      I : 1,
      V : 5,
      X : 10,
      L : 50,
      C : 100,
      D : 500,
      M : 1000
  }
  let result = 0
  for(let i = 0;i < s.length;i++){
    if(map[s[i]] < map[s[i+1]]){
      result -= map[s[i]]
    }else{
      result += map[s[i]]
    }
  }
  return result
};

let res = romanToInt('CD')
console.log(res)