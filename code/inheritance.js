class Kendaraan{
    constructor(nama, pintu, warna){
        this.nama = nama
        this.pintu = pintu
        this.warna = warna
    }

    show(){
        return `ini adalah kendaraan roda empat`
    }
}

class MobilKecil extends Kendaraan{
    show(){
        return `
        ini adalah kendaraan kecil
        memiliki ${this.pintu} pintu dan berwarna ${this.warna}
        `
    }
}

class MobilBesar extends Kendaraan{
    show(){
        return `
        ini adalah kendaran besar
        memiliki ${this.pintu} pintu dan berwarna ${this.warna}
        `
    }
}


let abc = new MobilKecil('abc', 4, 'putih')
console.log(abc.show())


let abcBesar = new MobilBesar(`abc Besar`, 4, 'hitam')
console.log(abcBesar.show())



