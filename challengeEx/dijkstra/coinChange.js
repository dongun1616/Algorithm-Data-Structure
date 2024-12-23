function coinChange(denominations, value) {
    //각 값을 저장할 배열(dp)을 생성합니다.
    let dp = [];
    //dp[i]는 i 값을 얻을 수 있는 방법의 수를 저장합니다.
    dp = Array(value + 1).fill(0);

    //dp[0]은 항상 1로 설정합니다.
    //값이 0일 때는 동전을 사용하지 않는 방법 1가지가 있기 때문입니다.
    dp[0] = 1;

    //각 동전을 순회하며 dp를 업데이트합니다.
    for (let coin of denominations) {
        //현재 동전으로 만들 수 있는 값부터 시작하여 배열을 업데이트합니다.
        for (let i = coin; i <= value; i++) {
            //dp[i]에 dp[i - coin] 값을 더합니다.
            //dp[i - coin]은 i 값에서 현재 동전을 사용한 이전 상태의 방법 수입니다.
            dp[i] += dp[i - coin];
        }
    }

    //dp 배열에서 목표값(value)에 대한 방법의 수를 반환합니다.
    return dp[value];
}

const denominations = [1, 5, 10, 25]

console.log(coinChange(denominations, 20))