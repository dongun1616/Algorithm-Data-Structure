// 숫자 배열을 받아 모든 숫자의 곱을 반환하는 함수
// 재귀
function productOfArray(arr) {
    //종료조건 
    if (arr.length === 0) return 1;
    //재귀방식 배열 첫번째 인덱스를 첫번째 인덱스를 삭제하고 호출해 곱한다.
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 10]))