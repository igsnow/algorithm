/**
 * @title 最接近的三数之和
 * @tips  先排序，使用双指针
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    let closestNum = nums[0] + nums[1] + nums[2]
    let i = 0
    while (i < nums.length - 2) {
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            let sums = nums[i] + nums[j] + nums[k]
            if (Math.abs(sums - target) < Math.abs(closestNum - target)) {
                closestNum = sums
            }
            if (sums < target) {
                j++
            } else if (sums > target) {
                k--
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
