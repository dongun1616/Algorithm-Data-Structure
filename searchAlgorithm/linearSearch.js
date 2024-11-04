//배열과 값을 인수로 받고 원하는 값을 찾아 인덱스를 반환하는 함수
// 선형검색 알고리즘
function linearSearch(arr, num) {
    //배열 순회 
    for (let i = 0; i < arr.length; i++) {
        // 만약 배열값이 num이랑 같으면 인덱스 반환
        if (arr[i] === num) return i;
    }
    return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 4))