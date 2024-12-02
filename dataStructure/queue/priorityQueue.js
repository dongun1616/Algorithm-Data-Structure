//우선순위 큐 클래스
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    //큐에 노드와 우선순위를 추가하는 메소드
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
        return this;
    }
    //큐안에 노드를 삭제하는 메소드
    dequeue() {
        return this.values.shift();
    }
    //우선순위 순으로 큐를 정렬하는 메소드
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

let q = new PriorityQueue();
q.enqueue("B", 3)
q.enqueue("C", 5)
q.enqueue("D", 2)
console.log(q.enqueue("Q", 20))
console.log(q.dequeue())