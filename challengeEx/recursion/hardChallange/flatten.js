//배열의 배열을 받아들이고 모든 값이 평활화된 새 배열을 반환하는 재귀함수
//재귀
function flatten(arr) {
    // 종료조건 재귀조건
    return arr.reduce((acc, val) =>
        Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}

console.log(flatten([1, [2, [3, 4], [[5]]]]));