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
}
let g = new WeightedGraph();
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addEdge("A", "B", 9)
g.addEdge("A", "C", 5)
console.log(g.addEdge("B", "C", 7))