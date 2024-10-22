// 배열에서 원하는 수를 찾아 인덱스를 반환하는 함수(분할과 정복)
function search1(arr, num) { //시간복잡도 O(n) 선형 탐색
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}

// 분할과 정복 리팩토링 함수 (이진 탐색)
function search2(arr, num) { //시간복잡도 O(log n) 이진 탐색
    // 배열의 시작지점과 끝지점 선언
    let min = 0;
    let max = arr.length - 1;
    // 시작지점이 끝지점보다 크지 않을 때까지 반복
    while (min <= max) {
        //중간 인덱스 계산
        let middle = Math.floor((min + max) / 2)
        let currentElement = arr[middle]; //중간 요소 값

        if (currentElement < num) {
            min = middle + 1; //num이 중간값보다 크면 오른쪽부분 탐색
        } else if (currentElement > num) {
            max = middle - 1; //num이 중간값보다 작으면 왼쪽부분 탐색
        } else {
            return middle; //값을 찾았을 경우 중간 인덱스 반환
        }
    }
    //찾지 못했을 경우 -1 반환
    return -1;
}

console.log(search1([1, 2, 3, 4], 4))
console.log(search2([1, 2, 3, 4], 4))