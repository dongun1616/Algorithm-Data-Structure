// 문자열을 문자열의 각 문자의 개수를 반환하는 함수를 작성해라
// ex) charCount("aaaa") -> {a:4}

function charCount(str) { // 초기버전
    //반환할 객체 생성
    var result = {};
    //문자열들을 루프에 적용 각 숫자/문자에 대한 문자열
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        //만약 문자/숫자가 객체에 있다면, 즉, 키로써 객체에 있다면, 숫자를 +1해준다
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            }
            //만약 문자/숫자가 객체에 없다면 추가하고 값을 1로 설정한다.
            else {
                result[char] = 1;
            }
        }
    }
    //만약 문자가 공백, 마침표 등과 같은 다른것이라면 아무것도 하지 않는다.
    //객체로 반환
    return result;
}

function charCount2(str) {  //리팩토링 버전
    //반환할 객체 생성
    var result = {};
    //문자열들을 루프에 적용 각 숫자/문자에 대한 문자열
    for (var char of str) {
        char = char.toLowerCase();
        //만약 문자/숫자가 객체에 있다면, 즉, 키로써 객체에 있다면, 숫자를 +1해준다
        if (/[a-z0-9]/.test(char)) {
            result[char] = ++result[char] || 1;
        }
    }
    //만약 문자가 공백, 마침표 등과 같은 다른것이라면 아무것도 하지 않는다.
    //객체로 반환
    return result;
}

console.log(charCount2("Hi Hello"))