//그리드 알고리즘
//주어진 값에 대해 거스름돈을 만들 수 있는 방법의 수를 알아내는 메소드
function minCoinChange(coins, amount) {
    // 결과로 반환할 동전 조합을 저장할 배열
    const change = [];
    // 현재까지 사용된 동전의 총 금액을 저장할 변수
    let total = 0;
    // 동전 배열을 거꾸로 순회 (가장 큰 동전부터 탐색)
    for (let i = coins.length; i >= 0; i--) {
        // 현재 탐색 중인 동전 값
        const coin = coins[i];

        // 현재 동전을 사용할 수 있는 만큼 반복해서 추가
        while (total + coin <= amount) {
            // 현재 동전을 결과 배열에 추가
            change.push(coin);
            // 현재까지의 총 금액에 동전 값을 더함
            total += coin;
        }
    }

    // 목표 금액을 만들기 위한 동전 조합 반환
    return change;
}

const denominations = [1, 5, 10, 25]

console.log(minCoinChange(denominations, 63))