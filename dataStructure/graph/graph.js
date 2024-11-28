//그래프 클래스 
class Graph {
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
    //그래프 간선을 추가하는 메소드
    addEdge(vertex1, vertex2) {
        //인자의 정점이 없으면 undefined 반환
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return undefined;
        }
        //정점1, 정점2를 간선으로 연결
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
        return this
    }
    //그래프 간선을 제거하는 메소드
    removeEdge(vertex1, vertex2) {
        //인자의 정점이 없으면 undefined 반환
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return undefined;
        }
        //정점1과 정점2를 연결한 간선을 제거
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        )
        //정점2와 정점1를 연결한 간선을 제거
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        )
        return this
    }
    //그래프 정점을 제거하는 메소드
    removeVertex(vertex) {
        //인자의 정점이 없으면 undefined 반환
        if (!this.adjacencyList[vertex]) return undefined;
        //그래프 순회
        while (this.adjacencyList[vertex].length) {
            //정점과 연결된 간선 제거
            const adjacentVerex = this.adjacencyList[vertex].pop();
            //해당 정점에 연결된 간선들을 제거
            this.removeEdge(vertex, adjacentVerex);
        }
        //정점 삭제
        delete this.adjacencyList[vertex];
        return this
    }
}
let g = new Graph();
g.addVertex('Tokyo')
g.addVertex('Seoul')
g.addVertex('NewYork')
g.addVertex('Busan')
g.addEdge('Tokyo', 'Seoul')
g.addEdge('Tokyo', 'NewYork')
g.addEdge('Busan', 'NewYork')
console.log(g)
console.log(g.removeVertex('NewYork'))
