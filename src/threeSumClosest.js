/**
 * @title 最接近的三数之和
 * @tips  先排序，使用双指正
 */
var threeSumClosest = function (nums, target) {
    nums = nums.sort((a, b) => a - b)
    let closestNum = nums[0] + nums[1] + nums[2]
    let i = 0
    while (i < nums.length) {
        let one = nums[i]
        let start = i + 1
        let end = nums.length - 1
        while (start < end) {
            let sums = one + nums[start] + nums[end]
            if (Math.abs(sums - target) < Math.abs(closestNum - target)) {
                closestNum = sums
            }
            if (sums < target) {
                start++
            } else if (sums > target) {
                end--
            } else {
                return target
            }
        }
        i++
    }
    return closestNum
};

let res = threeSumClosest([-1, 2, 1, -4], 1)
console.log(res)
