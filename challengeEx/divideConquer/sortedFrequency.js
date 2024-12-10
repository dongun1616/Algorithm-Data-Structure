//분할 정복
//배열에서 해당 숫자의 발생 횟수를 세는 메소드
function sortedFrequency(arr, num) {
    //헬퍼 메소드
    function helper(start, end) {
        //종료조건 arr길이가 1이면, 배열 값이 num과 같은지 확인하여 결과 반환
        if (start === end) {
            return arr[start] === num ? 1 : 0;
        }
        //중간지점 선언
        let middle = Math.floor((start + end) / 2);
        //왼쪽과 오른쪽을 재귀적으로 탐색
        let left = helper(start, middle);
        let right = helper(middle + 1, end);
        //분할된 요소들을 합병
        return left + right;
    }
    //시작 재귀호출
    const count = helper(0, arr.length - 1)
    //합산 값이 0개면 -1을반환 아니면 그대로 반환
    return count === 0 ? -1 : count;
}
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2))