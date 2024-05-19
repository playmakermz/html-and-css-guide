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

### Penempatan dari JSX 

JSX hanya ditempatkan pada bagian "return".

atau jika ingin membuat code Javascript, maka mereka harus tetap berada pada bagian method "render()."

```

// Import React from ''
import React from 'react';

let text = "Halo dunia ini"

// lakukan inheritance dari component
class App extends React.Component {
  render () {
    return (
      <h1> {text} </h1>
    );
  }
}

export default App;

```

untuk melakukan export code Javascript kedalam JSX, bisa dilakukan dengan cara tersebut. aturan variabel tetap pada method render().

```
{ namaVariabel }
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

pada render JSX hanya diperbolehkan untuk mengirim satu element.
**tidak boleh ada banyak container!**.

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

### Contoh lain dengan class

```

// Import React from ''
import React from 'react';

// lakukan inheritance dari component
class App extends React.Component {
  render () {
    return (
      <h1>React Berjalan</h1>
    );
  }
}

export default App;

```

### Menulis komentar pada JSX

```
{/* Ini adalah Komentar  */}
```

### Memasukan attribute DOM kedalam JSX 

```
import React from 'react';

class App extends React.Component {

render(){
    return (

        <div> 

            <h1>test button</h1>

            <button onClick={()=> {console.log('halo terminal')}}> click me! </button>


        </div>
            )
        }
}
```

### Tool pada React 
- event = Adalah bentuk interaksi dari JSX kepada user. ini memiliki contoh seperti interaksi `onClick()` pada script.

- state = state adalah nilai yang dapat kita ubah berdasarkan adaannya tindakan dari user.

contoh deklarasi state.
```
\\ Class React.Component {

constructor(props){
    super(props);
    this.state = {name:'Nama Ku'}
                }

}
```

**Contoh deklarasi state, didalam JSX**
```
// Import React from ''
import React from 'react';

// lakukan inheritance dari component
class App extends React.Component {


constructor(props){
    super(props);
    this.state = {name:'Nama Ku'}
    }

  render () {
    return (
      <h1>Selamat Datang {this.state.name}!</h1>
        );
  }
}

export default App;
```



<!-- 
Todo List:


- buat instalasi react local computer


-->

## Catatan tambahan
- [Membuat banyak content](./react02.md)
- [Membuat element interaktive](./react03.md)
- [instalasi react](./react-install.md)
- [membuat formulir interactive](./react-formulir.md)
- [Add, Update, List JSX](./project-react/add-update-list.md)


## Contoh project
- [Membuat button menambahkan element](./project-react/add-component.md)
- [Membuat konsep counter](./project-react/counter.md)
- [membuat element muncul dan hilang](./project-react/add-delete.md)

## Referensi:

- https://www.niagahoster.co.id/blog/react-js-adalah/?gclid=Cj0KCQiAx6ugBhCcARIsAGNmMbi_g36zJkerxEangrozL6QmcfFd7ZZwtxXRiqvmDhPGnGX4Jt_rrM0aAtnGEALw_wcB


