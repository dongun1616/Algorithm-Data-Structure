//해시 함수 예제(구버전)
function hash1(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        //value 는 "a" -> 1 이런식으로 추출
        let value = char.charCodeAt(0) - 96
        //배열 길이를 나눠 배열안에 포함하도록 연산
        total = (total + value) % arrayLen
    }
    return total;
}

//해시 함수 예제(개선 버전)
function hash2(key, arrayLen) {
    let total = 0;
    //소수를 이용
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        //value 는 "a" -> 1 이런식으로 추출
        let value = char.charCodeAt(0) - 96
        //배열 길이를 나눠 배열안에 포함하도록 연산
        total = (total * WEIRD_PRIME + value) % arrayLen
    }
    return total;
}

console.log(hash2('pink', 13));
console.log(hash2('blue', 13));
console.log(hash2('purple', 13));