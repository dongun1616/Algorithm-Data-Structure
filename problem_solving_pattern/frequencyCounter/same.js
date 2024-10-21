function same1(arr1, arr2) {  //시간복잡도 O(n^2)
    // 배열 길이가 맞지 않는경우 false를 반환
    if (arr1.length !== arr2.length) {
        return false
    }
    // 배열값들을 제곱했을때 다음 배열에 값들이 같은지 확인하는 루프
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}

// 빈도수 방식으로 리팩토링
function same2(arr1, arr2) {  //시간복잡도 O(n)
    // 배열 길이가 다르면 false 반환
    if (arr1.length !== arr2.length) {
        return false;
    }
    // 각 배열의 값들을 카운팅할 객체 생성
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // arr1의 각 요소를 카운팅 (원래 배열의 값)
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    // arr2의 각 요소를 카운팅 (제곱 값들이 들어가는 배열)
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    // arr1의 각 값에 대해 제곱한 값이 arr2에 같은 빈도로 있는지 확인
    for (let key in frequencyCounter1) {
        // key의 제곱값이 frequencyCounter2에 없다면 false 반환
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }

        // 각 값의 빈도가 동일하지 않다면 false 반환
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {

            return false;
        }
    }

    // 모든 조건을 만족하면 true 반환
    return true;
}

console.log(same1([1, 2, 3], [9, 1, 4]))
console.log(same2([1, 2, 5], [25, 1, 4]))