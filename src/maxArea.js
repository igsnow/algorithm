/**
 * @title 盛最多水的容器
 * @tips 双指针
 */
var maxArea = function (height) {
    let maxArea = 0
    let i = 0
    while (i < height.length) {
        let start = i
        let end = height.length - 1
        while (start < end) {
            let total = Math.min(height[start], height[end]) * (end - start)
            if (total > maxArea) {
                maxArea = total
            }
            if (height[start] < height[end]) {
                start++
            } else {
                end--
            }
        }
        i++
    }
    return maxArea
};

let res = maxArea([2, 3, 4, 5, 18, 17, 6])
console.log(res)


