/**
 * @param {number[]} nums
 * @return {number}
 */

// 异或操作，两个相同的数异或结果为0，一个数跟0异或是这个数本身。
// 想到这里，那就简单了，定义一个整数，初始化为0，并用该数依次与列表中元素进行异或操作，
// 最后的结果肯定就是只出现过一次的那个数！


var singleNumber = function (nums) {
  let res = 0
  nums.forEach(item => res ^= item)
  return res
};

let res = singleNumber([4, 1, 2, 1, 2])
console.log(res)