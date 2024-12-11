//버블 정렬
function bubbleSort(arr, comparator) { //시간복잡도 O(n^2)
    //기본 비교기
    if (typeof comparator !== 'function') {
        comparator = (a, b) => a - b;
    }
    // 스왑을 했는지 확인하는 변수
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                //스왑
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false
            }
        }
        if (noSwaps) break; //스왑을 안했을경우 루프탈출
    }
    return arr;
}

let kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
    if (a < b) { return -1; }
    else if (a > b) { return 1; }
    return 0;
}
let moarKittyData = [{
    name: "LilBub",
    age: 7
}, {
    name: "Garfield",
    age: 40
}, {
    name: "Heathcliff",
    age: 45
}, {
    name: "Blue",
    age: 1
}, {
    name: "Grumpy",
    age: 6
}];

function oldestToYoungest(a, b) {
    return b.age - a.age;
}


console.log(bubbleSort(moarKittyData, oldestToYoungest))