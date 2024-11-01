//전달된 문자열이 팔린드롬인 경우 true 를 반환하는 재귀함수
// 재귀
function isPalindrome(str) {
    //끝 포인터 선언
    let end = str.length - 1
    //종료조건 str 길이가 1보다 작은경우 true
    if (str.length < 2) return true;
    //재귀조건 str 시작인덱스와 str 끝인덱스가 같으면 앞뒤를 자르고 반환
    if (str[0] === str[end]) {
        return isPalindrome(str.slice(1, -1))
    }
    //다르면 false반환
    else {
        return false;
    }
}

console.log(isPalindrome('tacocat'));