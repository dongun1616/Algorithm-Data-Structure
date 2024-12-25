//두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 확인하는 함수
// 빈도수 세기 
function sameFrequency(num1, num2) { //시간복잡도 O(n)
    // 두 정수의 길이가 다른경우 false를 반환
    if (num1.length !== num2.length) return false;
    // 문자열로 변환
    num1 = num1.toString();
    num2 = num2.toString();
    // num1 객체에 카운팅 선언
    let frequencyCounter = {};
    for (let val of num1) {
        // 이미 있는 정수면 +1 없으면 0을 초기값으로 설정하고 +1
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
    }

    // 카운팅한 객체를 num2 에 비교
    for (let val of num2) {
        // 빈도수가 0이거나 존재하지 않는경우 false를 반환
        if (!frequencyCounter[val]) {
            return false;
        }
        frequencyCounter[val] -= 1 //빈도수를 감소시킴
    }
    // 다 통과하면 true를 반환
    return true;
}
console.log(sameFrequency(1237572, 1322775))