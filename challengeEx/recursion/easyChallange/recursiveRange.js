//숫자를 받으면 0부터 함수에 전달된 숫자까지의 모든 숫자를 더하는 함수
// 재귀
function recursiveRange(num) {
    //종료조건 num이 0일 경우 0반환
    if (num === 0) return 0;
    //재귀방식 num에 함수(num-1)을 더한값을 반환
    return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));