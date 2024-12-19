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
    //깊이 우선 그래프(DFS) 순회 재귀 메소드
    DFSRecursive(start) {
        //그래프에 해당 정점이 없으면 빈 배열 반환
        if (!this.adjacencyList[start]) return [];
        //최종 결과 배열 선언
        const result = [];
        //방문한 정점을 저장할 객체 선언
        const visited = {};
        //그래프 변수로 선언(헬퍼함수에서 this 사용불가)
        const adjacencyList = this.adjacencyList;
        //헬퍼 함수
        (function dfs(vertex) {
            //해당 정점이 없으면 null반환
            if (!vertex) return null;
            //방문한 정점 true로 설정
            visited[vertex] = true;
            //방문한 정점 결과 배열에 추가
            result.push(vertex);
            //해당 정점의 인접점이 방문하지 않았으면 재귀
            adjacencyList[vertex].forEach(neighbor => {
                //방문안한 정점이 있으면 헬퍼함수 재귀
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        })(start)
        //배열 반환
        return result;
    }
    //깊이 우선 그래프(DFS) 순회 반복 메소드
    DFSIterative(start) {
        //그래프에 해당 정점이 없으면 빈 배열 반환
        if (!this.adjacencyList[start]) return [];
        //스택 선언
        const stack = [start];
        //최종 결과 배열 선언
        const result = [];
        //방문한 정점을 저장할 객체 선언
        const visited = {};
        //삭제한 정점
        let currentVertex;

        //시작 지점 방문 표시
        visited[start] = true;
        //스택에 정점이 있으면 루프
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex)
            //해당 정점의 인접점이 방문하지 않았으면 스택에 추가
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }
    //넓이 우선 그래프(BFS) 순회 메소드
    BFS(start) {
        //큐 생성
        const queue = [start];
        //결과 배열 선언
        const result = [];
        //방문한 정점을 저장할 객체 선언
        const visited = {};
        //삭제한 정점
        let currentVertex
        //시작 지점 방문 표시
        visited[start] = true;

        //큐에 정점이 있으면 순회
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            //해당 정점의 인접점이 방문하지 않았으면 큐에 추가
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}

let g = new Graph();
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')
console.log(g.BFS('A'))
