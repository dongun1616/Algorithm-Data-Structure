//배열의 합이 함수에 전달된 정수보다 크거나 같은 하위 배열의 최소 길이를 반환하는 함수
//슬라이딩 윈도우
function minSubArrayLen(arr, num) { //시간복잡도 O(n), 공간복잡도 O(1)
    // 최소길이 초기화
    let minLen = Infinity;
    //현재 배열의 합 선언
    let maxSum = 0;
    //시작 포인트
    let start = 0;

    //윈도우 끝 인덱스까지 순회
    for (let end = 0; end < arr.length; end++) {
        maxSum += arr[end];

        //현재 합이 num이상이면 윈도우 크기를 최소화
        while (maxSum >= num) {
            minLen = Math.min(minLen, end - start + 1);
            // 윈도우의 시작부분값을 뺌
            maxSum -= arr[start];
            //시작인덱스 오른쪽으로 이동
            start++;
        }
    }
    // 최소길이 반환
    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11))