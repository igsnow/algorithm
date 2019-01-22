/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1, j = n - 1
  while (j >= 0) {
    while (i >= 0 && nums1[i] > nums2[j]) {
      nums1[i + j + 1] = nums1[i]
      i--
    }
    nums1[i + j + 1] = nums2[j]
    j--
  }
  return nums1
};

let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
let res = merge(nums1, m, nums2, n)
console.log(res)