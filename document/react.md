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

### Melakukan update pada state 

state tidak bisa dilakukan perubahan secara langsung, seperti dua contoh dibawah ini. 

```
this.state = {name: 'udin'} // tidak bisa 

this.state.name = 'udin' // tidak bisa 
```

**cara mengubah state adalah dengan** `setState`

```
this.setState({name:'udin'})
```

### Cara memperbarui state 

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

        <h1>Hello, namaku adalah {this.state.name}!</h1> {/* <===== ini akan berubah sesuai dengan state saat ini!!!*/}

        <button onClick={() => {this.setState({name:'udin'})}}> namaku udin!! </button>
    );
  }
}

export default App;

```

pada method render, terdapat event ( onclick ), dan state. 
code diatas adalah untuk mengubah nilai state awal menjadi apa yang kita ingin kan.


### cara lain untuk melakukan perubahan state 

```
// Import React from ''
import React from 'react';

// lakukan inheritance dari component
class App extends React.Component {


    constructor(props){
        super(props);
        this.state = {name:'Nama Ku'}
    }

    fuctClick(arg) {
        this.setState({name: arg})
    }

    render () {
        return (

            <h1>Hello, namaku adalah {this.state.name}!</h1> {/* <===== ini akan berubah sesuai dengan state saat ini!!!*/}

            <button onClick={() => {this.fuctClick('udin')}}> udin </button>
    );
  }
}

export default App;

```


### Wrap up 01 ( aturan state diatas )

```
import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props){
        this.state = {nama:'makanan'} // Tahap 1. deklarasi state 

}}

    handleClick(arg) {
        this.setState({nama: arg}) // Tahap 3. Melakukan perubahan!!
}

    render() {
        return (
            <div> 
                <h1> Makanan yang kusuka adalah {this.state.nama} </h1>
                {/*<====== Tahap 2. menampilkan state */}


                <button onClick={() => {this.handleClick('Soto Ayam')}}> suka soto ayam </button>
                {/* <========= Tahap 3 Melakukan perubahan */}

            </div>
)}


}

```

Tahapan:
1. Deklarasi state pada constructor. Contoh `nama:'value'`
2. Menampilkan set. Contoh `{this.state.nama}`
3. Melakukan perubahan dengan onClick dan `setState`


### Urutan alur menampilkan React 

- App.js (JSX) => akan diberikan kepada 
- index.js => code JSX akan proses disini ( mengalami perubahan  )
- index.html => tujuan akhir, code JSX akan ditimpa disini. 

**Contoh process**
```
// App.js 

class App extends React.component {
    render(){
        return (
            <div>
            <h1>Hello World</h1>
            </div>


)
}
}

// index.js  ( Tahap kedua )

import App from './components/App'
ReactDOM.render(<App />, document.getElementById('root'))


// index.html ( tahap terakhir )
<body>
    <div id="root"></div>
</body>

```


### Memasukan css kedalam JSX 

```
render(){
    return (

        <div>
            <h1 className="title">Hello World</h1>
            <h2 className="sub title"> Hello juga </h2>
        </div>

)
}
```

- Cara penulisan attribute class berbeda dengan pada HTML biasa.

***


# Membuat component baru 


**boleh 2 atau lebih component selain App.js**

- Tahap Pertama, Pembuatan component baru. pada folder App.js 


```
//file: ekstra.js 
import React from 'react';

class ekstra extends React.Component {
    render() {
        return (
            <div className='exstra-container'>
                <p> ini berasal dari component extra </p>
            </div>
)
}
}

// Export component 
export default ekstra;
```

- tahap kedua 



```
// File: App.js
import React from 'react'
import ekstra from './ekstra'

class App extends React.Component {
    render(){
        return(
            <div>
                <ekstra /> {/* <=== Tag ini berasal dari component baru */}
            </div>

)
}
}
```

catatan kecil, component dapat digunakan berkali-kali.

### cara untuk melakukan perubahan pada component JSX 

```
// file App.js
import React from 'react'
import ekstra from './ekstra'

class App extends React.Component {
    render(){
        return(
        <div>

            <ekstra 
                nama="udin"

            /> 


            <ekstra
                nama="budi"

            />


    </div>

)
}
}
```

- pada `<ekstra />` kita dapat menambahkan **props** didalamnya yang akan membantu dalam melakukan perubahan secara spesifik.

Setelah melakukan perubahan pada `App.js` dilanjutkan pada `ekstra.js`

```
// ekstra.js 

import React from 'react';

class ekstra extends React.Component {
    render() {
        return (

            <div className='exstra-container'>
            <p> ini berasal dari component extra 

            dan ini adalah namaku {this.props.nama}

            </p>


        </div>
)
}
}

// Export component 
export default ekstra;
 

```

### Cara membuat component secara otomatis

dibawah ini adalah contoh membuat component otomatis. semisal terdapat list, maka component yang akan dibuat akan menyesuaikan dengan berapa banyak item pada list.


```
// file App.js
import React from 'react'
import ekstra from './ekstra'

class App extends React.Component {
    render(){

        let namaPeserta = [
        {name: 'udin'},
        {name: 'budi'},
        ]

    return(
        <div>

        {namaPeserta.map((item) =>{

            return (

                <ekstra
                nama={item.name}
                />

                    )
        }
) {/*<== bagian akhir dari map method */}
}


</div>

)
}
}

```

Pada code diatas kita membuat code didalam JSX untuk membuat sebuah loop yang akan membuat component `<ekstra />` sebanyak item pada list yang diberikan.

ini bisa dilakukan dengan bantuan `map` method.


## Destructuring Array parameter

Tujuan adalah menggunakan value pada array sebagai parameter.

```
function math({a,b}) {
    console.log({a})
    return a + b 
}

console.log(math({a:1, b:2}))
```

- Parmeter dibuat dengan `{}`
- Menambahkan value dengan `math({a:1, b:2}))`



<!-- 
Todo List:


- buat instalasi react local computer


-->

## Catatan tambahan
- [Membuat banyak content](./react02.md)
- [Membuat element interaktive](./react03.md)
- [instalasi react](./react-install.md)
- [membuat formulir interactive](./react-formulir.md)

## Referensi:

- https://www.niagahoster.co.id/blog/react-js-adalah/?gclid=Cj0KCQiAx6ugBhCcARIsAGNmMbi_g36zJkerxEangrozL6QmcfFd7ZZwtxXRiqvmDhPGnGX4Jt_rrM0aAtnGEALw_wcB


