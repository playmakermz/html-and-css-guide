class Barang {
    constructor(name, price){
        this.name = name
        this.price = price
    }
}

class Makanan extends Barang{
    constructor(name, price, level){
        /* super(name, price)
         *Kita bisa memakai cara ini sebagai alternatif yang dibawah
            untuk menggambil constructor parent, jadi tidak perlu this.name.
         */
        super()
        this.name = name
        this.price = price
        this.level = level
    }

    result(){
        return `
nama makanan : ${this.name}
harga makanan : ${this.price}
tingkat pedas : ${this.level}
        `
    }
}

let bakmie = new Makanan('bakmie', 15, 10)

console.log(bakmie.result())
