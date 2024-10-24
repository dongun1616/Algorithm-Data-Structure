//첫 번째 문자열이 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 함수
// 다중포인터 고유값
function isSubsequence(str1, str2) { //시간복잡도 O(n)
    //두 번째 문자열의 길이가 첫번째 문자열보다 짧은경우 false를 반환
    if (str1.length > str2.length) return false;
    //문자열1과 문자열2 포인터 선언
    let first1 = 0;
    //str1의 첫번째 문자열 포인터를 str2에 있는지 비교하는 루프
    for (let first2 = 0; first2 < str2.length; first2++) {
        //str1의 첫번째와 맞는지 반복
        if (str1[first1] === str2[first2]) {
            first1++;  // 첫번째 포인터 증가
        }
        // first1포인터가 첫번째 문자열 끝에 도달했으면 true를 반환
        if (first1 === str1.length) {
            return true
        }
    }
    // 루프가 끝나도 모든 문자가 일치하지 않으면 false 반환
    return false;
}

console.log(isSubsequence('sing', 'sting'));