//선택 정렬
function selectionSort(arr, comparator) { //시간복잡도 O(n^2)
    //기본 비교기
    if (typeof comparator !== 'function') {
        comparator = (a, b) => a - b;
    }
    //최솟값과 비교하는 루프
    for (let i = 0; i < arr.length; i++) {
        //최솟값 인덱스 저장할 변수
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            //비교한 값중에 최솟값을 변수에 저장
            if (comparator(arr[j], arr[min]) < 0) {
                min = j;
            }
        }
        //최솟값이 맨앞값과 다르면 최종 최솟값을 맨앞 값과 스왑
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp
        }
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

selectionSort(moarKittyData, oldestToYoungest); 