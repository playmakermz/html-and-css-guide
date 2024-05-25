## Pembuatan Todo app 

pada tahapan awal kita perlu untuk menjelaskan component apa saja yang perlu kita butuhkan untuk membuat Todo app.

Disini terdapat 4 component: 

- App: Component utama, yang akan menjadi halaman utama website (pembungkus semua component didalamnya).
- TodoForm: component yang berisikan formulir untuk memasukan input data.
- Todos: adalah component yang membungkus hasil dari formulir yaitun `TodoItem`
- TodoItem: adalah hasil dari input pada `TodoForm`


### Mengenai component

Terdapat dua cara membuat component: 
- Class component 
- Function component

untuk pembuatan component bisa mengunakan function, agar mengurangi kemungkinan bertabrakan dengan "legacy" lain.

Contoh React component dengan function 

```
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


## Update terakhir pada bagian 
Membuat component component baru


