var reverse = function(x) {
  if(x == 0) return 0;
  if(String(x).length == 1) return x;
  try {
      let str = String(x);
      if(str[0] == '-'){
          str = String(x).substr(1);
          let arr = str.split('').reverse();
          let num = Number(arr.join(''));
          let total = Number('-' + num);
          return total;
      }else{
          str = String(x);
          let arr = str.split('').reverse();
          let num = Number(arr.join(''));
          return num;
      }
  }catch(e){
     return 0
  }
};

let res =  reverse(1200)
console.log(res)
