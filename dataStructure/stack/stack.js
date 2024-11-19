//스택 단일 연결 리스트로 구현

//노드 클래스
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//스택 클래스
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //단일 연결 리스트에 unshift와 똑같은 메소드
    //리스트 앞에서 추가
    push(val) {
        //값 추가
        let newNode = new Node(val)
        //리스트에 첫 추가시 first와 last 선언
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            //새롭게 생성된 노드의 next를 현재 first로 설정
            newNode.next = this.first;
            this.first = newNode;
        }
        //크기 증가
        return ++this.size;
    }
    //단일 연결 리스트에 shift와 똑같은 메소드
    //리스트 앞에서 삭제
    pop() {
        //리스트가 비어있으면 null반환
        if (!this.first) return null;
        //first를 임시변수에 선언
        let current = this.first;
        //스택에 마지막 것만 남아있으면 last를 null로 선언
        if (this.first === this.last) {
            this.last = null;
        }
        //first를 지금 first에 다음으로 선언
        this.first = this.first.next
        //크기를 감소
        this.size--;
        return current.val;
    }
}

let stack = new Stack();
console.log(stack.push("one"))
console.log(stack.push("two"))
console.log(stack.pop())
console.log(stack)