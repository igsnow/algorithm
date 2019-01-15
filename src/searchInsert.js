/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * [1, 3, 5, 6] 5 => 2
 * [1, 3, 5, 6] 2 => 1
 * [1, 3, 5, 6] 7 => 4
 * [1, 3, 5, 6] 0 => 0
 */
var searchInsert = function(nums, target) {
  for(let i = 0;i<nums.length;i++){
      if(nums[i]===target){
        return i
      }else{
        if(target > nums[i] && target < nums[i+1]){
          return i + 1
        }else if(target < nums[0]){
          return 0    
        } else if(target > nums[nums.length - 1]){
          return nums.length
        }
      }
  }
};

let res = searchInsert([1, 3, 5, 6], 5)
console.log(res)