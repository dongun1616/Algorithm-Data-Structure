//이진 탐색 트리

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
                    //아니라면 순회
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
                    //아니라면 순회
                    current = current.right;
                }
            }
        }
    }
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(7)
tree.insert(11)
tree.insert(2)
console.log(tree);