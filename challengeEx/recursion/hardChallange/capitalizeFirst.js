//문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 함수
// 순수 재귀
function capitalizeFirst1(arr) {
    //종료조건 배열의 길이가 0이면 빈배열 반환
    if (arr.length === 0) return [];
    //첫번째 인덱스를 앞글자만 대문자로 변환후 capitalizeWord 에 저장
    const capitalizeWord = arr[0][0].toUpperCase() + arr[0].slice(1);
    //재귀방식 concat을 사용해 배열을 합쳐서 반환
    return [capitalizeWord].concat(capitalizeFirst1(arr.slice(1)))
}

// 헬프 메소드 재귀
function capitalizeFirst2(arr) {
    //외부에 최종 배열 선언
    let result = [];
    //헬퍼 함수 
    function helper(helperInput) {
        //종료조건 배열의 길이가 0인경우 
        if (helperInput.length === 0) return [];
        //재귀 방식 첫번째 배열 값의 첫번째 글자를 대문자로 변환하고 삭제후 재귀
        result.push(helperInput[0][0].toUpperCase() + helperInput[0].slice(1));
        helper(helperInput.slice(1));
    }
    // 헬퍼 불러오기
    helper(arr);
    // 결과반환
    return result;
}

console.log(capitalizeFirst1(['taxi', 'bus', 'train']));
console.log(capitalizeFirst2(['car', 'taco', 'banana']));