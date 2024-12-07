//단일 연결 리스트 메소드

//노드 클래스
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
//단일 연결 리스트
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
            this.tail = newNode;
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
    //get 인덱스를 인자로 받아 노드를 반환하는 메소드
    get(index) {
        //index가 음수이거나 리스트의 길이보다 크거나 같으면 null반환
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
    //set 인덱스와 값을 인자로 받아 해당 인덱스에 값을 수정하는 메소드
    set(index, val) {
        //찾는 노드의 위치를 get메소드로 선언
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    //insert 인덱스와 값을 인자로 받아 해당 인덱스에 값을 추가하고 앞뒤를 연결하는 메소드
    insert(index, val) {
        //index가 음수이거나 리스트의 길이보다 크면 false를 반환
        if (index < 0 || index > this.length) return false
        //index가 리스트의 길이와 같으면 push를 호출
        if (index === this.length) return !!this.push(val) //!!는 값이 존재하면 true를 반환
        //index가 0이면 unshift를 호출
        if (index === 0) return !!this.unshift(val)
        //노드를 생성
        let newNode = new Node(val)
        //리스트 중간에 추가하려면 get을 index-1로 호출
        let prev = this.get(index - 1)
        //노드를 임시 저장할 변수선언후 앞뒤에 연결
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        //길이 증가
        this.length++;
        return true
    }
    //remove 인덱스를 인자로 받아 해당 인덱스에 노드를 삭제하고 앞뒤를 연결하는 메소드
    remove(index) {
        //index가 0보다 작거나 길이보다 크거나 같으면 undefined 반환
        if (index < 0 || index >= this.length) return undefined;
        //index가 길이-1과 같으면 pop 호출
        if (index === this.length - 1) return this.pop()
        //index가 0이면 shift 호출
        if (index === 0) return this.shift();
        //중간 노드를 제거하려면 제거할 노드의 전 노드의 변수선언
        let prev = this.get(index - 1);
        //제거할 변수 선언
        let removed = prev.next;
        //제거할 이전 노드에 제거할 다음 노드 연결
        prev.next = removed.next;
        //길이 감소
        this.length--;
        //삭제한 노드 반환
        return removed;
    }
    //reverse 단일 연결 리스트를 역방향으로 바꾸는 메소드
    reverse() {
        //head와 tail 스왑
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        //next값과 prev값을 담아둘 변수 생성
        let next;
        let prev = null;
        //리스트 순회하며 스왑
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    //rotate 모든 노드를 주어진 숫자만큼 회전시키는 메소드
    rotate(n) {
        // 유효한 회전 값 계산 (음수 및 길이 초과 처리)
        const effectiveRotations = ((n % this.length) + this.length) % this.length;

        // 회전이 필요 없는 경우 바로 반환
        if (effectiveRotations === 0 || this.length < 2) return this;

        // 기존 tail을 현재 head로 연결해 리스트를 원형으로 만듦
        this.tail.next = this.head;

        // 새로운 tail을 찾기 위해 이동할 횟수 계산
        const newTailPosition = this.length - effectiveRotations;
        let newTail = this.head;

        // 새로운 tail로 이동
        for (let i = 1; i < newTailPosition; i++) {
            newTail = newTail.next;
        }

        // 새로운 head 설정
        this.head = newTail.next;

        // 새로운 tail의 연결을 끊어 리스트를 다시 선형으로 만듦
        this.tail = newTail;
        this.tail.next = null;

        return this;
    }
}
let list = new SinglyLinkedList();
list.push("1")
list.push("2")
list.push("3")
list.push("4")
console.log(list.rotate(2))