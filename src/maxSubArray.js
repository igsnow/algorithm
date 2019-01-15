/**
 * @param {number[]} nums
 * @return {number}
 * [-2,1,-3,4,-1,2,1,-5,4] => [4,-1,2,1] 6
 */
var maxSubArray = function(nums) {
  let max = nums[0]
  let sum = nums[0]
  for(let i = 0;i < nums.length;i++){
    if(max > 0){
      max += nums[i]
    }else{
      max = nums[i]
    }
    if(max > sum){
      sum = max
    }
  }
  return sum
};

let res = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
console.log(res)