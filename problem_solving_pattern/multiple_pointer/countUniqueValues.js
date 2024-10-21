// 다중 포인터 고유값을 세는 함수
function countUniqueValues(arr) { //시간복잡도 O(n)
    // 빈 배열일 경우 0을 반환
    if (arr.length === 0) return 0
    // 포인터 선언
    let first = 0;

    for (let second = 1; second < arr.length; second++) {
        if (arr[first] !== arr[second]) { //두 포인터 값이 다르면
            first++;  // 첫번째 포인터 증가
            arr[first] = arr[second]; //첫번째 포인터 값에 두번째 포인터값 선언
        }
    }
    return first + 1;
}

console.log(countUniqueValues([1, 2, 2, 3, 4, 4, 4, 5]))
