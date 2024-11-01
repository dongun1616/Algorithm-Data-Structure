//문자열을 받아들이고 그 문자열의 역순인 문자열을 반환하는 함수
//재귀
function reverse(str) {
    let end = str.length - 1
    //종료조건 str의 길이가 0인경우 
    if (str.length < 2) return str;
    //재귀방식 str끝 + reverse(끝을 자른 문자열)을 반환
    return str[end] + reverse(str.slice(0, -1));
}

console.log(reverse('awesome'));