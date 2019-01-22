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

let str = 'www.baidu.com'
console.log(encodeURIComponent(str))

let json = '{"a" : 1, "b" : 2}'
console.log(JSON.parse(json))
