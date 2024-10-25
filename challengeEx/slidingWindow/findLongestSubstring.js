//문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환하는 함수
//슬라이딩 윈도우
function findLongestSubstring(str) { //시간복잡도 O(n)
    //시작 포인터 선언
    let start = 0;
    //문자열 최대 길이 초기화
    let maxLen = 0;
    //문자 카운팅할 객체 선언
    let charIndex = {};

    //문자열을 순회
    for (let end = 0; end < str.length; end++) {
        //현재 문자 복사
        let char = str[end]

        //중복인 문자열이 있는경우
        if (charIndex[char] !== undefined) {
            //중복 문자 발견시 시작 포인터를 조정
            start = Math.max(start, charIndex[char] + 1); //중복문자가 발생한 다음인덱스로
        }
        //현재 문자의 인덱스 저장
        charIndex[char] = end;
        // 최대 길이 비교
        maxLen = Math.max(maxLen, end - start + 1);
    }
    // 배열 최대길이 반환
    return maxLen;
}

console.log(findLongestSubstring('rithmschool'))