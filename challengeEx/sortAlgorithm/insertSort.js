//정렬된 배열 부분과 비교하여, 자신의 위치를 찾아 삽입하여 정렬하는 알고리즘
//삽입 정렬
function insertionSort(arr, comparator) {
    //기본 비교기
    if (typeof comparator === 'undefined') {
        comparator = (a, b) => a - b;
    }
    //배열에서 두번째 인덱스부터 시작하는 루프
    for (let i = 1; i < arr.length; i++) {
        //최근 값 선언
        let currentVal = arr[i]
        //
        for (var j = i - 1; j > -1 && comparator(arr[j], currentVal) > 0; j--) {
            arr[j + 1] = arr[j];
        }
        // 현재 값을 올바른 위치에 삽입
        arr[j + 1] = currentVal
    }
    return arr;
}

console.log(insertionSort([22, 16, 12, 3, 7, 2, 1]))