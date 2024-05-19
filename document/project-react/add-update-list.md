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


