function takeShower() {
    console.log("call 4")
    console.log("call 4 done")
    return "Showering!!"
}

function eatBreakfast() {
    console.log("call 3")
    let meal = cookFood()
    console.log("call 3 done")
    return `Eating ${meal}`
}

function cookFood() {
    console.log("call 2")
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    console.log("call 2 done")
    return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
    console.log("call 1")
    takeShower()
    eatBreakfast()
    console.log("call 1 done")
    console.log("Ok ready to go to work!")
}

wakeUp();