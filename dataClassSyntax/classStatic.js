//클래스 ES2015 구문 예시

//포인트 클래스 스태틱 예시
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    //두 점사이의 거리를 구하는 스태틱 메소드
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); //스태틱 메소드는 클래스에서 호출한다.