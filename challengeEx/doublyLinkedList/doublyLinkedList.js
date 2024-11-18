//이중 연결 리스트 예제
class Node {
    constructor(val) {
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //리스트 끝에 노드를 추가하는 메소드
    push(val) {
        //새로운 노드 생성
        let newNode = new Node(val);
        //처음 노드를 추가하면 생성한 노드를 헤드와 태일로 설정
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        //아니라면 태일을 설정하고 앞뒤 연결
        else {
            //태일의 다음을 새로운 노드로 설정
            this.tail.next = newNode;
            //새로운 노드의 이전을 현재 태일로 설정
            newNode.prev = this.tail;
            //리스트의 태일을 새로운 노드로 설정
            this.tail = newNode;
        }
        //길이 증가
        this.length++;
        //리스트 반환
        return this;
    }
    //리스트의 앞에 노드를 추가하는 메소드
    unshift(val) {
        //새로운 노드 생성
        let newNode = new Node(val);
        //처음 노드를 추가하면 생성한 노드를 헤드와 태일로 설정
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        //아니라면 헤드를 설정하고 앞뒤 연결
        else {
            //헤드의 이전을 새로운 노드로 설정
            this.head.prev = newNode;
            //새로운 노드의 다음을 현재 헤드로 설정
            newNode.next = this.head;
            //헤드를 새로운 노드로 설정
            this.head = newNode;
        }
        //길이 증가
        this.length++;
        //리스트 반환
        return this;
    }
    //리스트의 앞을 제거하는 메소드
    shift() {
        //리스트가 비어있으면 undefined 반환
        if (this.length === 0) return undefined;
        //제거할 노드 변수 선언
        let removedNode = this.head;
        //리스트의 길이가 1이면 헤드와 태일 null설정
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        //아니라면 제거할 노드의 앞뒤 연결을 끊고 헤드 설정
        else {
            //헤드를 삭제할 다음 노드로 설정
            this.head = removedNode.next;
            //헤드의 이전을 null로 설정
            this.head.prev = null;
            //삭제한 노드의 다음 연결을 삭제
            removedNode.next = null;
        }
        //길이 감소
        this.length--;
        //제거한 노드 변수 반환
        return removedNode;
    }
    //리스트의 뒤를 제거하는 메소드
    pop() {
        //길이가 0이면 undefined 반환
        if (this.length === 0) return undefined;
        //삭제할 노드 변수 선언
        let removedNode = this.tail;
        //길이가 1이면 헤드와 태일을 null로 설정
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        //아니라면 태일을 설정후 앞뒤 연결 끊기
        else {
            //태일을 삭제할 노드 이전으로 설정
            this.tail = removedNode.prev;
            //태일의 다음은 null로 설정
            this.tail.next = null;
            //삭제할 노드의 이전은 null
            removedNode.prev = null;
        }
        //길이 감소
        this.length--;
        //삭제한 노드 반환
        return removedNode;
    }
    //리스트의 인덱스를 받아 해당 위치의 노드를 반환하는 메소드
    get(index) {
        //인덱스가 음수이거나 길이보다 크거나 같으면 null반환
        if (index < 0 || index >= this.length) return null;
        //리스트의 중간지점 선언
        let middle = this.length / 2;
        //인덱스가 중간지점보다 작거나 같으면 헤드부터 순회
        if (index <= middle) {
            //리스트 순회 변수 선언
            let current = this.head;
            //카운터 선언
            let headCounter = 0;
            //인덱스와 카운터 값이 같지 않으면 반복
            while (index !== headCounter) {
                //리스트 순회
                current = current.next;
                //카운터 증가
                headCounter++;
            }
            return current;
        }
        //아니라면 태일부터 순회
        else {
            //리스트 순회 변수 선언
            let current = this.tail;
            //카운터 선언
            let tailCounter = this.length - 1;
            //인덱스와 카운터 값이 같지 않으면 반복
            while (index !== tailCounter) {
                //리스트 순회
                current = current.prev;
                //카운터 감소
                tailCounter--;
            }
            return current;
        }
    }
    //리스트의 인덱스와 값을 받아 해당 위치에 노드를 수정하는 메소드
    set(index, val) {
        //찾는 노드의 위치를 get을 호출해 선언
        let foundNode = this.get(index);
        //인덱스가 해당 리스트에 있으면 수정
        if (foundNode) {
            foundNode.val = val;
            return true
        }
        return false
    }
    //인덱스와 값을 인자로 받아 해당 인덱스에 값을 추가하고 앞뒤를 연결하는 메소드
    insert(index, val) {
        //인덱스가 음수거나 길이보다 큰경우 false 반환
        if (index < 0 || index > this.length) return false;
        //인덱스가 0인경우 unshift 호출
        if (index === 0) return !!this.unshift(val)
        //인덱스가 길이랑 같은 경우 push 호출
        if (index === this.length) return !!this.push(val)
        //아닌경우 해당 위치에 추가후 앞뒤 연결
        else {
            //노드 생성
            let newNode = new Node(val);
            //새 노드의 다음과 이전 노드 변수 선언
            let prevNode = this.get(index - 1);
            let nextNode = prevNode.next
            //앞에 노드와 연결
            prevNode.next = newNode;
            newNode.prev = prevNode;
            //뒤에 노드와 연결
            nextNode.prev = newNode;
            newNode.next = nextNode;
        }
        //길이 증가
        this.length++;
        //결과 반환
        return true;
    }
    //인덱스를 인자로 받아 해당 인덱스에 노드를 삭제하고 앞뒤를 연결하는 메소드
    remove(index) {
        //인덱스가 음수거나 길이보다 크거나 같으면 undefined 반환
        if (index < 0 || index >= this.length) return undefined;
        //인덱스가 0이면 shift 호출
        if (index === 0) return this.shift();
        //인덱스가 길이와 같으면 pop 호출
        if (index === this.length) return this.pop();

        //삭제할 노드 변수 선언
        let removedNode = this.get(index);
        //삭제할 노드 앞뒤 변수 선언
        let prevNode = removedNode.prev;
        let nextNode = removedNode.next;
        //제거할 노드 앞뒤 노드들을 연결
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        //삭제할 노드의 앞뒤 제거
        removedNode.prev = null;
        removedNode.next = null;

        //길이 감소
        this.length--;
        //삭제할 노드 반환
        return removedNode;
    }
    //이중 연결 리스트를 역방향으로 바꾸는 메소드
    reverse() {
        if (!this.head || this.length <= 1) return this; // 빈 리스트나 하나의 노드일 경우

        let current = this.head;
        this.tail = current; // 기존 head가 새로운 tail이 됨
        let temp = null;

        // 모든 노드의 next와 prev를 스왑
        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev; // 이전(prev) 방향으로 이동
        }

        // 마지막으로 temp를 이용해 head를 갱신
        if (temp) {
            this.head = temp.prev; // temp는 null을 넘어서 있으므로 prev를 참조
        }

        return this; // 리스트 반환
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push("one")
doublyLinkedList.push("two")
doublyLinkedList.push("three")
console.log(doublyLinkedList.reverse());