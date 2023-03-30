class budiFamily {

    constructor(namaDepan, namaBelakang) {
        this._firstName = namaDepan
        this._lastName = namaBelakang
    }

    get firstName() {
        if (this._firstName != 'budi') {
            throw new Error('Parameter default harus Budi!')
        }
        return this._firstName
    }

    set firstName(parameter) {
        if (parameter != "budi") {
            throw new Error('Nilai yang dirubah juga harus budi!')
        }

        this._firstName = parameter

    }

}

let anakBudi = new budiFamily("rangga", 'toni')

console.log(anakBudi.firstName) // Ini akan mengakses get firstname
console.log(anakBudi._firstName) // ini akan mengakses _firstName langsung



