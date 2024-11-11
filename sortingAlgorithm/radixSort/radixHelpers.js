//지수 정렬 헬프 메소드들

//자릿수 값 알아내는 함수
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//자릿수 카운트하는 함수
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

//배열 목록에서 최대 자릿수를 알아내는 함수
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits
}

console.log(getDigit(7323, 2));
console.log(digitCount(7323))
console.log(mostDigits([7323, 2, 23, 16, 11223]))