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
    //이진 탐색 트리에서 두 번째로 큰 노드를 찾아 반환하는 메소드
    findSecondLargest() {
        //루트가 null이거나 두번째 노드가 없는 경우 null 반환
        if (this.root === null || (!this.root.left && !this.root.right)) return null;
        //순회할 노드 선언
        let current = this.root
        //부모 노드 선언
        let parent = null;
        //가장 큰 노드로 이동
        while (current.right) {
            parent = current;
            //오른쪽으로 순회
            current = current.right;
        }
        //가장 큰 노드가 왼쪽 자식을 가지고 있는 경우
        if (current.left) {
            return this.findMax(current.left);
        }
        //아니라면 부모가 두 번째로 큰 노드
        return parent;
    }
    //서브트리에서 가장 큰 값을 찾는 메소드
    findMax(node) {
        let current = node;
        while (current.right) {
            current = current.right;
        }
        return current;
    }
    //
}


let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(9)
tree.insert(3)
tree.insert(13)
tree.insert(12)
console.log(tree.findSecondLargest());