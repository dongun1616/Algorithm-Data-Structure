//숫자를 받아 해당 숫자의 계승을 반환하는 팩토리얼 함수
// 재귀
function factorial(num) {
    // 종료조건 num이 1보다 작을경우 1을 반환
    if (num < 2) return 1;
    // 재귀방식 num을 곱하고 감소시켜서 반환
    return num * factorial(num - 1);
}

console.log(factorial(4));