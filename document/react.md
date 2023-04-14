# React Js

ReactJs adalah salah satu open-source library Javascript yang digunakan untuk membuat user interface (UI) pada halaman website dan aplikasi mobile. ReactJS dibuat dan dibangun oleh Facebook dan ReactJS cukup populer di antara developer.

ReactJS Library menggunakan bentuk virtual dari DOM (Document Object Model) yang membantu kita untuk membuat representasi ringan dari DOM asli dan secara tidak langsung mengantikan DOM manual, untuk menjadi proses update UI lebih efisien.

Beberapa Fitur Populer dari ReactJs:
- JSX: adalah syntax, untuk menambahkan kode html melalui perintah Javascript
- Virtual DOM: Reperentasi dari DOM yang lebih ringgan, agar Update UI lebih efisien.
- Component-based Architecture: Membantu kita untuk menggunakan komponent UI yang sudah ada (Reusable). 
- One-way data Binding: menyajikan jalan simple dan efisient untuk mengatur data di dalam aplikasi
- Declarative Programming: Memperbolehkan kita sebagai developer untuk mendeskripsikan seperti apa UI itu bekerja

ReactJS dapat dikombinasi dengan banyak library, seperti Next.js dan lain-lain. Yang menjadikan reacjs Menjadi lebih populer.

## Jquery atau react?
- Menurut chatgpt

Tidak harus mempeljarai Jquery sebelum React. Jquery digunakan untuk mengatur DOM dan react juga bisa mengatur DOM oleh karena itu pelajari saja versi teknologi yang lebih baru.

## React JSX 

Fitur untuk menulis kode HTML didalam Javascript. 
Ada beberapa Persyaratan untuk JSX ini: 


***
## Cheatsheet 

### Menambahkan variabel JSX
`const CSX = <p> Ini adalah p </p>;`
atau 
`const csx = (<ul> <li>ini </li>  <li>ini </li>   </ul>  )`


### Menambahkan Comment 
`const csx = (<ul> <li>ini </li> {/*Ini komment*/}  <li>ini </li>   </ul>  )`

Ref: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-add-comments-in-jsx/301376

### Menimpa element lama | Render 
Menimpa element lama dengan element dari react 
```
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, world!</h1>;

ReactDOM.render(element, document.getElementById('root'));

```

### mengatur style dari JSX | Menambahkan class
```
import React from 'react';

function MyComponent() {
  return (
    <div className="my-class">
      <h1>Hello, world!</h1>
      <p>This is my component.</p>
    </div>
  );
}
```
Penggunaan "className" adalah bentuk reserved dari "class" attribute pada html. 

### Untuk tag element yang tidak memiliki kontent | satu tag
```
import React from 'react';

function MyComponent() {
  return (
    <div className="my-class">
      <h1>Hello, world!</h1>
      <br /> 
      <hr />
      <p>This is my component.</p>
    </div>
  );
}
```

yang awalnya seperti ini `<br>` kita tulis menjadi `<br />`


<!-- 
Check list:

- Buat React Component, menggunakan "class" dan extends "React.Component"

-->


## Referensi:

- https://www.niagahoster.co.id/blog/react-js-adalah/?gclid=Cj0KCQiAx6ugBhCcARIsAGNmMbi_g36zJkerxEangrozL6QmcfFd7ZZwtxXRiqvmDhPGnGX4Jt_rrM0aAtnGEALw_wcB


