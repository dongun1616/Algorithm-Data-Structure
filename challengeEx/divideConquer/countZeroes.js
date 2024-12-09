//분할 정복
//배열에 있는 0의 개수를 반환하는 메소드
function countZeroes(arr) {
    //종료조건 arr길이가 1이면, 값이 0인지 확인하여 결과 반환
    if (arr.length === 1) {
        return arr[0] === 0 ? 1 : 0;
    }
    //중간지점 선언
    let middle = Math.floor(arr.length / 2);
    //분할된 배열을 저장
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    //분할된 요소들을 합병
    return countZeroes(left) + countZeroes(right);
}

console.log(countZeroes([1, 1, 1, 1, 0, 0, 0]));