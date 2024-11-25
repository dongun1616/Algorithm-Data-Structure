//최대 이진 힙

//이진 힙 클래스
class MaxBinaryHeap {
    constructor() {
        this.vals = [55, 39, 41, 18, 27, 12, 33];
    }
    //노드를 추가하고 버블 업을 이용해 알맞은 위치로 이동시키는 메소드
    insert(element) {
        //해당 요소 배열에 추가
        this.vals.push(element);
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
            //추가하는 값이 부모 값보다 작거나 같으면 break
            if (element <= parent) break;
            //추가하는 값이 부모 값보다 크면 스왑
            this.vals[parentIdx] = element;
            this.vals[idx] = parent;
            //비교할 인덱스도 스왑
            idx = parentIdx
        }
    }
    //힙에서 최대 값 노드(루트)를 제거하고, 버블 다운으로 제조정하는 메소드
    extractMax() {
        //값이 없으면 null반환
        if (this.vals.length === 0) return null;
        //최댓값(루트) 저장
        const max = this.vals[0]
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
        return max;
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
                if (leftChild > element) swap = leftChildIdx;
            }
            //오른쪽 자식이 존재하면 자식 값 선언
            if (rightChildIdx < length) {
                rightChild = this.vals[rightChildIdx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
console.log(heap.extractMax());
console.log(heap.vals);