//배열 병합 방법
function merge(arr1, arr2, comparator) {
    //기본 비교기
    if (typeof comparator === 'undefined') {
        comparator = (a, b) => a - b;
    }
    //입력 두개를 취하는 함수를 정의하여 마지막에 반환할 빈 배열을 만든다.
    let res = [];
    //포인터 선언
    let point1 = 0;
    let point2 = 0;
    //하나의 포인터가 끝에 도달할 때까지
    while (point1 < arr1.length && point2 < arr2.length) {
        if (comparator(arr1[point1], arr2[point2]) < 0) {
            res.push(arr1[point1])
            point1++
        }
        else {
            res.push(arr2[point2])
            point2++
        }
    }
    //남은 배열 결과 배열에 채우기
    while (point1 < arr1.length) {
        res.push(arr1[point1])
        point1++
    }
    while (point2 < arr2.length) {
        res.push(arr2[point2])
        point2++
    }
    return res;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]))