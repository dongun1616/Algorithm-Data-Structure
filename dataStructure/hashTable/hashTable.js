//해시 테이블 클래스
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    //해시 함수
    _hash(key) {
        let total = 0;
        //소수를 이용
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            //value 는 "a" -> 1 이런식으로 추출
            let value = char.charCodeAt(0) - 96
            //배열 길이를 나눠 배열안에 포함하도록 연산
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    //개별 체이닝으로 데이터를 추가하는 메소드
    set(key, value) {
        let index = this._hash(key);
        //해당 인덱스에 값이 없으면 빈배열 추가
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        //새 항목 배열에 추가
        this.keyMap[index].push([key, value]);
        return this;
    }
    //개별 체이닝으로 데이터를 반환하는 메소드
    get(key) {
        let index = this._hash(key);
        //해당 인덱스에 값이 있으면 
        if (this.keyMap[index]) {
            //해당 인덱스 배열에 값을 찾는 루프
            for (let i = 0; i < this.keyMap[index].length; i++) {
                //해당 해시테이블 인덱스 배열의 값 반환
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        //없으면 undefined 반환
        return undefined;
    }
    //값 저장소
    values() {
        let valuesArr = [];
        //해시 테이블 순회하며 값을 저장
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    //고유한 값이 존재하지 않으면 배열에 추가
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1])
                    }

                }
            }
        }
        return valuesArr;
    }
    //키 저장소
    keys() {
        let keysArr = [];
        //해시 테이블 순회하며 값을 저장
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    //고유한 값이 존재하지 않으면 배열에 추가
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0])
                    }

                }
            }
        }
        return keysArr;
    }
}

let ht = new HashTable();
ht.set("maroon", "#800000")
ht.set("yellow", "#FFFF00")
ht.set("orange", "#808000")
ht.set("olive", "#808800")
ht.set("salmon", "#FA8072")
ht.set("coral", "#F08080")
ht.set("plum", "#800000")
console.log(ht.values())
console.log(ht.keys())
