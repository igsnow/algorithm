/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * [3, 2, 2, 3] 3 => [2, 2]
 * [0, 1, 2, 2, 3, 0, 4, 2] 2 => [0, 1, 3, 0, 4]
 */
var removeElement = function(nums, val) {
  for(let i = 0;i < nums.length;i++){
    if(nums[i] == val){
      nums.splice(i, 1)
      removeElement(nums, val)
    }
  }
  return nums
};

let res = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
console.log(res)