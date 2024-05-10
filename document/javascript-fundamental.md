# Fundamental concept of Javascript

- Nodejs 
- NPM
- Data type 
- variabel
- Expression
- comment
- operator
- if statement
- array
- loop
- function 
- object
- export import 

## Node js

Node.js adalah salah satu open-source, cross-platform, back-end Javascript runtime einvronment yang dapat membantu kita untuk membuat aplikasi bagian server dengan Javascript. Node js Dibangun pada 2009 oleh Ryan Dahl, Node.js Sekarang mendapatkan kepopuleran karena diantara para developer merasa architecture dan aplikasi ini sangat mudah digunakan dan menjadi support dalam pengembangan aplikasi. 

Salah satu Kelebihan dari Node.js adalah kemampuan untuk mengatur dan menerima perintah. Node Js dapat menerima berbagai macam perintah secara bersamaan tanpa harus menghentikan perintah lainnya. Dengan kelebihan tersebiut node js sangat dapat membantu dalam aplikasi yang bekerja secara real time dengan user yang banyak, seperti aplikasi komunikasi atau online game. 

Node js memiliki aplikasi untuk melakukan pengaturan dan pengelolahan package module yang bernama NPM, adalah salah satu open source library yang besar di dunia, yang memiliki lebih dari satu juta package yang dapat kita gunakan.

Sebagai tambahan Node.js adalah salah satu penyedia bantuan yang paling populer dalam pembangunan API, dikarenakan kemampuannya dalam mengatur permintaan dan respon didalam format JSON. Ini akan sangat membantu dalam melakukan integrasi dengan aplikasi lain dan service, sebagai mana JSON yang sangat diandalkan dalam melakukan pertukaran data. 


## Api 

API (Application Programming Interface) adalah sebuah set protokol, dan alat untuk membantu dalam pengembangan software. Dengan API kita dapat Membuat dua software atau lebih bekerja bersamaan dengan mudah dan effisient.

Beberapa Bentuk API:
- Web APIs: Adalah Bentuk API yang menggunakan web protokol seperti HTTP untuk mendapatkan data. Contoh API google maps, atau twitter.

- Operating System API: Adalah penghubung antara operating system dan software agar mereka bisa menggunakan resource computer system.  Contohnya adalah data dari docs dihubungkan dengan printer. 
- Library API: Ini adalah API yang berada didalam library software dan dapat memberikan akses untuk menggunakan library function dan feature. Contoh React API, Dengan React library kita bisa membuat user interface dengan mudah. API tersebut menyediakan set komponent dan method dalam membuat dan melakukan management pada Element UI.

## Variabel 

Javascript adalah salah satu baha pemrogramman yang dynamic, dengan kata lain variabel bisa menyimpan berbagai macam data type dengan mudah. Oleh karena itu javascript dikatakan sebagai bahasa yang flexibel, namun kita juga harus berhati-hati dalam penggunaan variabel tersebut.

Pada awal dari javascript, cara untuk melakukan deklarasi variabel hanya bisa dilakukan dengan "var", setelah berkembang mucul "let", dan sekarang pada ES6 ditambahkan "const". 

Contoh deklarasi variabel 

```
var x = 10
let y = '10'
const = 'string'
```
Data didalam var dan let dapat kita ubah sesuai dengan kebutuhan, Sedangkan const data tidak dapat dirubah. 

Perbedaan dari var dan let:

- Var memiliki function scope. 
- let memiliki block scope.

Contoh code error untuk var 
```
function loop (par) {
    for (var i = 0; i < 4 ; i++) {
        console.log(par[i])
    }

    console.log('ini adalah dari var' + i)
}

let ar = [1,2,3]

loop(ar)
```



## Data Type 

Javascript support banyak tipe data, yang didalamnnya:

- String: Digunakan sebagai representasi dari text dan ditandai dengan tanda kutip.
- Number: Digunakan sebagai representasi dari nilai numeric.
- Booleans: Digunakan sebagai representasi nilai benar atau salah. 
- Null: Digunakahn sebagai representasi dari bentuk kosong. 
- Undefined: digunakan untuk tipe data yang tidak dikenali.
- Objects: digunakan sebagai representasi dari collection data yang berhubgan dengan data atau function.
- Array: Digunakan sebagai representasi dari koleksi data dalam bentuk list.
- Symbol: Sebagai representasi dari penanda unique 


```
let myString = 'Hello, world!'; // a string
let myNumber = 42; // a number
let myBoolean = true; // a boolean
let myNull = null; // null
let myUndefined; // undefined
let myObject = { name: 'John', age: 30 }; // an object
let myArray = [1, 2, 3, 4, 5]; // an array
let mySymbol = Symbol('foo'); // a symbol
```

Mencari tau tipe data gunakan function `typeof`.
```
typeof myNumber;
```

Mencari tau apa itu adalah array
```
let a = [1,2,3];
a instanceof array // true
```

## Operator 

Javascript Menyediakan beberapa tipe operator yang dapat membantu kita dalam melakukan berbagai macam operasi data. Operator adalah simbol yang menjadi representasi dari suatu kalkulasi. 

Bebrapa tipe operator pada Javascript:
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Modulus (%)


```
let x = 5;
let y = 10;
let z = x + y; // z equals 15
```

comparison operator di javascript:
- Equal to (==)
- Not equal to (!=)
- Strict equal to (===)
- Strict not equal to (!==)
- Greater than '>'
- Less than `<`
- Greater than or equal to `>=`
- Less than or equal to `<=`



## Expression 

```
let x = 5
let y = 10 

let z = x + y 
let i = (x * y) - x 
```

Expression adalah kombinasi dari operator dan nilai, yang akan menghasilkan suatu nilai yang baru.

## if statement

If statement adalah fondasi kontrol struktur dalam pemrogramman yang dapat membantu kita dalam melakukan ekseskusi program. If statement digunakan untuk membuka suatu pilihan didalam algoritma, Jika hasil eksekusi adalah true maka akan diamnil jalan 1, jika hasil eksekusiadalah false maka diambil jalan terakhir. 

Format dari if statement
```
if (condition) {
    // execute prompt
}
```

If statement bekerja dengan cara memastikan apakah "condition" tersebut bernilai true atau tidak. Jika "condition" bernilai true maka akan di eksekusi pada blok if, Jika "condition" bernilai false maka akan di eksekusi pada blok lainnya. 

Contoh format dengan blok lainnya.
```
if (condition) {
 // execute prompt
}

else {
 // execute prompt
}
```
Jika "condition" adalah false maka blok "else" akan di eksekusi.

Pada if statement kita bisa menambahkan blok lagi untuk membuat sistem if statement yang lebih complex. 

Contoh if statement yang lebih complex:
```
if (condition) {
    // execute prompt
}

else if (condition02) {
    // execute prompt
}

else {

}
```


Didalam "condition" kita bisa menambahkan comparison agar bisa menjadi persyaratan true and false. 


comparison operator di javascript:
- Equal to (==)
- Not equal to (!=)
- Strict equal to (===)
- Strict not equal to (!==)
- Greater than '>'
- Less than `<`
- Greater than or equal to `>=`
- Less than or equal to `<=`


Setelah condition kita juga bisa mengatur agar ada dua "condition" yang harus dipenuhi agar bisa menjadi true. 

Contoh logical operator untuk melakukan combinasi:
- && : digunakan untuk menjadikan dua condition harus terpenuhi agar menghasilkan true. 
- || : akah menghasilkan true jika salah satu dari 2 "condition" terpenuhi. 
- !  : akan merubah hasil nilai dari condition menjadi bentuk boolean yang sebaliknnya.


Contoh logical operator not (!)
```
x = false

if (!x) {
    console.log('X adalah ' + x + 'tetapi menjadi true karena  !')
}

else {
    console.log('Ini adalah laporan dari blok else')
}

```

Kesimpulan:
If statement adalah sebuah fungsi yang dapat digunakan untuk membuat program menggambil suatu pilihan tertentu sesuai dengan hasil boolean yang dihasilkan oleh "condition".


## Loop

Loops adalah komponent penting dalam program, dengan loop kita bisa membuat program itu selalu berjalan hingga akhirnya dimatikan. Ada beberapa tipe loop: for, while, dan do-while. Setiap tipe loop memiliki cara pengerjaannya sendiri-sendiri, tetapi mereka semua memiliki tujuan yang sama yaitu melakukan penggulanggan pada blok code. 

Tipe loop yang paling sering digunakan adalah bentuk for loop. Yang terdiri dari tiga bagian:
Initialization, condition, dan increment. Contoh code:

```
for (Initialization; condition; increment) {
    // execute prompt
}
```

Initialization adalah bagian dimana kita menentukan nilai awal ( initial value for loop counter ). Condition adalah persyaratan yang harus dipenuhi agar loop bisa bergerak. Bagian increment adalah tempat dimana kita menghitung sudah berapa banyak putaran pada loop. 

contoh code for loop:
```
for (let i = 1; i <=5; i++){
    console.log(i)
}
```

Tipe loop selanjutnnya adalah while loop. While loop memiliki bentuk yang lebih simple yaitu hanya berisi condition yang spesifik saja. Contoh code:

```
while (condition) {
    // execute prompt
}
```

Kita bisa membuat loop yang serupa dengan formloop diatas dengan cara:
```
let i = 1 

while (i <= 5){
    console.log(i)
    i++
}
```

Sedangkan bentuk loop terakhir yaitu do-while, yaitu dimana loop akan berjalan terlebih dahulu lalu akan dilakukan check pada condition, jika sesuai dengan condition maka loop akan dijalankan lagi. Bentuk do-while menyerupai while loop. 


Format do-while 
```
do {
    // execute prompt
}
while (condition)
```

Contoh code do-while 
```
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

## Insert variabel to string ( masukan variabel )
back tick

`String text ${expression}`

https://stackoverflow.com/questions/3304014/how-to-interpolate-variables-in-strings-in-javascript-without-concatenation





## Reference: 
- https://www.golinuxcloud.com/javascript-if-not/ 
- https://www.w3schools.com/js/js_comparisons.asp
