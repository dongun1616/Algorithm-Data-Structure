// 빈도수 세기 방식으로 문자열을 비교하는 함수
function validAnagram(str1, str2) { //시간복잡도 O(n)
    // 문자열의 길이가 다르면 false를 반환
    if (str1.length !== str2.length) {
        return false
    }
    // 카운팅할 객체를 선언
    let frequencyCounter = {}
    // str1를 객체안에 빈도수 카운팅
    for (let val of str1) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
    }

    // str2를 객체안에 빈도수 카운팅하고, 감소시키는 방식
    for (let val of str2) {
        if (!frequencyCounter[val]) { //해당 문자가 없거나 카운트가 0이면 false반환
            return false;
        }
        frequencyCounter[val] -= 1;
    }

    // 모두 통과시 true를 반환
    return true;
}

console.log(validAnagram('abbbc', 'acbbb'))