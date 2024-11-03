//객체를 받아 숫자인 모든 값을 찾아 문자열로 변환하는 함수
//재귀
function stringifyNumbers(obj) {
    let res = {};
    // 객체 순회
    for (let key in obj) {
        // 배열이 아닌 객체의 경우에만 재귀 호출
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            res[key] = stringifyNumbers(obj[key]); // 재귀 호출
        }
        //객체 값의 타입이 숫자면 문자열로 변환
        else if (typeof obj[key] === 'number') {
            res[key] = obj[key].toString(); //숫자 문자열로 변환후 복사
        }
        else {
            res[key] = obj[key]// 단순 값 복사
        }
    }
    return res;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj))