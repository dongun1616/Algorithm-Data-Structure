//가중치 그래프 클래스 
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    //그래프 정점을 추가하는 메소드
    addVertex(vertex) {
        //해당 값이 없으면 추가
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
        return this
    }
    //그래프에 간선과 가중치를 추가하는 메소드
    addEdge(vertex1, vertex2, weight) {
        //인자의 정점이 없으면 undefined 반환
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return undefined;
        }
        //정점1, 정점2를 간선으로 연결
        this.adjacencyList[vertex1].push({ node: vertex2, weight })
        this.adjacencyList[vertex2].push({ node: vertex1, weight })
        return this
    }
    //최단 경로를 반환하는 메소드
    Dijkstra(start, finish) {
        //새로운 우선순위 큐 추가
        const nodes = new PriorityQueue();
        //최단 경로(최소값)를 저장할 변수
        const distances = {};
        //최단 경로 이전 노드를 저장할 변수
        const previous = {};
        //최단 경로 변수
        let path = [];
        //최소값
        let smallest;

        //adjacencyList를 순회하며 초기 설정 및 우선순위 큐에 추가
        for (let vertex in this.adjacencyList) {
            //시작 정점이면 0으로 설정후 우선순위 큐에 추가
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            }
            //아니라면 무한대로 설정후 우선순위 큐에 추가
            else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            //previous값들을 null로 설정
            previous[vertex] = null;
        }

        //방문할 정점이 남아있으면 순회
        while (nodes.vals.length) {
            //우선순위 큐에서 최소값을 삭제해 최소값변수에 저장
            smallest = nodes.dequeue().val;
            //최소값이 마지막 노드와 같다면 최단 경로를 루프로 저장
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            //최소값의 인접점의 노드들이 남아있다면 루프
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    //인접점 노드 저장
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //인접점의 새로운 거리 계산
                    let candidate = distances[smallest] + nextNode.weight
                    //다음 인접점 변수
                    let nextNeighbor = nextNode.node
                    //새로 계산한 최단거리가 저장된 최단거리보다 작을경우 갱신
                    if (candidate < distances[nextNeighbor]) {
                        //최단거리 갱신
                        distances[nextNeighbor] = candidate;
                        //최단 이전 인접점 갱신
                        previous[nextNeighbor] = smallest;
                        //우선순위 큐에 새로운 우선순위를 부여
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }
        }
        //최단경로 반환
        return path.concat(smallest).reverse();
    }
}

//우선순위 큐 클래스
class PriorityQueue {
    constructor() {
        this.vals = [];
    }
    //노드를 추가하고 버블 업을 이용해 우선순위에 맞는 위치로 이동시키는 메소드
    enqueue(val, priority) {
        //새로운 노드 추가
        let newNode = new Node(val, priority)
        //해당 요소 배열에 추가
        this.vals.push(newNode);
        //위치를 찾는 버블업 메소드 호출
        this.bubbleUp();
        return this.vals
    }
    //버블 업
    bubbleUp() {
        //인덱스 선언
        let idx = this.vals.length - 1;
        //값 선언
        const element = this.vals[idx]
        //가장 큰 값과 비교할 때 까지 루프
        while (idx > 0) {
            //부모 인덱스와 값 선언
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.vals[parentIdx]
            //element의 우선순위가 부모의 우선순위 보다 크거나 같으면 break
            if (element.priority >= parent.priority) break;
            //추가하는 값이 부모 값보다 크면 스왑
            this.vals[parentIdx] = element;
            this.vals[idx] = parent;
            //비교할 인덱스도 스왑
            idx = parentIdx
        }
    }
    //큐에서 (우선순위)최솟값을 제거하고, 버블 다운으로 제조정하는 메소드
    dequeue() {
        //값이 없으면 null반환
        if (this.vals.length === 0) return null;
        //최솟값 저장
        const min = this.vals[0]
        //끝 값 저장
        const end = this.vals.pop();
        //끝 값을 뺀 이후에도 값이 있으면
        if (this.vals.length > 0) {
            //끝 값을 루트로 설정
            this.vals[0] = end;
            //위치 재조정하는 버블 다운 호출
            this.bubbleDown();
        }
        //삭제한 값 반환
        return min;
    }
    //버블 다운
    bubbleDown() {
        //인덱스 선언
        let idx = 0;
        const length = this.vals.length;
        const element = this.vals[0];
        //자식과 비교하는 루프
        while (true) {
            //자식 인덱스 선언
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            //자식 값 선언
            let leftChild, rightChild;
            //break 조건인 스왑 선언
            let swap = null

            //왼쪽 자식이 존재하면 자식 값 선언
            if (leftChildIdx < length) {
                leftChild = this.vals[leftChildIdx];
                if (leftChild.priority < element.priority) swap = leftChildIdx;
            }
            //오른쪽 자식이 존재하면 자식 값 선언
            if (rightChildIdx < length) {
                rightChild = this.vals[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            //swap이 null이면 break
            if (swap === null) break;
            //아니면 스왑
            this.vals[idx] = this.vals[swap];
            this.vals[swap] = element;
            //비교할 인덱스도 스왑
            idx = swap;
        }
    }
}

//노드 클래스
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

let graph = new WeightedGraph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1)

console.log(graph.Dijkstra("A", "E"))