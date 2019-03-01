/**
 * @title 第三大的数
 */
var thirdMax = function (nums) {
    nums.sort((a, b) => b - a)
    let arr = [...new Set(nums)]
    console.log(arr)
    if (arr.length < 3) {
        return Math.max(...arr)
    }
    return arr[2]
};

let res = thirdMax([1, 2])
console.log(res)
