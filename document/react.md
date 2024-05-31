# React Js


ReactJs adalah salah satu open-source library Javascript yang digunakan untuk membuat user interface (UI) pada halaman website dan aplikasi mobile. ReactJS dibuat dan dibangun oleh Facebook dan ReactJS cukup populer di antara developer.

beberapa contoh pengguna react adalah Netflix, Airbnb, dan uber. 

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

### membuat component

**komponent React** adalah suatu blok code dasar dari aplikasi React. komponen adalah sebuah potongan kode yang dapat kita gunakan kemabali yang mewakili bagian dari UI. komponen dapat berupa sebuah element sederhana, atau bentuk yang lebih complex.

Manfaat komponen react:

- Modularitas: komponen React adalah suatu bagian kecil dari keseluruhan UI. Ini akan sangat memudahkan kita untuk melakukan pemeliharaan code kedepannya.
- Dapat digunakan kembali, sama seperti konsep function
- Enkapsulasi: semua variabel didalam komponen, hanya bisa diakses oleh komponen tersebut, dan tidak akan mempengaruhi komponen lain.

Terdapat dua bentuk componentL:
- function component
- Class component

## Variabel JSX 

```
const buttonText = <button>Click Me!</button>;

function MyComponent() {
  return (
    <div>
      {buttonText}
    </div>
  );
}

```

## comment pada JSX 

```
// Ini adalah komentar satu baris tentang komponen

function MyComponent() {
  return (
    <div>
      {/* Ini adalah komentar multi-baris
          tentang isi komponen */}
      <h1>Hello, World!</h1>
    </div>
  );
}

```

# aturan JSX 

- untuk beberapa attribute HTML, kita harus menggunakan "camelCase" sebagai penulisan. Contoh: `onClick`, `onChange`
- untuk penamaan attribute class adalah `className`
- untuk single tag, gunakan seperti ini `<img src="#" />` harus memiliki penutup akhir. `<br />`
- penulisan inline css `<p style={{ color: 'red', fontSize: '20px' }}>Teks merah dengan ukuran 20px</p>`
- penulisan jika didalam JSX, `<button onClick={() => alert("Hello, World!")}>` perjelas informasi yang kita berikan itu string. 
- perhatikan dalam membuat JSX, harus terdapat container!, jika didalam JSX terdapat banyak eleemnt.

src: https://legacy.reactjs.org/docs/introducing-jsx.html

## React JSX 

Fitur untuk menulis kode HTML didalam Javascript. 
Ada beberapa Persyaratan untuk JSX ini: 

## JSX (Javascript XML)

adalah sebuah interaksi antara Javascript dengan HTML. dimana kita bisa menambahkan code Javascript dengan HTMl secara bersamaan.

contoh:

```
<p> {1 + 2} </p>
```
hasilnya adalah 3 

## State 

state adalah bentuk konsep dimana kita bisa menyimpan suatu data, dan data tersebut bisa kita panggil, dan ubah kapan saja. konsep `state` itu sama seperti `property` pada class. 

```
constructor(props){
        super(props)
        this.state = {count: 0}
    }
```

## Event 

Event didalam React adalah suatu fungsi dimana user bisa melakukan interaksi dengan component yang kita buat. untuk melakukannya kita akan menggunakan `method` untuk menerima interaksi. 

```
 <button onClick={() => {this.handleClick()}}> + </button>
```

## akses state 

menampilkkan state kedalam JSX. 

```
 <h1>{this.state.count}</h1>
```

## perbarui state  

```
this.setState({count : this.state.count + 1})
```

- dimana `setState` adalah suatu method, yang bisa kita gunakan untuk melakukan perubahan state. 
- `count` adalah state yang dipilih 
- `this.state.count` adalah nilai didalam state, dan cara memangil mereka 
- hasil dari aritmatika tersebut, akan disimpan ke `count` state

***
# Bagian 2 
***

## Membuat Style ( Inline CSS ) 
```
<p  style={styles.colorP}> Ini berwarna merah </p>

// Styles bisa kita tempatkan diluar dari class, atau function.
let styles = { 
colorP: {color: 'red', fontSize: '40px'},
colorH1: {color: 'red', fontSize: '40px'},
}
```

## membuat banyak component 
[Source Code](../code/jsPro/membuat-banyak-component)

## Method map() 

```
render(){
        let abc = [{id: 1, name:'appel', completed:false},
    {id: 2, name:'manggo', completed:false},
    {id: 3, name:'banana', completed:false},]

        return(
            <div>
                {abc.map((item) => {
                    return(<p>{item.name}</p>)
                })}
            </div>
        )
    }
```

## Pemanggilan JSX 
terdapat dua cara pemanggilan JSX:

```
function App() {
    let abc = <p> Saya Adalah JSX Variabel</p>

    function Acc(){ // untuk render Element JSX wajib huruf besar pada awalan
        return  <h1> Saya adalah JSX Function</h1>
    }

    return(
        <div>
            {abc}
            <Acc />
        </div>
    )
}
```

Aturan diatas akan berlaku jika component memiliki bentuk function. 

jika component memiliki bentuk class maka cara pemanggilan akan seperti ini: `{this.Acc()}`

method yang dipanggil JSX, harus huruf besar pada awalan. 

## { stateName ? }

```
class PokeDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {ch: true}
    }

    Acc(){ // untuk render Element JSX wajib huruf besar pada awalan
        let abc = <p> Saya Adalah JSX Variabel</p>
        return  <h1> Saya adalah JSX Function</h1>
    }

    render(){
        return(
            <div>
                {this.state.ch? this.Acc() : <p>hi</p> }
            </div>
        )
    }
}
```

Ini adalah konep sederhana, dimana kita menempatkan dua element, dan salah satu element akan di render jika nilai `this.state.ch` adalah `true`. 

contoh diatas, yang akan dirender adalaj `this.Acc()`

***
# Bagian code 
***
## Cheatsheet 

### Menambahkan variabel JSX
`const CSX = <p> Ini adalah p </p>;`
atau 
`const csx = (<ul> <li>ini </li>  <li>ini </li>   </ul>  )`


### Menambahkan Comment 
`const csx = (<ul> <li>ini </li> {/*Ini komment*/}  <li>ini </li>   </ul>  )`

Ref: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-add-comments-in-jsx/301376

### membuat component 

**komponent React** adalah suatu blok code dasar dari aplikasi React. komponen adalah sebuah potongan kode yang dapat kita gunakan kemabali yang mewakili bagian dari UI. komponen dapat berupa sebuah element sederhana, atau bentuk yang lebih complex. 

Manfaat komponen react: 

- Modularitas: komponen React adalah suatu bagian kecil dari keseluruhan UI. Ini akan sangat memudahkan kita untuk melakukan pemeliharaan code kedepannya. 
- Dapat digunakan kembali, sama seperti konsep function 
- Enkapsulasi: semua variabel didalam komponen, hanya bisa diakses oleh komponen tersebut, dan tidak akan mempengaruhi komponen lain. 

Terdapat dua bentuk componentL:
- function component 
- Class component

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
- [Membuat component sederhana](./project-react/single-comp.md)
- [Membuat banyak content](./react02.md)
- [Membuat element interaktive](./react03.md)
- [instalasi react](./react-install.md)
- [membuat formulir interactive](./react-formulir.md)
- [Add, Update, List JSX](./project-react/add-update-list.md)
- [context](./project-react/context.md)


## Contoh project
- [Membuat button menambahkan element](./project-react/add-component.md)
- [Membuat konsep counter](./project-react/counter.md)
- [membuat element muncul dan hilang](./project-react/add-delete.md)
- [Membuat Form Lengkap fiture](./project-react/form-react.md)
- [Todo app](./project-react/todo.md)
<!--- 
- [PokemonApi](./project-react/pokemonApi.md)
-->

## Referensi:

- https://www.niagahoster.co.id/blog/react-js-adalah/?gclid=Cj0KCQiAx6ugBhCcARIsAGNmMbi_g36zJkerxEangrozL6QmcfFd7ZZwtxXRiqvmDhPGnGX4Jt_rrM0aAtnGEALw_wcB


