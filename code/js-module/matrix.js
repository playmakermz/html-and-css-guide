const ndarray = require('ndarray')

// Buat dua matrix ukuran 2x2
const A = ndarray([1, 2, 3, 4], [2, 2])
const B = ndarray([5, 6, 7, 8], [2, 2]) // arg1:baris, arg2: kolom

// pada ndarray buat matrix kosong ukuran 2x2 sebagai penampung data nanti
const C = ndarray(new Float64Array(4), [2, 2])

// Loop perhitungan matrix
for (let i = 0; i < A.shape[0]; i++) {
  for (let j = 0; j < B.shape[1]; j++) {
    let sum = 0
    for (let k = 0; k < A.shape[1]; k++) {
      sum += A.get(i, k) * B.get(k, j)
        // i dan k atau k dan j adalah untuk mendapatkan koordinat nilai pada matrix
        // Setelah kita dapat nilai A maka kalikan dengan nilai B
        // Simpan nilai pada variabel sum.
        // Karena A.shape adalah 2 maka loop akan dilakukan dua kali [0,1]
        // Maka Loop akan perkalian nilai A dan B akan dilakukan sekali lagi, dengan k pada A merujuk pada bagian kolom, dan K pada B merujuk pada baris
        // Semisal loop pertama adalah 1 * 5
        // maka loop kedua adalah 2 * 7
        // 5 += 14 = 19 hasil dari loop kolom 1, baris 1
    }
    C.set(i, j, sum)
      // i dan j adalah untuk penempatan koordinat
      // i adalah untuk baris  [0]
      //                       [1]
      // j adalah untuk kolom [0,1]
      // Sum adalah nilai yang dimasukan
  }
}

// Tampilkan hasil perhitungan yang selesai
console.log(C.data)


