/**
 * @title 组合之和
 * @tags 数组、回溯算法
 */
var combinationSum = function (candidates, target) {
    let res = []
    for (let i = 0; i < candidates.length; i++) {
        let candidate = candidates[i]
        let diff = target - candidate
        if (diff == 0) {
            res.push([candidate])
        } else if (diff > 0) {
            let iter = combinationSum(candidates.slice(i), diff)
            for (let j of iter) {
                // console.log('!' + j);
                res.push(j.concat([candidate]))      // ?????暂时想不通
            }
        }
    }
    return res
};
let res = combinationSum([2, 3, 6, 7], 7)
console.log(res);
