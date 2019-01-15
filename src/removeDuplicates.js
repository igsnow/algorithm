/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for(let i = 0;i < nums.length;i++){
    if(nums[i] == nums[i+1]){
      nums.splice(i, 1)
      removeDuplicates(nums)
    }
  }
  return nums.length
};

let res = removeDuplicates([1, 1, 1, 2, 2, 2, 3, 5, 5, 5])
console.log(res)