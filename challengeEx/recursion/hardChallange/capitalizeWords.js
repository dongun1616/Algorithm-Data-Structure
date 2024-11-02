//단어 배열이 주어지면 각 단어가 대문자로 표시된 새 배열을 반환하는 함수
// 순수 재귀
function capitalizeWords(arr) {
    //종료조건 배열의 길이가 0이면 빈배열 반환
    if (arr.length === 0) return [];
    //재귀방식 첫번째 인덱스를 대문자로 변환후 concat을 사용해 배열을 합쳐서 재귀
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)))
}

console.log(capitalizeWords(['taxi', 'bus', 'train']));