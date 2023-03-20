# Fundamental concept of Javascript

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
- Remainder (%)


```
let x = 5;
let y = 10;
let z = x + y; // z equals 15
```

comparison operator di javascript:
Equal to (==)
Not equal to (!=)
Strict equal to (===)
Strict not equal to (!==)
Greater than (>)
Less than (<)
- Greater than or equal to `(>=)`
- Less than or equal to '(<=)'



## Expression 

```
let x = 5
let y = 10 

let z = x + y 
let i = (x * y) - x 
```

Expression adalah kombinasi dari operator dan nilai, yang akan menghasilkan suatu nilai yang baru.
