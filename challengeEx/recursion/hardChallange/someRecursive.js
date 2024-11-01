//배열의 단일 값이 콜백에 전달될 때 true를 반환하면 true를 반환하는 함수
//재귀
//홀수인지 확인하는 콜백
const isOdd = val => val % 2 !== 0;

function someRecursive(arr, call) {
    //종료조건 배열의 길이가 0인경우 false반환
    if (arr.length === 0) return false;
    //재귀방식 배열 첫 인덱스 콜백에 넣어 맞으면 true 반환
    if (call(arr[0])) return true
    // 틀리면 첫 인덱스 삭제후 재귀
    return someRecursive(arr.slice(1), call);
}

console.log(someRecursive([4, 6, 8, 9], isOdd));