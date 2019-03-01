/**
 * @title 三数之和
 * @tags  数组、双指针
 */
let threeSum = function (nums) {
    if (nums.length < 3) return []
    nums.sort((a, b) => a - b)
    let arr = []
    let i = 0
    while (i < nums.length - 2) {
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum == 0) {
                arr.push([nums[i], nums[j], nums[k]])
                j++
                k--
                // 跳过j重复值
                while (j < k && nums[j - 1] === nums[j]) {
                    j++
                }
                // 跳过k重复值
                while (j < k && nums[k] === nums[k + 1]) {
                    k--
                }
            } else if (sum > 0) {
                k--
            } else {
                j++
            }
        }
        i++
        // 跳过i重复值
        while (i < nums.length - 2 && nums[i - 1] === nums[i]) {
            i++
        }
    }
    return arr
}

let res = threeSum([-1, 0, 1, 2, -1, -4])
console.log(res)
