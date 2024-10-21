// 다중 포인터 패턴의 함수
function sumZero1(arr) {  //시간복잡도 O(n^2)
    for (let val1 of arr) {
        for (let val2 of arr) {
            if (val1 + val2 === 0) {
                return [val1, val2];
            }
        }
    }
}

// 다중 포인터 패턴 리팩토링 함수
function sumZero2(arr) {  //시간복잡도 O(n)
    // 배열 시작과 끝 포인트 선언
    let left = 0;
    let right = arr.length - 1;
    // 포인터가 교차하지 않을 때까지 반복
    while (left < right) {
        let sum = arr[left] + arr[right]; //두 포인터의 합
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--; //합이 양수면 오른쪽 포인터를 왼쪽으로 이동
        } else {
            left++; //합이 음수면 왼쪽 포인터를 오른쪽으로 이동
        }
    }
}

console.log(sumZero1([-4, -2, -1, 0, 1, 2, 6]))
console.log(sumZero2([-4, -2, -1, 0, 1, 2, 6]))