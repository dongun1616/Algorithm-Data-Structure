// 1~n 까지의 합 
// Add 1
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// Add 2
function addUpTo2(n) {
    return n * (n + 1) / 2
}

// All Pairs
function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

console.log(printAllPairs(10))

// 시간 재보는 방식
// var time1 = performance.now();
// addUpTo2(1000000000);
// var time2 = performance.now();
// console.log(`time Elapsed: ${(time2 - time1) / 1000} second.`)
