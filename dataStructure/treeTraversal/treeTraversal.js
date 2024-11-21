//이진 탐색 트리, 트리 순회

//노드 클래스
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
//이진 탐색 트리 클래스
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    //이진 탐색 트리에 노드를 추가하는 메소드
    insert(val) {
        //노드 생성
        let newNode = new Node(val);
        //루트가 없으면 새 노드를 루트로 선언
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        //아니라면
        else {
            //순회할 노드 선언
            let current = this.root;
            //순회할 루프
            while (true) {
                //값이 current와 같으면 undefined 반환
                if (val === current.val) return undefined;
                //값이 current보다 작으면
                if (val < current.val) {
                    //current의 왼쪽에 노드가 없으면
                    if (current.left === null) {
                        //새로운 노드를 current의 왼쪽으로 선언
                        current.left = newNode;
                        return this;
                    }
                    //아니라면 left로 순회
                    current = current.left
                }
                //값이 current보다 크면
                else if (val > current.val) {
                    //current의 오른쪽에 노드가 없으면
                    if (current.right === null) {
                        //새로운 노드를 current의 오른쪽으로 선언
                        current.right = newNode;
                        return this;
                    }
                    //아니라면 right로 순회
                    current = current.right;
                }
            }
        }
    }
    //이진 탐색 트리에서 해당 값이 트리에 있는지를 탐색하는 메소드
    find(val) {
        //루트가 null이면 false를 반환
        if (this.root === null) return false;
        //순회할 노드 선언
        let current = this.root;
        //탐색을 확인하는 불리언
        let found = false;
        //탐색을 순회하는 루프
        while (current && !found) {
            //해당 값이 current보다 작으면 left로 순회
            if (val < current.val) {
                current = current.left;
            }
            //해당 값이 current보다 크면 right로 순회
            else if (val > current.val) {
                current = current.right;
            }
            //같다면 탐색 불리언을 true로 선언
            else {
                found = true;
            }
        }
        //찾지 못했다면 undefined를 반환
        if (!found) return undefined;
        return current;
    }
    //너비 우선 탐색 알고리즘
    bfs() {
        //순회하면서 저장할 변수 선언
        let data = [];
        let queue = [];
        //루트를 시작점
        let current = this.root;
        //큐에 루트를 시작점으로 추가
        queue.push(current);
        //큐에 존재하면 data배열에 추가
        while (queue.length) {
            //노드를 큐에서 제거하고 data에 추가
            current = queue.shift();
            data.push(current.val);
            //왼쪽이나 오른쪽 노드가 존재하면 큐에 추가
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        //순회하면서 저장한 데이터 반환
        return data;
    }
    //깊이 우선 탐색 - 전위 순회
    dfsPreOrder() {
        //순회하면서 저장할 변수 선언
        let data = [];
        //노드를 추가해줄 헬퍼 메소드
        function traverse(node) {
            //data에 노드 추가
            data.push(node.val);
            //노드에 left가 존재하면 헬퍼메소드 재귀
            if (node.left) traverse(node.left);
            //노드에 right가 존재하면 헬퍼메소드 재귀
            if (node.right) traverse(node.right);
        }
        //루트부터 시작해 헬퍼 메소드 호출
        traverse(this.root)
        //순회하면서 저장한 데이터 반환
        return data;
    }
    //깊이 우선 탐색 - 후위 순회
    dfsPostOrder() {
        //순회하면서 저장할 변수 선언
        let data = [];
        //노드를 추가해줄 헬퍼 메소드
        function traverse(node) {
            //노드에 left가 존재하면 헬퍼메소드 재귀
            if (node.left) traverse(node.left);
            //노드에 right가 존재하면 헬퍼메소드 재귀
            if (node.right) traverse(node.right);
            //data에 노드 추가
            data.push(node.val);
        }
        //루트부터 시작해 헬퍼 메소드 호출
        traverse(this.root)
        //순회하면서 저장한 데이터 반환
        return data;
    }
    //깊이 우선 탐색 - 중위 순회
    dfsInOrder() {
        //순회하면서 저장할 변수 선언
        let data = [];
        //노드를 추가해줄 헬퍼 메소드
        function traverse(node) {
            //노드에 left가 존재하면 헬퍼메소드 재귀
            if (node.left) traverse(node.left);
            //data에 노드 추가
            data.push(node.val);
            //노드에 right가 존재하면 헬퍼메소드 재귀
            if (node.right) traverse(node.right);
        }
        //루트부터 시작해 헬퍼 메소드 호출
        traverse(this.root)
        //순회하면서 저장한 데이터 반환
        return data;
    }
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(20)
tree.insert(8)
console.log(tree.dfsInOrder());