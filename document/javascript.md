# Javascript 

## Table of content
- [comment](#01)
- [Variabel](#02)
- [if statement](#03)
- [Menambahkan variabel ke template string](#04)
- [loops and iteration](#05)
- [do..while](#06)
- [while statement](#07)
- [Labeled statement](#08)
- [Conver a string to into number](#09)
- [function](#10)
- [parameters](#11)
- [return value](#12)
- [get the last element in array](#13)
- [function expression](#14)
- [function arrow](#15)
- [callback function](#16)
- [rest parameters](#17)
- [object notation](#18)
- [class syntax](#19)
- [what is a class](#20)
- [class expression](#21)
- [Getters / stters](#22)
- [computed names](#23)
- [class fields](#24)
- [class inheritance](#25)
- [inheritance](#26)
- [encapsulation programming](#27)
- [For each](#28)
- [Array find](#29)
- [filter](#30)
- [map](#31)
- [exports and require](#32)
- [Module exports](#33)

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

## Paradigma programming 

Ada beberapa paradigma pemrograman yang berbeda, masing-masing memiliki ciri khas dan cara pandang yang berbeda dalam mengatasi masalah. Berikut adalah beberapa paradigma pemrograman yang umum:

Paradigma Pemrograman Prosedural: pendekatan yang fokus pada urutan instruksi yang dilakukan pada data.

Paradigma Pemrograman Fungsional: pendekatan yang lebih fokus pada fungsi, atau bagaimana data dimanipulasi dan diproses dalam program.

Paradigma Pemrograman Berorientasi Objek: pendekatan yang mengorganisir program dalam objek yang terdiri dari data dan metode yang dapat memanipulasi data tersebut.

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



## Function  | ES5
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

**catatan tambahan function** 

Ekspression function dan function biasa telah ada dari versi 'ES5', function versi 'ES6' adalah penambahan arrow function. 

Pada node js, mereka akan mengutamakan function, oleh karena itu jika kita pangil function lalu tulis function tersebut pada baris terakhir, mereka akan terpangil normal. **Hanya berlaku pada function normal**

ref: https://medium.com/@zac_heisey/es5-vs-es6-functions-cb51536002ee

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
### 14

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
### 15

```
let myFunction = () => {
    console.log('hallo')
}
```

## Callback function 
### 16

Sebuah konsep untuk memasukan fungsi kedalam argument

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
### 17
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

```
function efg(...My){
  for (i in My){
    console.log(My[i])
  }
}

console.log(efg('h','i', 'o'))
```


## object notation
### 18
src: https://stackoverflow.com/questions/4908378/javascript-array-of-functions

```
let myFunct = {

functName : function(){
    console.log('halo')
},

name: () => {
    console.log('dunia')
}

}


myFunct.functName() // halo 

myFunct.name() // dunia
```

## Class Syntax 
### 19

```
class User {

constructor(name){
    this.name = name;
}

welcome(){
    console.log(`selamat datang kembali ${this.name}`)
}}


let budi = new User("budi") // new object is created

budi.welcome();
```


## What is a class?
### 20
> a class is a kind of function

Dikutip dari Petanikode

- class adalah rancangan atau blue print dari sebuah objek
- Object dalam pemrograman adalah sebuah variabel yang merupakan instance dari class
- instance bisa diartikan sebagai wujud dari class 
- class berisi definisi variabel dan fungsi yang menggambarkan sebuah objek

https://javascript.info/class

Contoh, bayangkan sebuah rumah, didalamnya ada TV, Kursi, Sofa dan alat- alat lainnya. Dalam PBO, rumah adalah class, sedangkan TV, Kursi, Sofa adalah instance.

src: https://id.quora.com/Dalam-pemrograman-apa-maksud-instance-dari-sebuah-objek

From stackoverflow https://stackoverflow.com/questions/2885385/what-is-the-difference-between-an-instance-and-an-object

Intinya **instance** adalah variabel yang bertugas sebagai object, object satu dan yang lainnya itu berbeda

> Answered By Yuval Karmi 
Excellent question.

I'll explain it in the simplest way possible: Say you have 5 apples in your basket. Each of those apples is an object of type Apple, which has some characteristics (i.e. big, round, grows on trees).

In programming terms, you can have a class called Apple, which has variables size:big, shape:round, habitat:grows on trees. To have 5 apples in your basket, you need to instantiate 5 apples. Apple apple1, Apple apple2, Apple apple3 etc....

Alternatively: Objects are the definitions of something, instances are the physical things.

Does this make sense?

```
class User {
    constructor(name) {this.name = name;}
    welcome() { console.log(`Selamat datang ${this.name}`) }
}

console.log(typeof User) // function
```

## OOP memiliki empat konsep utama 

1. "encapsulation": digunakan agar code kita lebih private, memberikan informasi kepada developer lain bahwa kode ini tidak boleh dirubah. Bisa berwujud local variabel ( kebalikan dari global variabel )

2. "inheritance": adalah proses untuk membuat kelas baru tetapi memiliki karaktersitik dari class yang menjadi parent. 

3. "Polymorphism": adalah bentuk dari inheritance, tetapi class childer telah melakukan perubahan pada method dari class parent.

contoh:
```
class Animal {
  sound() {
    console.log('This animal makes a sound');
  }
}

class Dog extends Animal {
  sound() {
    console.log('Bark! Bark!');
  }
}

class Cat extends Animal {
  sound() {
    console.log('Meow!');
  }
}

const animal1 = new Animal();
const dog1 = new Dog();
const cat1 = new Cat();

animal1.sound(); // Output: This animal makes a sound
dog1.sound(); // Output: Bark! Bark!
cat1.sound(); // Output: Meow!

```

- "abstration": Dengan abstration kita bisa lebih fokus ke prosesnya daripada menggenai menulis detail data secara manual. Dengan abstraction kita bisa memasukan parameter ke object secara langsung. Dengan begitu object akan lebih berfariasi daripada tipe diatas 

```
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    throw new Error("makeSound method must be implemented");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} barks: ${this.sound}`);
  }
}

const dog = new Dog("Buddy", "Woof woof!");
// insert paramter ^
dog.makeSound();

```

### Konsep OOP dengan garbage collection 

OOP dan garbage collection itu berbeda. 
Garbage collection digunakan untuk membersihkan penggunaan memory dari aplikasi yang tidak berjalan.

## Class Expression
### 21

sama seperti function class juga bisa dimasukan kedalam expression(variabel)

```
let User = class {
    Hi(){ console.log('halo dunia') }
}

new User().Hi() // ini works
// halo dunia

```

kit juga bisa memasukan class kedalam function

```
function makeClass(abc) {

    return class {
    Hi() {
    console.log(abc)
    }
}
}

let budi = makeClass(" selamat datang budi")

new budi().Hi() // selamat datang budi


```

## Getters / setters
### 22

```
class User {

  constructor(name){
    this.name = name;
  }

  get name() {
    return this._name
  }

  set name(value){
    if (value.length < 4){
      console.log('the name is to short')
      return
    }
    this._name = value
  }

}


let budi = new User('budi')
console.log(budi.name)

```

## Computed names
### 23
```
class User {

    ['say'+'Hi'](){
        console.log('halo dunia')
    }
}

new User().sayHi()
```

## Class fields
### 24
class property

```
class User {
    name = "budi" // property

    Hi(){ console.log(`selamat datang ${name}`) }
}

let abc = new User().name

console.log(abc)

```

## Class inheritance
### 25

```
class NamaBarang{
    constructor(name, price){this.name = name, this.price = price}

    showPrice(){console.log(this.price)}
}

class NamaMakanan extends NamaBarang{
    showName(){console.log(this.name)}

    result(){this.showName(); super.showPrice();}

}

let nasiGoreng = new NamaMakanan('nasi goreng', 15)

nasiGoreng.result()

// nasi goreng
// 15

```

- `constructor` digunakan untuk menggambil argument seperti halnya function. Karena function itu sudah built in constructor sedangkan class tidak
- `this` ini gunakan untuk menggambil method child
- `this` juga digunakan untuk menggambil property didalam class
- `super` ini digunakan untuk menggambil constructor parent, jika kita ingin melakukan perubahan pada constructor harus ada super()\
- `super` scope dari super adalah untuk property pada parent saja, sebagai contoh code diatas akan error jika `this` diubah ke super

contoh: akan terjadi error jika kita tidak pakai super
```
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
```

## 

```
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
```
jika kita ingin melakukan perubahan pada constructor di inheritance class pastikan declarasikan `super()`

dan juga jangan lupa untuk argumentnya ditulis ulang juga, jika masih dipakai

## Inheritance 
### 26

Ini adalah suatu konsep didalam OOP (object oriented programming) untuk membantu kita membuat sebuah class atau blueprint yang memiliki karakteristik yang sama antara satu dan yang lainnya.

Sebagai gambaran:
ada blueprint untuk kendaraan, kendaran tersebut memiliki ciri-ciri 
ada pintu dan roda 4 

kita bisa membuat sebuah instruksi baru yang memiliki ciri-ciri diatas dengan melakukan inheritance. 

ada blueprint yang berasal dari blueprint diatas bernama "mobil kecil",
ada ciri-ciri baru yaitu ukurannya tidak lebih dari 4 meter

dan juga ada blueprint mobil yang berukuran lebih dari 4 meter.

Kesimpulan: inheritance digunakan untuk membuat sebuah model blueprint yang sama, tanpa harus buat buat dari awal 

```
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
```

## Encapsulation programming
### 27

adalah sebuah metode pendekatan dalam pembuatan sebuah program agar function maupun variabel tidak bertabrakan antara satu dan yang lainnya.

Misalkan kita ingin membuat sebuah program yang besar, dengan teknik encapulasi kita bisa memastikan bahwa tidak ada variabel atau fungsi duplikat didalam program yang akan menyebabkan error. 

Karena encapulasi itu akan memberikan batasan scope untuk variabel dan function. 

**Carannya**
 Kita bisa menulis functi ataupun variabel didalam suatu class. 
 Maka variabel atau function tersebut hanya bisa dijalankan didalam class tersebut saja. Dengan begitu bisa dipastikan jika kita menulis nama variabel atau fungsi yang sama tidak akan terjadi error

kita juga bisa melakukan encapulasi didalam class yaitu dengan menggunakan function scope. variabel yang didalam function hanya bisa dipakai dan dijalankan didalam function tersebut saja


Kesimpulan: ini adalah pendekatan untuk memastikan tidak ada variabel atau function duplikat yang akan menghasilkan bug.

Karena diprogram yang bersekala besar itu akan mengakibatkan bug yang tidak terlihat

src: https://www.youtube.com/watch?v=sNKKxc4QHqA&list=PLxvooGgpi4NeugSB4Pk546MXTPmGqPdc4&index=6


## For each()
### 28

Method forEach ini digunakan untuk memanggil nilai didalam secara berurutan

```
let abc = ['rangga', 'wahyu', 'atmoko']

abc.forEach(item => console.log(item))
```

atau 

```
let abc = ['rangga', 'wahyu', 'atmoko']

abc.forEach((item) => {console.log(item)})

```

Atau 

```
function setList(name){
    console.log(name)
}

let var_a = ['budi', 'bambang', 'bagus']

var_a.forEach(setList)
```

src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

## Array find 
### 29

untuk mendapatkan satu nilai yang sesuai permintaan

```
let varA = [4,6,8,3,5]

let result = varA.find(item => item > 6)

console.log(result)
```

atau 

```
function test(arg) {
    return arg > 6
}

let varA = [4,6,8,3,5]

let result = varA.find(test)

console.log(result)

```

## filter
### 30

menggambil semua nilai yang sesuai dengan permintaan 

```
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

atau 

```
function test(arg){
    return arg > 6
}

let varA = [1,4,5,6,8,8,4,9,7]

let result = varA.filter(test)

console.log(result)

```

## Map 
### 31


Melakukan perhitungan atau menggelolah data didalam array

src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

```
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

```

atau 

```
function test(arg){
    return arg * 2
}

let varA = [1,2,3,4,5]

let result = varA.map(test)

console.log(result)


```

## export dan require 
### 32

> ex.js 
```
let name = "budi"
let age = 28

exports.name = name
exports.age = age
```

> im.js 
```
let user = require('./ex')

console.log(user.name, user.age)
```

Sekarang untuk banyak paket 

> ex.js 
```
let name = 'budi'
let age = 28

exports.name = name
exports.age = age
```

> im.js 
```
const {name, age} = require('./ex')

console.log(name, age)
```

## Module exports 
### 33

> ex.js 

```
let user = 'budi'
let age = 28

module.exports = user
module.exports = age
module.exports = "ini bagian terakhir"
```

ini digunakan untuk menggambil satu exports saja, yaitu bagian terakhir

> im.js 
```
let name = require('./ex')

console.log(name)
```

Src: 
- https://www.freecodecamp.org/news/node-module-exports-explained-with-javascript-export-function-examples/
- https://www.sitepoint.com/understanding-module-exports-exports-node-js/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export?retiredLocale=id

## Callback function 
### 34

Disini kita menggunakan function sebagai argumentnya. 
Tidak perlu ada penulisan "()" pada nama function yang dijadikan argument

```
function test(arg){
    return arg * 2
}

let varA = [1,2,3,4,5]

let result = varA.map(test)

console.log(result)

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

## Membuat function  | ES5
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

## undefined vs null 

```
let a
typeof a // undefined

let c = undefined // entah bagaimana dilarang pada komunitas!! https://www.geeksforgeeks.org/undefined-vs-null-in-javascript/

let b = null
typeof b // null

null == undefined // True ( mereka mempresentasikan konsep yang sama )
null === undefined // False ( tipe nilai mereka berbeda )
```

- Undefined
  - adalah bentuk kosong sepenuhnya. Semisal declarasi variabel tetapi tidak ada nilai dialamnya

- null
    - adalah nilai yang bisa kita masukan kedalam variabel, yang menjadi representasi area nilai belum terisi
 
ref: https://www.geeksforgeeks.org/undefined-vs-null-in-javascript/

## Get And Setter 

```
class budiFamily {

    constructor(namaDepan, namaBelakang) {
        this._firstName = namaDepan
        this._lastName = namaBelakang
    }

    get firstName() {
        console.log('aku dari get masuk urutan ke ... dengan ' + this._firstName)
        return this._firstName
    }

    set firstName(parameter) {

console.log('aku dari set  masuk urutan ke ... dengan ' + this._firstName)
        if (parameter != "budi") {
            throw new Error('First Name must be budi!')
        }

        this._firstName = parameter

    }

}

let anakBudi = new budiFamily("budi", 'toni')
console.log(anakBudi.firstName) // Ini akan mengakses get firstname
console.log(anakBudi._firstName) // ini akan mengakses _firstName langsung
console.log(anakBudi.lastName) // Undefined
// anakBudi.firstName = 'wahyu'

// Set Disini akan bekerja saat kita melakukan perubahan pada properti
// anakBudi.firstName = "wahyu"

```
Atau Pada code dibawah ini: 

```
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

let anakBudi = new budiFamily("budi", 'toni')

console.log(anakBudi.firstName) // Ini akan mengakses get firstname
console.log(anakBudi._firstName) // ini akan mengakses _firstName langsung

anakBudi.firstName = "wahyu" // Maka akan terjadi error dari set 

let anakOmBudi = new budiFamily('rangga', 'wahyu')
// Maka akan terjadi error dari get

```

Note: 

Pada code diatas bercerita tentang keluarga budi. Dengan Semua keturunan harus memiliki nama awalan Wajib budi.

Break down:
- Get Bekerja saat awal kita membuat instance. Mereka akan melakukan pengecekan pada argument yang dimasukan.

- Set akan bekerja saat instance sudah terbuat dan memiliki parameter. Mereka hanya akan aktif jika Melakukan perubahan pada properti yang ada

- Pola pengerjaan mereka setelah instance telah dibuat dan dilakukan perubahan adalah, Argument pertama-tama akan diolah pada set dan akan dikirim kepada get untuk menyimpan data tersebut, dan menampilkan data jika dipanggil 

- Get Bekerja juga sebagai argument function. Mereka adalah function tetapi sebenarnnya adalah argument, oleh karena itu tidak ada () pada akhir pemanggilan. 
- Didalam get tidak boleh ada parameter 


***
## Additional note 
- [javascript class](../document/javascript-class.md)
- [javascript-array](../document/javascript-array.md)
- [JavaScript fundamental](../document/javascript-fundamental.md)
- [Javascript synchronous (then, catch, finally)]()
- [AJAX](../document/ajax.md)

***
## Reference:
- internet is hard 
- freecodecamp 
- mozzila
- chatgpt
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get (get dan set)
