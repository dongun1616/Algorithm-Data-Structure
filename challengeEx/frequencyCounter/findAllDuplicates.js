// 주어진 배열에서 두 번 이상 반복되는 수를 반환하는 메소드
function findAllDuplicates(arr) { //시간복잡도 O(n)
    // 카운팅할 객체를 선언
    let frequencyCounter = {}
    //결과를 반환할 배열 선언
    let result = [];
    // arr를 객체안에 빈도수 카운팅
    for (let val of arr) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
    }

    // arr의 빈도수 값을 순회
    for (let key in frequencyCounter) {
        // arr 빈도수가 2이상이면 결과 배열에 추가
        if (frequencyCounter[key] > 1) {
            result.push(Number(key));
        }
    }
    // 모두 통과시 true를 반환
    return result;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))