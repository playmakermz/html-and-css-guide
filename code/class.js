class Animal {
    constructor(name){
        this.speed = 0;
        this.name = name;
    }
}

class Rabit extends Animal {
    constructor(name, earLength){
        super()
        this.name = "white rabbit";
        this.earLength = earLength
        console.log(`halo ini adalah ${this.name}`)
    }
}

let rabbit = new Rabit("black rabit", 10)

console.log()

