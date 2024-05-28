# Membuat Todo App 

Pada tahap awal ini akan digunakan 3 component: 

- App 
- item00
- item01 


Fungsi App 
- Bisa melaklukan input data 
- data input dapat ditampilkan 
- memiliki fitur interactive dengan "checkbox"
- data yang dipilih bisa dihilangkan.
    

## App.js halaman utama 

tidak ada perubahan data pada App.js hingga akhir. 

```Js
import logo from './logo.svg';
import './App.css';
import Item00 from './item00'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Item00 />
      </header>
    </div>
  );
}

export default App;

```

## Pengaturan tambahan untuk index.css 

```
.inCh {
  display: flex;
}
```

cukup tambahkan code diatas

***
## Bagian Pertama 
***

buat file awal yaitu `item00` dimana kita akan membuat array, dan function disini. 


Tujuan awal adalah: 
- membuat dua component yang terhubung 
- `item00` akan memanggil `item01` disetiap loop map()
- `item00` akan mengirim data function, atau state ke `item01`

```Js
//item00.js 
import React, { useState } from 'react'
import Item01 from './item01'

function Item00() {

    let [todos, setTodos] = useState([
        {id: 1, name:'appel', completed:false},
        {id: 2, name:'manggo', completed:false},
        {id: 3, name:'banana', completed:false},
]) // ini adalah state update 'setTodos'

    return (
        
        <div>
<Item01 todos={todos} />
        </div>
)
}

export default Item00
```

Breakdown code: 
- `todos={todos}` adalah cara kita mengirim data dari file `item00` ke `item01` dimana data yang dikirim adalah state




## tahap selanjutnya 

membuat file `item01.js` yang menjadi penampil data 

```Js
//item01.js 

function Todos({todos}){
    return(
    <div>
    {todos.map((todo) => {
    let itemSp = (
        <div className="inCh">
        
        <input type="checkbox"/>

        <p key={todo.id}>{todo.name}</p>

        <button onClick={}>x</button>

        </div>
    )
    return itemSp

    })}
    
    </div>
)
}

export default Todos
```

Breakdown code: 
- jangan lupa masukan `todos` sebagai parameter
- key adalah kunci penting dalam menampilkan data dari array. untuk memastikan kita bisa melakukan debuging dan mengurangi resiko error

***
# Bagian 2 
***

tujuan:

- membuat item secara spesifik memiliki fitur interactive, dimana mereka akan secara otomatis mengalami perubahan pada `textDecoration`. 
- kita gunakan checkbox untuk menjadi indikator, dan input perubahan. 


```Js
//item00.js 
// didalam function Item00()

function toggleCo(todoId) { // efek interaktive
        let abc = todos.map((todo) => {
            if (todo.id === todoId){
                todo.completed = !todo.completed
                alert(todo.name)
            }
            return todo // bagian map
        })
        setTodos(abc)
    }
```
informasi variabel:
- `todoId` didapatkan dari `item01.js` yang mengirim data yaitu `todo.id` dari item yang menerima interaksi.
- `todo` adalah array spesifik didalam list, dengan menggunakan `map()` kita bisa mendapat "array ocject" secara spesifik dari dalam list "array biasa"

Break donw code: 
- kita membuat array baru dengan aturan `map()`
- dimana pada array baru ini, kita melakukan "search" `todo.id`
- jika sudah ditemukan, maka ubah nilai "true/false" menjadi sebaliknya `!todo.completed`
- setelah `map()` selesai
- ubah state dengan cara `setTodos(abc)` 
- dimana `(abc)` adalah hasil perubahan keseluruhan array dari `map()`


lalu didalam Function Item00 return() 
```JS
//item00.js
<Item01 todos={todos} toggleCo={toggleCo} />
```

lakukan update pada Item01, dima kita akan mengirim function `toggleCo` kedalam component lain

## Tahap selanjutnya 

```Js
//item01.js
function Todos({todos, toggleCo,})
{

}
```

lakukan update parameter `toggleCo`. 

```Js
//item01.js

<input type="checkbox"  className=""
                onChange={() => toggleCo(todo.id) }
                />
```

lakukan update pada element "checkbox", dimana jika element tersebut menerima interaksi, maka function didalamnya akan dipanggil. 

***
# Bagian 3
***

tujuan: 
- dapat menghapus item spesifik


pada `item00.js`
```Js
//item00.js 
// Item00()

function todoDelete(todoId){ // menghapus element spesifik
        let abc = todos.filter((todoMt) => {
            return todoMt.id !== todoId
        })
        setTodos(abc)
        // todoId menerima parameter dari onclick, dan todoIt adalah pemangilan berkala dari filter
        // filter sama seperti map, dimana dia juga melakukan loop. untuk memastikan semua telah sesuai
        // https://www.digitalocean.com/community/tutorials/js-filter-array-method
    }
```
Informasi: 
- `todoId` - ini kita dapatkan dengan mengirim `todo.id` dari "button" pada file `item01.js`. dimana kita akan mendapatkan item spesifik yang ingin kita hapus.

breakdown: 
- `todos.filter()` - bertujuan untuk mencari "property" yang sesuai didalam array. 
- `return todoMt.id !== todoId` - ini adalah yang dicari, dimana semua item yang memiliki berbeda property state `id` dengan `todoId` akan disimpan didalam array baru `abc`.
- `setTodos(abc)` - array baru `abc` akan disimpan kedalam `todos`. secara mudahnya ditimpa array lama `todos` menjadi array baru `abc`


### selanjutnya 

```JS
// item01.js 
// Item01() 

 <button onClick={() => todoDelete(todo.id)}>X</button>
```

- perbaiki "button" agar bisa mengirim informasi kepda function `todoDelete`
- `todo.id` ini kita dapatkan dengan memanggil fungsi `map()` kepada `todos` array state


***
# Bagian 4
***

tujuan:
- melakukan "record" pada setiap perubahan huruf didalam form 

untuk melakukan "recording" kepada semua nilai input dari "form" kita bisa mengunakan fungsi `onChange`.

pada file `item00.js`

```Js
//item00.js 
// inside Item00()
let [title, setTitle] = useState('')
```
- ini perlu kita buat "state" baru untuk menyimpan "value/str" dari form untuk sementara, setelah semua data complete. user bisa mengirim data sementara tersebut ke `todos`


### Selanjutnya 
```JS
//item00.js 
// inside function Item()
function handleChange(event){ // menerima perubahan sync dari form
    setTitle(event.target.value) // Mengambil nilai dari form real time
    // kita buktikan dengan alert(title)
    }
```
**Informasi**: `event` parameter tersebut kita dapatkan disaat kita melakukan pemanggilan dari tool pada file `item00.js` dengan fungsi `onChange`. 

Breakdown:
- `event.target.value` itu adalah nilai "str" yang kita dapatkan dari form. dan cara melakukan akses kepada "str" tersebut. 
- `setTitle` adalah untuk melakukan perubahan pada state `title`

### Selanjutnya
```
// item00.js 
// Item00() 

<input
                    title='Email'
                    value={title}
                    onChange={(event) => {handleChange(event)}} // menyimpan input realtime
                    />
```
Lakukan update pada element "input" didalam "form"


Breakdown: 
- `{title}` adalah memangil state baru yang kita buat. dimana state baru terssebut akan di update setiap kali user melakukan input 1 huruf. 
- `onChange` untuk membuat function selalu dipanggil setiap kali terdapat perubahan pada form, gunakan `onChange`
- `(event) => {handleChange(event)}` ini adalah function yang panggil

***
# Bagian 5 
***

Tujuan:
- Membuat fitur, input dan melakukan penyimpanan kepada `todos`
- terdapat dua function
    - `addItem()` - digunakan untuk menyimpan hasil input "form" dan menyimpan hasil akhir kedalam `setTodos()`
    - `handleSubmit()` - digunakan untuk menerima perintah dari "form", memangil function `addItem()`, dan melakukan pengubahan pada `setTitle()` agar setiap kali kita melakukan submit, form akan dibersihkan dari awal


pada file `item00.js`

```
// item00.js 
// Item00()

function addItem(todoTitle)  { // Fungsi untuk membuat object baru dan memasukan kedalam array todos
            if (todoTitle === '') {
              return ''
            }
        
            const newTodo = {
              id: todos.length + 1, // mereujuk ke state todos
              name: todoTitle,
              completed: false,
            }
        
            const updatedTodos = todos.concat(newTodo)
            setTodos(updatedTodos) // merujuk kepada set setting
          }
```
informasi: 
- `todoTitle` - didapatkan dari function lain `handleSubmit()`

break:
- `if (todoTitle === '')` - jika form bnelum diisi, maka code dibawahnya tidak akan dijalankan. 
- `newTodo = {}` - addalah array object baru yang dibuat berdasarkan hasil input user. 
- `id: todos.length + 1` - itu berarti id baru akan dibuat berdasarkan, banyak item didalam array `todos`
- `todos.concat(newTodo)` - `concat` digunakan untuk mengabungkan array `todos` dengan `newTodo`. Yang menjadi `newTodo` adalah array urutan terakhir didalam `todos`.
- `setTodos(updatedTodos)` - simpan array baru tersebut, untuk menimpa array state lama `todos`

concat ref: https://www.w3schools.com/jsref/jsref_concat_array.asp


### Selanjutnya 

```Js 
// item00.js 
// Item00()
function handleSubmit(event){ // melakukan penyimpanan data
            event.preventDefault() // memastikan bahwasanya fitur browser tidak menginterfensi code
            addItem(title) // fungsi setter, dan state
            setTitle('')
        }
```
informasi: 
- `event` didapatkan disaat function ini dipanggil dari "form"
- `event.preventDefault()` digunakan untuk memastikan, proses react buatan kita tidak di interupsi oleh sistem browseer. 
- `addItem()` - panggil fungsi diatas 
- `setTitle()` - balikan perubahan pada state `title` yang menjadi representasi form, ke bentuk awal `''`

### Selanjutnya 

```
// item00.js 
<form onSubmit={(evet) => {handleSubmit(evet)}}>
```

perbarui "tag form" agar bisa menjalankan perintah tersebut disaat mereka dijalnakan. 


***
# Bagian Akhir
***

Hasil akhir code 

[Hasil akhir](../../code/jsPro/todo)


### Reference 
- https://www.freecodecamp.org/news/build-a-todo-app-from-scratch-with-reactjs/ [ Detail Guide ]
- https://github.com/iamspruce/create-a-todo-app-with-React [ Source Code ]
- https://create-a-todo-app-with-react.vercel.app/ [Output]
- https://vercel.com/new?filter=next.js [ Deploy ]

- https://stackblitz.com/edit/simple-react-todo-example-qevigz-hyjxhf?file=index.js [Simple react todo]
