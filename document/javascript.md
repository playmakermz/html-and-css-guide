# Javascript 

file format untuk javascript adalah .js, 
Untuk menjalankan javascript bisa menggunakan:
1. web browser console 
2. Terminal linux ( dengan menggunakan 'node' application)

“ECMAScript is a standard.”

“JavaScript is a standard.”

“ECMAScript is a specification.”

“JavaScript is an implementation of the ECMAScript standard.”

“ECMAScript is standardized JavaScript.”

“ECMAScript is a language.”

“JavaScript is a dialect of ECMAScript.”

“ECMAScript is JavaScript.”

JavaScript engines are commonly found in web browsers, including V8 in Chrome, SpiderMonkey in Firefox, and Chakra in Edge. Each engine is like a language module for its application, allowing it to support a certain subset of the JavaScript language.

source: https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/

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

src: https://www.freecodecamp.org/news/javascript-switch-case-js-switch-statement-example/
(case statement)

## Loops and iteration 
### 05

Loop dapat membuat sebuah instruksi yang berulang.

```
for (let langkah = 0; langkah < 5; langkah++){
    console.log('berjalan satu langkah')
}
```

#### For structure
```
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement

```

1. "initialExpression" biasannya sebagai loop counter (jumlah loop)
2. "conditionExpression" adalah requirement dalam if statement ( jika memenuhi persyaratan maka akan dijalanakan )
3. "statement" `{...}`
4. Setelah dijalankan instruksi selanjutnya. dilakukan increment pada literal
5. kembali ke step conditionExpression

## do...while
### 06

```
do {statement}
while (condition);
```

Jika condition itu "true" maka statement akan terus dijalankan.

sebagai contoh

```
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

```

## While statement 
### 07 

```
while (condition)
{statement}
```

```
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

```
let main = true
let value = 0
while (main) {
  value += 1
  if (value == 5){
    console.log('end')
    main = false}
}
```

## Labeled statement 
### 08
dengan labeled statement kita bisa menutup loop kita tuju dengan lebih spesifik.

tidak harus menggunakan "break", kita juga bisa gunakan "continue" untuk restart loop dari awal lagi 

contoh:
```
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

```

## For in 

```
let makanan = ['nasi', 'tahu', 'tempe']

for (let i in makanan ){
  console.log(i)
}

// 0 1 2 
```

## for of 
```
let makanan = ['nasi', 'tahu', 'tempe']

for (let i of makanan ){
  console.log(i)
}

// nasi tahu tempe
```

source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration?retiredLocale=id

## Convert a string to number 
### 09 

1. `parseInt()`

```
myString = '140'
// 140 

a = 34.22
// 34
```

2. `Number()`

```
Number("10");          // 10 
Number(" 10  ");       // 10
Number("10.33");       // 10.33
```

src: https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l



## Function 
### 10

```
function namaFungsi(){
    console.log('halo')
}
```

```
namaFungsi()
```

Dengan menggunakan Function kita bisa menggunakan block code tersebut kapan saja 

**Local variabel**
```
function myFunction(){
    let var_a = "hello"
}
```

## Parameters
### 11

```
function myFunction(nama){
    console.log(nama)
}
```

**Parameter default**
```
function myFunction(nama = "budi"){
    console.log(nama)
    // budi
}
```

## Return value 
### 12
```
function myName(a,b){
    return a + b
}
```
return digunakan untuk menggembalikan nilai 

Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with "show" usually show something.

Function starting with…

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.

SRC: https://javascript.info/function-basics

## Get the last element in array
### 13

```
let abc = [1,2,3,4,5]
console.log(abc[abc.length - 1])
// 5
```
atau dengan `slice()`

```
let abc = [1,2,3,4,5]
console.log(abc.slice(-1))
// 5
```

refrence: https://flexiple.com/get-last-array-element-javascript/

```
let abc = [1,2,3,4,5]
console.log(Math.max(...abc))
// akan mengambil nilai terbesar yaitu: 5
```

refrence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max?retiredLocale=id


## Function expressions

cara lain untuk membuat function yaitu dengan function expression. 
Membantu kita untuk membuat sebuah fungsi didalam expressions

```
let myFunction = function(){
    console.log('hello')
}
```

**function expression vs function declaration**
src: https://javascript.info/function-expressions

**Memasukan function declaration kedalam variabel**

```
function hai(){
    console.log('hai')
}

let var_a = hai()

var_a() // hai 
hai() // hai
```

## Function arrow 

```
let myFunction = () => {
    console.log('hallo')
}
```

## Callback function 

```
function konsole(argument){
    console.log(argument)
}

function myCal(x, y, tampilkan){
    let sum = x + y
    // memanggil function konsole
    tampilkan(sum)
}

myCal(2, 2, konsole)
// 4
// kita menggunkan function dari konsole
```
refrence: https://www.w3schools.com/js/js_callback.asp
refrence: https://javascript.info/function-expressions

## Rest parameters
src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

```
function abc(...My){
  for (i of My){
    console.log(i)
  }
}

abc('halo', 'budi', 'nice')

// halo
// budi 
// nice
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

