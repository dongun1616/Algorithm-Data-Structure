//숫자를 받아 피보나치 수열의 n번째 숫자를 반환하는 재귀 함수
// 재귀
function fib(num) {
    //종료조건 num이 1보다 작으면 1반환
    if (num < 3) return 1;
    //재귀 방식 num
    return fib(num - 1) + fib(num - 2);
}

console.log(fib(6));