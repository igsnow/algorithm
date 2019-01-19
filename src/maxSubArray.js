/**
 * @param {number[]} nums
 * @return {number}
 * [-2,1,-3,4,-1,2,1,-5,4] => [4,-1,2,1] 6
 */
var maxSubArray = function(nums) {
  if(nums.length == 1) return nums[0]
  // 假设第一个
  let res = nums[0]
  let sum = 0
  for(let i = 0;i < nums.length;i++){
    if(sum > 0){
      sum += nums[i]
    }else{
      sum = nums[i]
    }
    res = Math.max(res, sum)
  }
  return res
};

let res = maxSubArray([1, 2])
console.log(res)