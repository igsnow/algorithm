/**
 * @title 四数之和
 * @tags  数组、哈希表、双指针
 */
let fourSum = function (nums, target) {
    if (nums.length < 4) return []
    nums.sort((a, b) => a - b)
    let arr = []
    let i = 0
    while (i < nums.length - 3) {
        let j = i + 1
        while (j < nums.length - 2) {
            let k = j + 1, m = nums.length - 1
            while (k < m) {
                let sum = nums[i] + nums[j] + nums[k] + nums[m]
                if (sum == target) {
                    arr.push([nums[i], nums[j], nums[k], nums[m]])
                    k++
                    m--
                    // 去重k
                    while (k < m && nums[k - 1] == nums[k]) {
                        k++
                    }
                    // 去重m
                    while (k < m && nums[m + 1] == nums[m]) {
                        m--
                    }
                } else if (sum > target) {
                    m--
                } else {
                    k++
                }
            }
            j++
            // 去重j
            while (j < nums.length - 2 && nums[j - 1] == nums[j]) {
                j++
            }
        }
        i++
        // 去重i
        while (i < nums.length - 3 && nums[i - 1] == nums[i]) {
            i++
        }
    }
    return arr
};

let res = fourSum([1, 0, -1, 0, -2, 2], 0)
console.log(res)
