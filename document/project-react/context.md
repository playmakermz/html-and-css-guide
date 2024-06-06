# Context  

context adalah konsep atau tool yang dapat memudahkan kita untuk melakukan export import dari `state` dan `event` didalam suatu component. 

sekenario penggunaan. Kita membuat banyak component, dan hanya ada satu component yang menyediakan `state` dan `event`. Kita bisa membagikan itu ke component lain dengan tool `Context`. 

## contoh 

disini ada dua compoennt, `App.js` dan `item00.js`. kita ingin mengirim state dan event dari `App.js` ke `item00.js`. 

### tahap awal 

```
// App.js 

import logo from './logo.svg';
import './App.css';
import React, { useState, createContext } from 'react'
import Item00 from './item00'

export const TodoContext = createContext()
```

break: 
- kita import `createContext` - adalah tool "Context" itu sendiri. 
- kita import `Item00` yang akan dipangil lagi ke App.js. 


```
//App.js 
let [count, setCount] = useState(0)
```

selanjutnya 

```
 <TodoContext.Provider value={{ count, setCount }}>
<Item00 />
</TodoContext.Provider>
```
break :
- `TodoContext.Provider value={{}}` - adalah mendaftarkan, state atau event apa saja yang akan kita kirim. 
- maka semua compoennt yang terbungkus oleh `TodoContext` akan bisa akses state tersebut. 


### tahap selanjutnya 

```
//item00.js 

import React, {useContext} from 'react'
import { TodoContext } from './App'

let {count, setCount} = useContext(TodoContext)
```

dengan begini maka component file `item00.js` bisa melakukan akses kepada state dan event yang dikirim oleh `App.js`

***
# Note Context
***
## Pada file utama ( export )
harus ada 
- `{createContext}`
- `export let TodoContext = createContext()` - tempatkan pada luar function
- `<TodoContext.Provider value={{ state, setState }}>` - Masukan component didalam provider
- `</TodoContext.Provider>`

## pada file secondary ( import )
harus ada: 
- `import {useContext} from 'react'`
- `import {TodoContext} from './App'`
- `let {state, setState} = useContext(TodoContext)`

***
# note Tanpa context 
***
## file utama (Export)
- `function Header(){}` - Contoh data yang dikirim 

- `<NewItem Header={Header}/>` - cara mengirim 

## File secondary (import)
- `function NewItem({Header}) { Header() }` - cara menerima

***
# Aturan dasar 
***
- Nama component wajib huruf besar diawal!.


## Hasil akhir 
[context sc](../../code/jsPro/context-ts)
