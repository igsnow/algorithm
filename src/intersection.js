/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  return [... new Set(nums1.filter(item => nums2.includes(item)))]

  // return [... new Set(nums1.filter(item => nums2.indexOf(item) > -1))]


  // let arr = []
  // for (let i = 0; i < nums2.length; i++) {
  //   if (nums1.indexOf(nums2[i]) > -1) {
  //     arr.push(nums2[i])
  //   }
  // }
  // return [...new Set(arr)]
};

let nums1 = [1, 2, 2, 1], nums2 = [2, 2, 3, 1, 1, 1, 1, 1]
let res = intersection(nums1, nums2)
console.log(res)