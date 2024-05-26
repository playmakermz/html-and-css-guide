## Pembuatan Todo app 

pada tahapan awal kita perlu untuk menjelaskan component apa saja yang perlu kita butuhkan untuk membuat Todo app.

Disini terdapat 4 component: 

- App: Component utama, yang akan menjadi halaman utama website (pembungkus semua component didalamnya).
- TodoForm: component yang berisikan formulir untuk memasukan input data.
- Todos / item01: adalah component yang membungkus hasil dari formulir yaitun `TodoItem`
- TodoItem / item00: adalah hasil dari input pada `TodoForm`


### Mengenai component

Terdapat dua cara membuat component: 
- Class component 
- Function component

untuk pembuatan component bisa mengunakan function, agar mengurangi kemungkinan bertabrakan dengan "legacy" lain.

Contoh React component dengan function 

```Javascript
import React, {useState} from 'react';

function App(){
    let [count, setCount] = useState(0)
    // count adalah bentuk dari 'state' dengan nilai 0
    // setCount akan menjadi function, untuk memperbarui count

    let handleClick = () => {
        setCount(count + 1) 
        // variabel 'setCount' menjadi penganti 'setState'. Istilahnya React Hooks
        // Jika ingin mengunakan setState 
        // this.setState({count: this.state.count+1})
    }

    return (
        <div>

<h1>{count}</h1>
<button onClick={() => {handleClick()}}> + </button>

        </div>
    )
}

export default App
```

kita juga bisa mengganti "value" didalam `useState` dengan list array of object seperti ini 

```
let [item, setItem] = useState([
    {id:2, name: apple,},
    {id:3, name: manggo,},
])
```

Item tersebut akan disimpan pada `item` dan bisa kita modifikasi nantinya dengan `setItem`


Tahapan selanjutnya **untuk menampilkan semua list item** kita bisa gunakan cara `map()`. Seperti code dibawah 

```Javascript
import React, { useState } from 'react'

function Item00() {
    let [todos, setTodos] = useState([
        {id: 1, name:'appel'},
        {id: 2, name:'manggo'},
        {id: 3, name:'banana'},
]) // ini adalah state

return (
<div>
    <h1> Ini adsalh list item </h1>
        {todos.map((todo) => {
        return <p key={todo.id}>{todo.name}</p>
})}
    </div>
)
}

export default Item00
```

mengenai `{todo.id}` ini adalah aturan wajib pada react jika kita ingin menampilkan banyak item melalui array. akan terjadi error jika kita tidak menggunakanya.

## Membuat component yang bisa menenrima data 

Jadi pada kasus ini, kita akan membuat:
- component yang akan mengirim data dari file yang berbeda
- component yang akan menrima data, dan menjalankan map. 


file pertama 
```Javascript
// item00.js 

// Item00 akan menjadi bagian alternative dari App.js. semua perubahan ada disini
// pada pembelajaran dia adalah App.js dan TodoItem.js
import React, { useState } from 'react'
import Item01 from './item01'

function Item00() {
    let [todos, setTodos] = useState([
        {id: 1, name:'appel'},
        {id: 2, name:'manggo'},
        {id: 3, name:'banana'},
]) // ini adalah state update 'setTodos'

return (
<div>
    <h1> Ini adsalh list item </h1>
   <Item01 todos={todos}/>

    </div>
)
}

export default Item00
```

pada code diatas, kita dapat mengirim data kepada file `Item01`. Dimana kita mengirim dengan cara `todos={todos}`

- `todos=` adalah representasi dari 
- `{todos}` adalah representasi dari

### File selanjutnya 

```Javascript
// item01.js
// Item todos, mereka yang akan menampilkan item satu demi satu
// pada pembelajaran ini adalah Todos.js

function Todos({todos}) {
    return (
        <div>
          {todos.map((todo) => {return <p key={todo.id}>{todo.name}</p>})}
        </div>
      )
}

export default Todos
```

Pada code diatas kita menerima parameter yang dikirim dengan function, lalu kita gunakan sebagai array map.

***
## Chapter 2.1
***
# Melakukan update pada Todo 

dengan tujuan adalah :
- Memberikan indikasi perbedaan tampilan element jika `true atau false`
- Menghapus Todo 
- Menambahkan Todo 


## Memberikan indikasi tambahan kepada element 

pada contoh dibawah kita akan memberikan indikasi tambahan jika element memiliki salah satu property state true dan false. 

yaitu jika true maka element akan dicoret, jika tidak maka normal. 

Tahap pertama 
```Javascript
//item00.js
let [todos, setTodos] = useState([
        {id: 1, name:'appel', completed:true},
        {id: 2, name:'manggo', completed:true},
        {id: 3, name:'banana', completed:true},
]) // ini adalah state update 'setTodos'
```
Kita akan menambahkan property baru kepada array. 

selanjutnya pada file `item01.js`

```
// item01.js
function staUp(todo){
    if (todo.completed === true) {
      return { textDecoration: 'line-through' }
    } else {
      return { textDecoration: 'none' }
    }
}
```

kita akan membuat function didalam function.
dimana function ini akan menerima parameter dari `style={staUp(todo)}`. 

karena pada dasarnya `todo` disitu adalah iteration, yang membawa value spesifik dari setiap item yang dijalankan oleh map(). 

bisa dilihat pada code dibawah 

```Javascript
//item01.js 
// function Todos 

return (
        <div>
          {todos.map((todo) => {
            return <p key={todo.id} style={staUp(todo)}>{todo.name}</p>})}
        </div>
      )
```

seperti yang dapat dilihat pada code diatas:

- `map()` dengan iteration `todo` membawa identitas item secara spesifik. 
- `style={staUp(todo)}` disini kita akan memangil function untuk menentukan pengaturan css. 
- jika `todo.completed === true` maka akan dipakai aturan yang sudah kita buat 
- sedangkan `todo` disini adalah iteration yang bisa kirim untuk memberikan informasi kepada function `staUp()`

## Menambahkan checkbox dan interactive 

untuk menambahkan checkbox dan mengatur agar 2 element berbeda bisa sejajar kita lakukan seperti ini. 

pada `./index.css`
```
.inCh {
  display: flex;
}
```

pada `item01.js`

```Javascript
// item01.js 
// return untuk function Todos()

return (
        <div>
          {todos.map((todo) => {
            let itemSp = (
                <div className="inCh">
                <input type="checkbox"  className=""/>
            <p key={todo.id} style={staUp(todo)}>{todo.name}</p>
          </div>
          )
            return itemSp})}
        </div>
      )

```

kita jadikan satu input element dan p, dengan flexbox untuk mematikan mereka sejajar.


tahapan selanjutnya kita akan membuat function yang bisa kita gunakan jika checkbox dijalankan.

dengan fungsi function  adalah: 
- Bisa menerima parameter dari file lain 
- bisa melakukan perubahan pada property didalamnya.



tahpan pertama pada file `item00.js`
```Javascript
// item00.js 
// function Item00 

function toggleCo(todoId) {
        let abc = todos.map((todo) => {
            if (todo.id === todoId){
                todo.completed = !todo.completed
            }
            return todo
        })

        setTodos(abc)
    }

return (
<div>
    <h1> Ini adsalh list item </h1>
   <Item01 todos={todos} toggleCo={toggleCo}/>
        
    </div>
)
```

- kita menambahkan function didalam function.
- pada function tersebut kita memangil array map untuk melakukan perubahan. dengan alur seperti daibawah ini 
- kita mendapatkan `todo.id` untuk element secara spesifik, 
- setelah itu, kita lakukan gunakan map() untuk mencari informasi detail dari item yang kita gunakan. 
- jika sudah ketemu, maka ubah boolean dari property `completed`
- setelah itu, pada akhir map() kita kembalikan hasil dari todo yang telah kita ubah.
- dan hasil dari seluruh perubahan pada map() akan diverfikasi oleh `setTodos()` dan menjadi permanent.
- untuk mengirim function kepada component lain, kita gunakan `toggleCo={toggleCo}`


pada file `item01.js`
```Javascript
//item01.js 

function Todos({todos, toggleCo}){

return(
<input type="checkbox"  className=""
                onChange={() => toggleCo(todo.id) }
                />
)
}
```
- pada function `Todos` kita masukan parameter baru `toggleCo`
- kita lakukan perubahan pada "input" element. dimana kita tambahkan 
- `onChange{() => toggleCo()}` untuk memangil method dari file `item00.js`
- kita kirim identitas element secara spesifik dengan cara, `todo.id` agar diolah lagi pada function selanjutnya.


***
# Memberikan fungsi function 
***

disini memiliki tujuan untuk membuat button, dimana disaat button tersebut click() maka item spesifik akan dihapus. 

```
// item00.js 
// function Item00 
// Buat function, didalam function Item00. 
// buat function todoDelete(todoId)


function todoDelete(todoId){
    let abc = todos.filter((todoIt) => {
        return todoMt.id !== todoId
    })
    setTodos(abc)
        // todoId menerima parameter dari onclick, dan todoIt adalah pemangilan berkala dari filter
        // filter sama seperti map, dimana dia juga melakukan loop. untuk memastikan semua telah sesuai
        // https://www.digitalocean.com/community/tutorials/js-filter-array-method
    }

return (
<div>
    <h1> Ini adsalh list item </h1>
<Item01 todos={todos} toggleCo={toggleCo} todoDelete={todoDelete}/>
    </div>
)
```

- `todoDelete` adalah function baru yang kita buat, kita kirim semua function ke file `item01.js`


Selanjutnya buat file 

```Javascript
// item01.js 
// simpan code seperti ini, function Todos return 

<div>
          {todos.map((todo) => {
            let itemSp = (
                <div className="inCh">

                <input type="checkbox"  className=""
                onChange={() => toggleCo(todo.id) }
                />
            <p key={todo.id} style={staUp(todo)}>{todo.name}</p>

              <button onClick={() => todoDelete(todo.id)}>X</button>
              {/* ================= function baru =============== */}

          </div>
          )
            return itemSp})}
        </div>
```

- `button` dengan fungsi `onClick()`
