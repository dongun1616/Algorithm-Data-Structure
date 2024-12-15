//숫자를 자릿수별로 비교하여 정렬하는 방식으로, 개별 자릿수들을 기준으로 정렬을 반복하여 정렬하는 함수
//자릿수 값 알아내는 함수
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//숫자의 자릿수를 구하는 함수
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

//지수 정렬
function radixSort(nums) {
    //배열의 최대 자릿수
    let max = mostDigits(nums);
    //최대 자릿수 만큼 반복하는 루프
    for (let k = 0; k < max; k++) {
        //각 자릿수에 버킷을 만든다.(0~9)
        let buckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k) //해당 자릿수의 값을 얻음
            buckets[digit].push(nums[i])

        }
        //버킷에 넣은 순서대로 배열을 재구성한다.
        nums = [].concat(...buckets)
    }
    return nums;
}

console.log(radixSort([7323, 12, 23, 345, 11223, 5566]))