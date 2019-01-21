/**
 * @param {number} x
 * @return {number}
 * 
 */
var mySqrt = function (x) {
    if(x <= 1){
      return x
    }
    let r = x   
    while(r > x / r){
      r = Math.floor((r + x / r) / 2)
    }
    return r
};

let res = mySqrt(100)
console.log(res)
