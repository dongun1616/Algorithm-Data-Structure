//전달된 인자(정수, 문자열) 중 중복이 있는지 확인하는 함수
// 빈도수 세기 
function areThereDuplicates1(...args) { //시간 복잡도 O(n)
    // 빈도수세기를 위한 객체 선언
    let frequencyCounter = {}
    // 인수를 객체안에 카운팅
    for (let val of args) {
        // 이미 있는 인자라면 중복된 것이므로 true를 반환
        if (frequencyCounter[val]) {
            return true
        }
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
    }
    return false;
}

// 다중포인터
function areThereDuplicates2(...args) { //시간 복잡도O(n log n), 공간복잡도 O(n)
    // 인자를 오름차순으로 정렬
    args.sort((a, b) => a - b);
    // 시작과 다음 포인터 선언
    let start = 0;
    let next = 1;
    //next 포인터가 배열의 끝에 도달했을때 까지 반복
    while (next < args.length) {
        // 두 포인터의 값들이 같아지면 트루를 반환
        if (args[start] === args[next]) {
            return true
        }
        start++;
        next++;
    }
    return false
}

// set을 활용한 중복확인
function areThereDuplicates3(...args) { //시간복잡도 O(n)
    // Set을 사용하여 중복 확인
    return new Set(args).size !== args.length;
}


console.log(areThereDuplicates1(1, 2, 3, 4, 5, 5, 6, 7))
console.log(areThereDuplicates2('1', '2', '3', '2'))
console.log(areThereDuplicates3('1', '2', '3', '2'))