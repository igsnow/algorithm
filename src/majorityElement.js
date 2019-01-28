/**
 * 求众数
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 1
  let val = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (val = nums[i]) {
      count++
    } else {
      count--
      if (count == 0) {
        val = nums[i + 1]
      }
    }
  }
  return val
};

let res = majorityElement([2, 2, 1, 1, 1, 2, 2])
console.log(res)