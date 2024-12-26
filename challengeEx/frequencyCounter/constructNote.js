//주어진 문자로 메시지를 만들 수 있으면 true 그렇지 않으면 false를 반환하는 메소드
function constructNote(msg, ltr) { //시간복잡도 O(n)
    // 카운팅할 객체를 선언
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // msg를 객체안에 빈도수 카운팅
    for (let val of msg) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    // ltr를 객체안에 빈도수 카운팅
    for (let val of ltr) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    // msg의 각 값이 ltr에 포함되어 있는지 확인
    for (let key in frequencyCounter1) {
        // msg의 각 값이 ltr에 포함되어 있는지 확인 없다면 false 반환
        if (!frequencyCounter2[key]) {
            return false;
        }
        // 각 값의 빈도가 ltr가 msg 보다 적으면 false 반환
        if (frequencyCounter2[key] < frequencyCounter1[key]) {
            return false;
        }
    }
    // 모두 통과시 true를 반환
    return true;
}

console.log(constructNote('aabbcc', 'bcabcaddff'))