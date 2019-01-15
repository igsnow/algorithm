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
  let result = ''
  for(let i = 0;i < s.length;i++){
    if(map[s[i]] < map[s[i+1]]){
      result += map[s[i+1]] - map[s[i]]
    }else{
      result += map[s[i+1]]
    }
  }
  console.log(result)
};

let res = romanToInt('LVIII')
console.log(res)