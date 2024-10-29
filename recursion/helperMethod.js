function collectOddValues(arr) {
    let result = []; //재귀 외부에 선언

    function helper(helperInput) {
        if (helperInput.length === 0) { //종료 조건
            return;
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1)) //처음 인덱스를 삭제하고 재귀
    }
    helper(arr)

    return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]))