/**
 * @title 查找常用字符
 * @tags 数组、哈希表
 */
var commonChars = function (A) {
    if (A.length == 1) return [...A[0]]
    let myMap = new Map()
    for (let s of A[0]) {
        let count = 1
        if (myMap.has(s)) {
            count += myMap.get(s)
        }
        myMap.set(s, count)
    }
    let reg, matchResult = [], result = []
    for (let [k, v] of myMap.entries()) {
        reg = new RegExp(k, 'g')
        for (let i = 1; i < A.length; i++) {
            matchResult = A[i].match(reg)
            console.log(matchResult);
            if (matchResult) {
                if (matchResult.length < myMap.get(k)) {
                    myMap.set(k, matchResult.length)
                }
            } else {
                myMap.delete(k)
            }
        }
    }
    for (let [k, v] of myMap.entries()) {
        // fill() 方法用于将一个固定值替换数组的元素。
        result.push(...new Array(v).fill(k))
    }
    return result
};
let res = commonChars(["bellla", "label", "roller"])
console.log(res);  // ["e","l","l"]

