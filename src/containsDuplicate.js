/**
 * @param {number[]} nums
 * @return {boolean}
 * [1, 2, 3, 1] => true
 * [1, 2, 3, 4] => false
 */
var containsDuplicate = function(nums) {
  let arr = []
  for(let i = 0;i< nums.length;i++){
      if(arr.indexOf(nums[i]) < 0){
          arr.push(nums[i])
      }
  }
  if(arr.length < nums.length){
      return true
  }else{
      return false
  }
};

let res = containsDuplicate([1, 2, 3, 4])
console.log(res)