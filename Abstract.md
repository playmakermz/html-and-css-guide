# Lanjutan Abstract react 

Kita juga bisa menggunakan `map()` untuk menampilkan list dari item yang kita inginkan.

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
