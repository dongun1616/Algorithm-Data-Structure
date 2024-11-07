//가장 작은 데이터를 찾아 가장 앞에 데이터와 교환해나가는 알고리즘
//선택 정렬
function selectionSort(arr) { //시간복잡도 O(n^2)
    //최솟값과 비교하는 루프
    for (let i = 0; i < arr.length; i++) {
        //최솟값 인덱스 저장할 변수
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            //비교한 값중에 최솟값을 변수에 저장
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        //최솟값이 맨앞값과 다르면 최종 최솟값을 맨앞 값과 스왑
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp
        }
    }
    return arr
}

console.log(selectionSort([3, 14, 17, 2, 1, 22, 26]))