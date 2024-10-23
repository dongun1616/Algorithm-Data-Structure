// 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인하는 함수
// 다중포인터
function averagePair(arr, avg) { //시간복잡도 O(n) 공간복잡도 O(1)
    //처음과 끝의 배열 포인터 선언
    let left = 0;
    let right = arr.length - 1;
    //처음과 끝 포인터가 만날때 까지 반복
    while (left <= right) {
        // 평균값 선언
        let currentAvg = (arr[left] + arr[right]) / 2
        //만약 처음과 끝 포인터의 평균값이 avg와 같으면 true를 반환
        if (avg === currentAvg) {
            return true;
        }
        // avg가 currentAvg 값보다 크면 처음 포인터 증가
        else if (avg > currentAvg) {
            left++;
        }
        // avg 가 currentAvg 값보다 작으면 끝 포인터 감소
        else {
            right--;
        }
    }
    //다 통과하면 false를 반환
    return false;
}

console.log(averagePair([1, 2, 3], 2.5))