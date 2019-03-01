/**
 * @title 两数之和
 */
let twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};

let res = twoSum([3, 2, 4], 6)
console.log(res)
