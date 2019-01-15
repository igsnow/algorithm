/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * [3, 2, 2, 3] 3 => [2, 2]
 * 
 */
var removeElement = function(nums, val) {
  let str = String(nums);
  while(str.indexOf(val) > -1 || str.indexOf(',') > -1){
      str = str.replace(val, '');
      str = str.replace(',', '');
  }
  let arr = str.split('');
  let newArr = [];
  arr.forEach(item => {
    newArr.push(Number(item));
  });
  return newArr;
};

let res = removeElement([3,2,2,3,5,3], 3);
console.log(res)
