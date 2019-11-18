/**
 * 冒泡排序
 */
let arr = [2, 5, 1, 8, 7, 4];
let sort = function (arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {        // 相邻元素两两对比
                let temp = arr[j + 1];        // 元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sort(arr));

