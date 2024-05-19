# Membuat Button untuk melakukan penambahan element

## Tujuan

Membuat dua button, dimana setiap button memiliki value yang dapat mengubah text element diatas.

## Tahapan
- masuk ke folder src `App.js`
- Buat component baru
- Buat object 
- Buat property dengan `state`
- buat `handleClick()` untuk menerima perintah
- gunakan `setState` untuk melakukan perubahan pada `state ` awal
- buat `render()` dan `return()` untuk bagian JSX
- buat fungsi `onClick` untuk mengirim permintaan kepada `handleClick()`
- `export default` untuk component baru yang kita buat
- Masukan JSX `Item00` pada file `App.js` dan render


```Javascript
import React from 'react';


class Item00 extends React.Component {
    constructor(props){
        super(props)
        this.state = {name: 'Appel'}
    }

    handleClick(abc){
        this.setState({name: abc})
    }

    render(){
        return(
           <div>
             <h1>Hello, namaku adalah {this.state.name}!</h1> {/* <===== ini akan berubah sesuai dengan state saat ini!!!*/}

            <button onClick={() => {this.handleClick('Banana')}}> Banana </button>
            <button onClick={() => {this.handleClick('Appel')}}> Appel </button>
           </div>
        )
    }
}

export default Item00;
```
