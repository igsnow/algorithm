/**
 * @param {number} x
 * @return {number}
 * 123 => 321 
 * -123 => -321 
 * 120 => 21
 */
var reverse = function(x) {
    if(x == 0) return 0;
    if(String(x).length == 1) return x;
    let str = String(x);
    if(str[0] == '-'){
        str = String(x).substr(1);
        let arr = str.split('').reverse();
        let num = Number(arr.join(''));
        let total = Number('-' + num);
        if(total < -2147483648) return 0;
        return total;
    }else{
        str = String(x);
        let arr = str.split('').reverse();
        let num = Number(arr.join(''));
        if(num > 2147483647) return 0;
        return num;
    }
};

let res =  reverse(1200)
console.log(res)
