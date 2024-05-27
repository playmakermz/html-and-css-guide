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





***
# Bagian 4
***

tujuan:
- melakukan "record" pada setiap perubahan huruf didalam form 
- melakukan penyimpanan pada element yang dikirm melalui form.


***
# Bagian 5
***

Hasil akhir code 

[Hasil akhir](../../code/jsPro/todo)


### Reference 
- https://www.freecodecamp.org/news/build-a-todo-app-from-scratch-with-reactjs/ [ Detail Guide ]
- https://github.com/iamspruce/create-a-todo-app-with-React [ Source Code ]
- https://create-a-todo-app-with-react.vercel.app/ [Output]
- https://vercel.com/new?filter=next.js [ Deploy ]

- https://stackblitz.com/edit/simple-react-todo-example-qevigz-hyjxhf?file=index.js [Simple react todo]
