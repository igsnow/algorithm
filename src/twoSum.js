/**
 * 两数之和  2 +7 = 9   返回下标
 * @param {[2, 7, 11, 15]} nums
 * @param {9} target
 * @return {[0, 1]}
 */
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i+1; j < nums.length; j++) {
      if (nums[i]+nums[j]==target) {
        return [i,j]
      }
    }
  }
};

let res = twoSum([2, 7, 11, 15], 9)
console.log(res)