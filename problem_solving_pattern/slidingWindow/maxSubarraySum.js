// 정수 배열과 N이라는 숫자를 사용해. 함수는 배열에서 N개의 연속 요소의 최대 합을 계산해야 하는 함수
function maxSubarraySum1(arr, num) { //시간 복잡도 O(n^2)
    if (num > arr.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max
}

// 슬라이딩 윈도우 리팩토링 함수
function maxSubarraySum2(arr, num) { //시간 복잡도 O(n)
    // 현재 최대 합
    let maxSum = 0;
    // 임시 합
    let tempSum = 0;
    // 배열의 길이가 num 보다 작다면 null 반환
    if (arr.length < num) return null;
    //첫 번째 윈도우의 합 maxSum에 저장
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    //첫 번째 윈도우의 합 tempSum에 복사
    tempSum = maxSum;
    //윈도우의 제일 앞 값을 빼고 다음 인덱스 값을 더하는 루프
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum); //둘중 더 큰값을 maxSum에 저장
    }
    //maxSum 을 반환
    return maxSum;
}

console.log(maxSubarraySum1([1, 2, 3, 4], 2))
console.log(maxSubarraySum2([1, 2, 3, 4], 2))