/**
 * @title 存在重复元素2
 * @tags 数组、哈希表
 */
var containsNearbyDuplicate = function (nums, k) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (map[num] != undefined && (i - map[num]) <= k) {
            return true
        } else {
            map[num] = i
        }
    }
    return false
};
let res = containsNearbyDuplicate([4, 1, 2, 3, 1, 5], 3)
console.log(res);



