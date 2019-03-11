/**
 * @title 在排序数组中查找元素的第一个和最后一个位置
 * @tags 数组、二分查找
 */
var searchRange = function (nums, target) {
    if (nums.length == 1 && nums[0] == target) {
        return [0, 0]
    }
    let left = 0, right = nums.length - 1
    let result = [-1, -1]
    while (nums.length > 0 && left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] == target) {
            let l = mid, r = mid
            while (l > 0 && nums[l - 1] == target) {
                l--
            }
            while (r + 1 < nums.length && nums[r + 1] == target) {
                r++
            }
            return [l, r]
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return result
};

let res = searchRange([1, 1, 2], 1)
console.log(res);
