# Javascript 

file format untuk javascript adalah .js, 
Untuk menjalankan javascript bisa menggunakan:
1. web browser console 
2. Terminal linux ( dengan menggunakan 'node' application)

## Comment
### 01 

Penulisan komentar pada Javascript 

```
// Menulis komentar satu baris 
/*
Penulisan komentar yang terkelompok,
bisa dua baris ataupun lebih 
*/ 
```

## Variabel 
### 02 

Varibel adalan sebuah fungsi untuk menyimpan data.
Beberapa cara declarasi variabel 
```
var_a = 10
let var_b = 10
const var_c = 10 
```

```
let user = "Budi",
    umur = 25 
```

Tidak boleh melakukan declarasi 2 kali dalam satu ruang

```
let user  = "budi"

let user = "bambang"

// akan muncul SyntaxError
```

Didalam penamaan variabel, tidak boleh ada angka dipaling depan variabel 

```
let 01halo = "text"

// akan ada error 
```

Refrence: https://javascript.info/variables

## If statement 
### 03 

Dengan if statement kita bisa membuat instruksi yang akan dijalanakan jika persyaratan sudah terpenuhi

```
let year = 2022
if (year == 2022) console.log("tahun 2022")
// Output tahun 2022 
```

```
let year = 2022 
if (year == 2022) {
    console.log("tahun 2022 ")
}

// output
// tahun 2022 
```

```
let var_a = 10 

if (var_a == 10){
    console.log('10')
} else if (var_a > 10) {
    console.log('11')
} else {
console.log('9')
}
```

### Inline if statement(Conditional operator)

```
let var_a = (2022)

let year = ( var_a == 2022 ) ? "sekarang tahun 2022" : "sekarang bukan 2022"

// true : false 
// sekarang tahun 2022
```

```
let age = 18;

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log(message)
// Greetings!
```
SOurce: https://javascript.info/ifelse

## Menambahkan variabel kedalam string (Template litteral)
### 04

```
let budi = "nama siswa"
let var_a = `halo ${budi}`
```

***
# Note kedua 
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

