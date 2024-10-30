//밑과 지수를 받아들이고 밑의 거듭제곱을 지수로 반환하는 함수
// 재귀
function power(num1, num2) {
    // 종료조건 지수가 0이면 1반환
    if (num2 === 0) return 1;
    // 밑을 곱하고 지수를 감소시키고 반환
    return num1 * power(num1, num2 - 1);
}

console.log(power(2, 4));