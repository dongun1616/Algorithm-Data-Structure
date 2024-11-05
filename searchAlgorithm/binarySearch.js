//정렬된 배열과 값을 인수로 받고 원하는 값을 찾아 인덱스를 반환하는 함수
// 이진검색 알고리즘
function binarySearch(arr, num) {
    //시작과 끝 포인터 선언
    let left = 0;
    let right = arr.length - 1;
    //시작 포인터가 끝포인터를 교차할시 종료
    while (left <= right) {
        //중간 인덱스 내림해서 선언
        let middle = Math.floor((left + right) / 2)
        //먄약 num이 중간 인덱스값과 같으면 인덱스 반환
        if (arr[middle] === num) {
            return middle;
        }
        //만약 중간 값이 num보다 크면 right를 중간값으로 변경
        else if (arr[middle] > num) {
            right = middle - 1;
        }
        //만약 중간 값이 num보다 작으면 left를 중간값으로 변경
        else if (arr[middle] < num) {
            left = middle + 1;
        }
    }
    //없으면 -1반환
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10))