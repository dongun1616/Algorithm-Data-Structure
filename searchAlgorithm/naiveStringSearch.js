//긴 문자열과 특정 문자열을 받고, 특정 문자열이 몇번 들어있는지 확인하는 함수
//나이브 문자열 검색
function naiveStringSearch(str1, str2) {
    //패턴세는 count 선언
    let count = 0;
    //str1을 반복하는 루프
    for (let i = 0; i < str1.length; i++) {
        //str2를 반복하는 루프
        for (let j = 0; j < str2.length; j++) {
            //만약 str2글자와 str1글자가 일치하지 않으면 루프에서 탈출
            if (str2[j] !== str1[i + j]) break; //같은 패턴의 문자열인지 비교
            //만약 str2에 끝인덱스에 도달시 count증가
            else if (j === str2.length - 1) count++;
        }
    }
    // count 반환
    return count;
}

console.log(naiveStringSearch('lorie lol', 'lo'));