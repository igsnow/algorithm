/**
 * @title 字符串相加   ?????
 * @tags 字符串
 */
var addStrings = function (num1, num2) {
    let len = num1.length > num2.length ? num1.length : num2.length
    num1 = num1.padStart(len, 0)
    num2 = num2.padStart(len, 0)
    console.log(num1, num2)
    let carry = 0
    let str = ''
    for (let i = len - 1; i >= 0; i--) {
        let tem = parseInt(num1[i]) + parseInt(num2[i]) + carry
        str += tem % 10
        carry = parseInt(tem / 10)
        console.log('tem : ' + tem)
        console.log('str : ' + str)
        console.log('carry : ' + carry);
    }
    if (carry) {
        console.log('--------');
        str += carry
    }
    return str.split('').reverse().join('')
};

let res = addStrings('945', '266')
console.log(res);
