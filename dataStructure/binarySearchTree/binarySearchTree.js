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
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(5);
console.log(tree);