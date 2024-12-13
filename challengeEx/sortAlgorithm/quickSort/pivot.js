//배열이 주어지면 요소를 피벗 포인트로 지정하여 배열 속 요소를 재배치하는 함수
//피벗 헬퍼
function pivot(arr, comparator, start = 0, end = arr.length - 1) {
    //기본 비교기
    if (typeof comparator === 'undefined') {
        comparator = (a, b) => a - b;
    }
    //스왑 함수
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp
    }
    //배열 맨 앞을 피벗으로 선택
    let pivot = arr[start];
    //스왑 인덱스를 변수로 저장
    let swapIdx = start;
    //루프 선회하는동안 피벗이 클경우 피벗 인덱스 변수를 증가시키고
    for (let i = start + 1; i < arr.length; i++) {
        //피벗보다 비교하는 값이 큰경우 스왑 인덱스 증가
        if (comparator(pivot, arr[i]) > 0) {
            swapIdx++;
            //스왑
            swap(arr, swapIdx, i)
        }
    }
    //피벗을 올바른 위치로 이동
    swap(arr, swapIdx, start)
    return swapIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))