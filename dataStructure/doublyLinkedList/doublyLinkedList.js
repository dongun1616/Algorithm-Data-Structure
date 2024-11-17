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
    //get 인덱스를 인자로 받아 노드를 반환하는 메소드
    get(index) {
        //index가 음수이거나 리스트의 길이보다 크거나 같으면 null반환
        if (index < 0 || index >= this.length) return null;
        //인덱스가 리스트의 길이의 중간지점보다 작으면 헤드부터
        if (index <= this.length / 2) {
            let headCounter = 0;
            //리스트 순회
            let current = this.head;
            //카운터와 인덱스가 같지 않는 경우 순회
            while (headCounter !== index) {
                current = current.next;
                //카운트 증가
                headCounter++;
            }
            return current;
        }
        //인덱스가 리스트의 길이의 중간지점보다 크면 태일부터
        else {
            let tailCounter = this.length - 1;
            //리스트 순회
            let current = this.tail;
            //카운터와 인덱스가 같지 않는 경우 순회
            while (tailCounter !== index) {
                current = current.prev;
                //카운트 증가
                tailCounter--;
            }
            return current;
        }
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
        let prevNode = this.get(index - 1)
        let nextNode = prevNode.next
        //앞에 노드와 연결
        prevNode.next = newNode;
        newNode.prev = prevNode;
        //뒤에 노드와 연결
        newNode.next = nextNode;
        nextNode.prev = newNode;
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
        //제거할 노드 변수 선언
        let removedNode = this.get(index)
        //제거할 노드의 앞 뒤 노드 변수 선언
        let prevNode = removedNode.prev;
        let nextNode = removedNode.next
        //제거할 노드 앞뒤 노드들을 연결
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        //삭제할 노드 앞뒤를 null로 선언
        removedNode.next = null;
        removedNode.prev = null;
        //길이 감소
        this.length--;
        //삭제한 노드 반환
        return removedNode;
    }
}

let list = new DoublyLinkedList();
list.push("one")
list.push("two")
list.push("lolol")
list.push("three")
console.log(list.remove(2));
console.log(list.get(2));