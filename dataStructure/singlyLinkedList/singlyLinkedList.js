//단일 연결 리스트 메소드

//노드 클래스 예시
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
//단일 연결 리스트 예시
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //push 뒤에서 추가 메소드
    push(val) {
        //값 추가
        let newNode = new Node(val)
        //리스트에 첫 추가시 헤드와 태일 선언
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            //tail의 next를 추가하는 노드로 선언
            this.tail.next = newNode;
            //tail을 추가하는 노드로 선언
            this.tail = newNode;
        }
        //길이 증가
        this.length++;
        return this;
    }
    //pop 뒤에서 제거 메소드
    pop() {
        //리스트가 비어있으면 undefined반환
        if (!this.head) return undefined;
        //리스트에 값이 있으면 헤드부터 태일까지 순회
        let current = this.head;
        let newTail = current;
        while (current.next) {
            //순회하는 동안 바로 전값과 순회중인 값 변수 생성
            newTail = current;
            current = current.next;
        }
        //전값의 next를 null로 설정하고, 전 값을 tail로 설정
        this.tail = newTail;
        this.tail.next = null;
        //길이를 감소
        this.length--;
        //길이가 0인경우 노드 모두 삭제
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        //제거한 노드 반환
        return current;
    }
    //shift 앞에서 제거 메소드
    shift() {
        //리스트가 비어있으면 undefined반환
        if (!this.head) return undefined;
        //헤드를 임시변수에 선언
        let current = this.head;
        //리스트의 헤드를 임시변수의 다음으로 선언
        this.head = current.next
        //길이를 감소
        this.length--;
        //길이가 0인경우 노드 모두삭제
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }
    //unshift 앞에서 추가 메소드
    unshift(val) {
        //값 추가
        let newNode = new Node(val)
        //리스트에 첫 추가시 헤드와 태일 선언
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            //새롭게 생성된 노드의 next를 현재 헤드로 설정
            newNode.next = this.head;
            this.head = newNode;
        }
        //길이 증가
        this.length++;
        return this;
    }
    //get 위치를 인자로 받아 노드를 반환하는 메소드
    get(index) {
        //index가 음수이거나 길이가 해당 인덱스보다 작거나 같으면 null반환
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        //리스트 순회
        let current = this.head;
        //카운터와 인덱스가 같지 않는 경우 순회
        while (counter !== index) {
            current = current.next;
            //카운트 증가
            counter++;
        }
        return current;
    }
    //set 위치와 값을 인자로 받아 해당 위치에 값을 수정하는 메소드
    set(index, val) {
        //찾는 노드의 위치를 get메소드로 선언
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
}

let list = new SinglyLinkedList();
list.unshift("third")
list.unshift("second")
list.unshift("first")
console.log(list)
console.log(list.set(2, "three"));
console.log(list.get(2))