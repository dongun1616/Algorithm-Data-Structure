//클래스 ES2015 구문 예시

//학생 클래스 인스턴스 예시
class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0; //지각 횟수
        this.scores = [];
    }
    //이름 인스턴스
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    //지각 인스턴스
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return "You are OUT!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    //점수 인스턴스
    addScore(score) {
        this.scores.push(score);
        return this.scores
    }
    //점수 평균 인스턴스
    scoreAverage() {
        let sum = this.scores.reduce(function (a, b) { return a + b })
        return sum / this.scores.length;
    }
}

let student1 = new Student('Lim', "D", 1999);
let student2 = new Student('Kang', "S", 1999);

console.log(student1.fullName()) //인스턴스 메소드는 인스턴스에서 호출한다.
console.log(student2.markLate())
console.log(student2.markLate())
console.log(student2.markLate())
console.log(student2.addScore(92))
console.log(student2.addScore(88))
console.log(student2.addScore(81))
console.log(student2.scoreAverage())