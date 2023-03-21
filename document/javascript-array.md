# Array 

Pada Javascript, array adalah sebuah object special yang dapat menyimpan nilai / value. Value tersebut bisa berbentuk berbagai macam, Termasuk adalah array itu sendiri, object, function dan lain-lain.

- contoh array:
```
const myArray = [1, 2, 3, 4, 5];
```

- untuk menampilkan data di dalam array sesuai dengan index
```
const firstElement = myArray[0];
```

- atau menimpa data didalam Array
```
myArray[2] = 10;

```

- menambahkan data ke bagian akhir dari array 
```
myArray.push(6);

```

## Tipe method didalam array 

```
push(), pop(), shift(), unshift(), splice(), concat(), slice(), join(), reverse(), sort(),
```

## array of objects

array of object termasuk dalam salah satu bentuk cara penyimpanan data ( relation data ) pada variabel. Yang dimana setiap element didalam array tersebut adalah object yang berisi propertie dan value. 

contoh code:

```
let students = [
  { name: 'Alice', age: 20, major: 'Computer Science' },
  { name: 'Bob', age: 22, major: 'Mathematics' },
  { name: 'Charlie', age: 21, major: 'Chemistry' }
];
```

- object adalah ini {}
- contoh properti, "name"
- contoh value, "alice"

Kita bisa akses setiap properti dari individu pada object dengan cara:

- `students[0].name`
- `students[0]['name']`

Kita juga bisa mengakses semua properti pada array dengan loop:

```
students.forEach(function(student) {
  console.log(student.name + ' is ' + student.age + ' years old.');
});
```

Nilai didalam array of object bisa kita rubah dengan cara:
```
students[0].name = 'Budi'
```


**bentuk simple dari array of object**
```
let dataDiri = {nama: 'budi', hobby: 'memasak'}

dataDiri.nama // Untuk menampilkan value pada properti "nama"
```

## map()

Pada Javascript "array map()" method dapat digunakan untuk membuat array baru dengan menambahkan function didalamnnya. "map()" method adalah suatu function yang dapat menerima callback function sebagai argument. Callback function yang menjadi argument akan dipanggil pada setiap element didalam array, dan itu akan menghasilkan 'return' value yang akan menjadi array baru saat sudah selesai.

Contoh format dari map:
```
arr.map(callback(argument)) {
 return argument;
}
```

"map()" method akan menghasilkan array baru yang berisi hasil dari pemmanggilan "callback" function pada setiap element didalam original array. 

Sebagai contoh dari "map()" kita bisa buat function yang akan meghasilkan semua element didalam array di kali dua:

```
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function(number) {
  return number ** 2;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

Pada contoh diatas ini, pada "map()" method  variabel "number" akan menggambil setiap element didalam array dan juga sebagai representasi mereka. Callback function akan memproses element yang diambil dan dipangkat dua. Sedangkan "map()" method akan menghasilkan array baru dengan nilai yang sudah dimodifikasi.

Callback pada "map()" method bisa kita tulis juga seperti ini:

```
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(number => number ** 2);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

```

Sebagai tambahan "map()" juga bisa digunakan pada array of object seperti ini:

```
const persons = [
  { name: 'Alice', age: 23 },
  { name: 'Bob', age: 37 },
  { name: 'Charlie', age: 19 },
];

const personNames = persons.map(function(person) {
  return person.name;
});

console.log(personNames); // Output: ['Alice', 'Bob', 'Charlie']

```





## Reference:
- https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
