//재귀를 활용해 퀵 정렬을 하는 함수 
//시간복잡도 O(n log n), 최악 O(n^2)

//피벗 헬퍼
function pivot(arr, start = 0, end = arr.length - 1) {
    //스왑 함수
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp
    }
    //중간 지점 설정
    let middle = Math.floor((start + end) / 2)
    //배열 맨 앞을 피벗으로 선택
    let pivot = arr[middle];
    //피벗을 시작위치로 이동하여 정렬을 쉽게 수행
    swap(arr, start, middle)
    //스왑 인덱스를 변수로 저장
    let swapIdx = start;
    //루프 선회하는동안 피벗이 클경우 피벗 인덱스 변수를 증가시키고
    for (let i = start + 1; i < arr.length; i++) {
        //피벗보다 비교하는 값이 큰경우 스왑 인덱스 증가
        if (pivot > arr[i]) {
            swapIdx++;
            //스왑
            swap(arr, swapIdx, i)
        }
    }
    //피벗을 올바른 위치로 이동
    swap(arr, swapIdx, start)
    return swapIdx;
}

//퀵 정렬
function quickSort(arr, left = 0, right = arr.length - 1) {
    //종료조건 왼쪽인덱스가 오른쪽 인덱스와 같거나 큰경우 종료
    if (left < right) {
        //피벗 인덱스 선언
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex - 1)
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))