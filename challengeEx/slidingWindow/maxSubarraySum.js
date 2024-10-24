//함수에 전달된 숫자의 길이를 가진 하위 배열의 최대 합을 구하는 함수
//슬라이딩 윈도우
function maxSubarraySum(arr, num) {
    //배열의 길이가 주어진 숫자보다 적을시 null 반환
    if (arr.length < num) return null;
    //현재 합 선언
    let maxSum = 0;
    //임시 합 선언
    let tempSum = 0;
    //시작부분 현재값에 더하는 루프
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    //현재합 임시합에 복사
    tempSum = maxSum;
    //윈도우에 앞부분 값을빼고 뒷부분 값을 더하는 루프
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        //루프중 현재합이 임시합보다 크면 현재합에 복사
        maxSum = Math.max(maxSum, tempSum);
    }
    //maxSum 반환
    return maxSum;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))