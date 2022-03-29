class Pekerja{
    constructor(name, age, experience){
        this.name = name
        this.age = age
        this.experience = experience
    }

    kemampuan(){
        if (this.experience >= 2){
            return "profesional"
        }
        else if(this.experience < 2){
            return "biasa"
        }
    }

    show(){
        console.log(`
        ${this.name} adalah pekerja ${this.kemampuan()}
        Berumur ${this.age}
        `)
    }
}

let budi =  new Pekerja('budi', 30, 4)
budi.show()


let bambang = new Pekerja('bambang', 40, 7)
bambang.show()
