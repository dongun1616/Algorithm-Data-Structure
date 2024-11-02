//중첩된(nested) 객체를 포함할 수 있는 객체에서 모든 짝수의 합계를 반환하는 함수
// 재귀
function nestedEvenSum(obj) {
    let sum = 0;
    //obj 객체를 순회
    for (let key in obj) {
        // 숫자이고 짝수일 경우 sum에 더함
        if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key];
        }
        // 객체일 경우 재귀 호출
        else if (typeof obj[key] === 'object' && obj[key] !== null) {
            sum += nestedEvenSum(obj[key]);
        }
    }
    return sum;
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj2));