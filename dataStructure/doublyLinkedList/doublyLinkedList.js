//이중 연결 리스트 메소드

//노드 클래스
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
//이중 연결 리스트
class DoublyLinkedList {
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
            this.tail = newNode;
        }
        else {
            //tail의 next를 추가하는 노드로 선언
            this.tail.next = newNode;
            //추가한 노드의 이전 포인터 설정
            newNode.prev = this.tail
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
        //삭제할 노드 선언
        let poppedNode = this.tail;
        //길이가 1이면 헤드와 태일 삭제
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        //길이가 1이 아닌경우
        else {
            //태일을 삭제할 노드 이전으로 설정
            this.tail = poppedNode.prev;
            //태일의 다음 연결을 삭제
            this.tail.next = null;
            //삭제한 노드의 이전 연결을 삭제
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    //shift 앞에서 제거 메소드
    shift() {
        //리스트가 비어있으면 undefined반환
        if (!this.head) return undefined;
        //헤드를 임시변수에 선언
        let oldHead = this.head;
        //길이가 1이면 헤드와 태일 삭제
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        //아닌경우
        else {
            //헤드를 삭제할 다음 노드로 설정
            this.head = oldHead.next;
            //헤드의 이전노드를 null로 설정
            this.head.prev = null;
            //삭제한 노드의 다음 연결을 삭제
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
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
            //헤드의 이전 노드가 생성 노드로 설정
            this.head.prev = newNode
            //새롭게 생성된 노드의 next를 현재 헤드로 설정
            newNode.next = this.head;
            //헤드를 생성한 값으로 설정
            this.head = newNode;
        }
        //길이 증가
        this.length++;
        return this;
    }
}

let list = new DoublyLinkedList();
list.push("second")
list.push("third")
console.log(list.unshift('first'));
console.log(list);