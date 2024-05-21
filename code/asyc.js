let readline = require('readline-sync')

class Music{
    constructor(){
        this.name = `Selamat datang, silahkan masukan username :  `
        this.email = `Alamat Email : `
        this.proses = `
==================================
        Form Lagu Game
    Dapatkan informasi lagu dari game yang kamu suka.
    pastikan masukan alamat email, agar kamu tidak tertingal informasi terkini!!

1. Devil May Cry            2. Alan Wake (Old God Of Asgard)
- Bury The Light            - Herald of Darkness
- Devil Trigger             - Dark Ocean Summoning


=====================================
        `
    }

    detMus(item){
        let abcDe = [
            {name: 'Bury The Light', artist: 'Casey Edwards', id: 12},
            {name: 'Devil Trigger', artist: 'Casey Edwards', id : 13}
        ]
        let abcAl = [
            {name: 'Herald of Darkness', artist: 'Old Gods of Asgard', id: 15},
            {name: 'Dark Ocean Summoning', artist: 'Old Gods of Asgard', id: 14}
        ]
        if (item == '1'){
            let acc = abcDe.map((item) => {
            let bbb = `
                    Nama Lagu   : ${item.name}
                    Nama Artist : ${item.artist}
                    id          : ${item.id}
                `
            return bbb
            })
            return acc
        }
        else if ( item == '2' ){
            let acc = abcAl.map((item) => {
            let bbb = `
                    Nama Lagu   : ${item.name}
                    Nama Artist : ${item.artist}
                    id          : ${item.id}
                `
            return bbb
        })
            return acc
    }
        else {
            return 'Tidak pilihan lain'
        }
    }

    detMainFinale(){
        return new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('upss')) , 1000)
        })
    }

    detTam(){
        let namaUser = readline.question(this.name)
        let pilihanUser = readline.question(this.proses)
        let emailUser = readline.question(this.email)

        let close = `
        Nantikan kabar dari kami ${namaUser}
        pastikan pantau terus email ${emailUser}
        Sampai jumpa !!
        `

        this.detMainFinale().then(
            (result) => {return console.log(this.detMus(pilihanUser)) },
            (error) => {return 'no'}
        )

        this.detMainFinale().finally(() => {
            console.log(close)
        })
    }

}

let Toko = new Music()

Toko.detTam()



