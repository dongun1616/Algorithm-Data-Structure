//인접한 두 요소를 비교하여 의도한 순서가 될 때까지 교체하는 정렬 알고리즘
//버블 정렬
function bubbleSort(arr) { //시간복잡도 O(n^2)
    // 스왑을 했는지 확인하는 변수
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //스왑
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false
            }
        }
        if (noSwaps) break; //스왑을 안했을경우 루프탈출
    }
    return arr;
}


console.log(bubbleSort([24, 15, 1, 4, 6, 13, 11]))