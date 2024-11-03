//객체를 받아들이고 문자열에 해당하는 모든 값의 배열을 반환하는 함수
//재귀
function collectStrings(obj) {
    let res = [];
    //객체 순회
    for (let key in obj) {
        //객체 값이 문자열이면 res에 추가
        if (typeof obj[key] === 'string') {
            res.push(obj[key]);
        }
        // 객체 값이 객체일 경우 재귀 호출
        else if (typeof obj[key] === 'object' && obj[key] !== null) {
            res = res.concat(collectStrings(obj[key]));
        }
    }
    // res 반환
    return res;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj))