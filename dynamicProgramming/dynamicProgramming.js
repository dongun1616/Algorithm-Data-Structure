//동적 프로그래밍 

//피보나치 수열 예제(재귀)
function fib1(n) {
    //n이 2이하이면 1반환
    if (n <= 2) return 1;
    //피보나치 계산법으로 재귀
    return fib1(n - 1) + fib1(n - 2)
}

//피보나치 수열 예제 재귀 (메모이제이션) 하향식 접근
function fib_memo(n, memo = []) {
    //해당 계산값이 있으면 반환
    if (memo[n] !== undefined) return memo[n];
    //n이 2이하이면 1반환
    if (n <= 2) return 1;
    //피보나치 계산을 재귀하며 저장
    let res = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
    //계산한 결과를 n인덱스에 저장
    memo[n] = res;
    return res;
}

//피보나치 수열 예제 루프 (타뷸레이션) 상향식 접근
function fib_table(n) {
    //n이 2이하이면 1반환
    if (n <= 2) return 1;
    //피보나치 수열 값 저장 변수
    let fibNums = [0, 1, 1];
    //피보나치 계산 루프
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}

// console.log(fib1(6));
console.log(fib_table(6));