//분할 정복
//배열에 있는 정수의 인덱스를 반환하는 메소드
function findRotatedIndex(arr, num) {
    //헬퍼 메소드
    function helper(start, end) {
        //종료조건 배열 길이가 1일때 값이 num과 같으면 인덱스반환 아니면 -1반환
        if (start === end) {
            return arr[start] === num ? start : -1;
        }
        //중간지점 선언
        let middle = Math.floor((start + end) / 2);
        //왼쪽부분 값 찾기
        let left = helper(start, middle);
        //왼쪽값에서 찾았으면 결과 반환
        if (left !== -1) return left;
        //오른쪽부분 값 찾기
        return helper(middle + 1, end);
    }
    //시작 재귀 호출
    return helper(0, arr.length - 1);
}

console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8));