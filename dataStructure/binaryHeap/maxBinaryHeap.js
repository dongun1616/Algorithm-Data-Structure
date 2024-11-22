//최대 이진 힙

//이진 힙 클래스
class MaxBinaryHeap {
    constructor() {
        this.vals = [41, 39, 33, 18, 27, 12];
    }
    //노드를 추가하고 버블 업을 이용해 알맞은 위치로 이동시키는 메소드
    insert(element) {
        //해당 요소 배열에 추가
        this.vals.push(element);
        //위치를 찾는 버블업 메소드 호출
        this.bubbleUp();
        return this.vals
    }
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
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(55));
console.log(heap.insert(199));
