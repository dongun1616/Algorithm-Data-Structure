function factorial1(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total
}

function factorial2(num) {
    if (num === 1) return 1; //종료조건
    return num * factorial2(num - 1)
}

console.log(factorial1(3));
console.log(factorial2(4));