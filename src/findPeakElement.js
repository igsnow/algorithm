/**
 * @title 寻找峰值
 * @tags 数组、二分法   ????????
 */
var findPeakElement = function (nums) {
    if (nums.length == 1) {
        return 0
    }
    let left = 0, right = nums.length - 1
    while (left + 1 < right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] < nums[mid + 1]) {
            left = mid
        } else {
            right = mid
        }
    }
    if (nums[left] > nums[right]) {
        return left
    } else {
        return right
    }
};

let res = findPeakElement([1, 2, 3])
console.log(res);
