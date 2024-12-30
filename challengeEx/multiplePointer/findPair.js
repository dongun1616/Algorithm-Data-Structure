//주어진 배열에서 숫자 n만큼의 차이가 있는 쌍이 존재하는지 확인하는 메소드
//다중 포인터 방식
function findPair(arr, num) {
    //내림차순으로 정렬
    arr.sort((a, b) => b - a);
    //시작 다음 포인터 선언
    let start = 0;
    let next = 1;
    //다음 포인터가 배열의 끝에 도달할때 까지 순회
    while (next < arr.length) {
        //시작값 - 다음값을 변수에 저장
        let diff = arr[start] - arr[next];
        //만약 시작값 - 다음값 = 절대값(num)이면 true반환 
        if (diff === Math.abs(num)) return true;
        //만약 시작값 - 다음값이 < num 이면 다음 포인터 증가
        else if (diff < num) {
            next++;
        }
        //만약 시작값 - 다음값이 > num 이면 시작 다음 포인터 증가
        else {
            start++;
            if (start === next) next++;
        }
    }
    //모두 통과하면 false를 반환
    return false;
}


console.log(findPair([6, 1, 4, 10, 2, 4], 2))