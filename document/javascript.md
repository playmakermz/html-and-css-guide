# Javascript 

file format untuk javascript adalah .js, 
Untuk menjalankan javascript bisa menggunakan:
1. web browser console 
2. Terminal linux ( dengan menggunakan 'node' application)

## install node 

installing node js in linux. `sudo pacman -S node`

## jalankan node 

ketik `node` didalam terminal 

## aritmatika sederhana 
```
1 * 2
(2+3) * (3+2)
14 % 2
14 / 4
2 ** 6
```

## Penggunaan underscore 
`_` untuk menyimpan nilai terakhir
```
2 * 3 // 6
_ * _ // 36
```

## Membuat function 
```
function tambah(a,b){
  return a + b
}
```

## membuat object
```
let obj = new object()
obj.alas = 3
obj.tinggi = 5 
obj.luas = function() { return (obj.alas * obj.tinggi) / 2 }
obj.luas() // 7.5 
```

## Variabel 
```
let a = 'b' // variabel ini masih bisa dirubah
const c = 'd' // variabel ini tidak bisa dirubah
let d, e = 'd', 'e'
```

## readline-sync ( input )
```
// sama bisa seperti input() function di python
let readline = require('readline-sync')

let nama = readline.question('Nama anda?')
// ambil input dari console
```

## Check tipe data 
```
let a = 3
typeof a 
// ouput 'number'

let b = new Number(9)
typeof b 
// ouput 'object'
```

## Mengubah nilai ke string
```
let a = 9
a.toString()
// '9'
```
## Tipe number 
```
// dalam beberapa bahasa program
// ada bilangan int dan float
// javascript tidak membedakan bilangan berikut
// alternative declare number
let number = 255; / 10
let binner = 0b1111; / 2
let oktal = 0o377; // 8
let heksadesimal = 0xff; // 16

let float = 123.123
```

## Penulisan string
```
// petik tunggal ''
// petik ganda ""
// tick ``
'tunggal'
"ganda"
`tick`
```

## escape, squence, new line, horizontal tab
```
'halo \n halo'
// halo 
// halo 
```
## boolean
```
let betul = true
let salah = false
```
## Array

