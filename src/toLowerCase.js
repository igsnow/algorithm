/**
 * @title 转换成小写字母
 * @tags 字符串
 */
var toLowerCase = function (str) {
    let s = ''
    console.log('a'.charCodeAt() + '-' + 'z'.charCodeAt());
    console.log('A'.charCodeAt() + '-' + 'Z'.charCodeAt());
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
            s += String.fromCharCode(str[i].charCodeAt() + 32)
        } else {
            s += str[i]
        }
    }
    return s
};

let res = toLowerCase('ZHanGZhIYOnG')
console.log(res);
