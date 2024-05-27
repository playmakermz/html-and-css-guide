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




## tahap selanjutnya 

membuat file `item01.js` yang menjadi penampil data 

```
//item01.js 

function Todos({todos}){

}
```








### Reference 
- https://www.freecodecamp.org/news/build-a-todo-app-from-scratch-with-reactjs/ [ Detail Guide ]
- https://github.com/iamspruce/create-a-todo-app-with-React [ Source Code ]
- https://create-a-todo-app-with-react.vercel.app/ [Output]
- https://vercel.com/new?filter=next.js [ Deploy ]

- https://stackblitz.com/edit/simple-react-todo-example-qevigz-hyjxhf?file=index.js [Simple react todo]
