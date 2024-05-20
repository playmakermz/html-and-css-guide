# Membuat Form Lengkap

Tujuan adalah membuat element, dan hanya terdapat satu tombol untuk mengatur kapan dibuka dan ditutup.

## Code

```Javascript
import React from 'react';

class Item01 extends React.Component {
    constructor(props){
        super(props)
        this.state = {Form: true}
    }

    handleClick(){
        if (this.state.Form){
            this.setState({Form: false})
        }
        else{
            this.setState({Form: true})
        }
    }

    render(){
        let abc;

        if (this.state.Form){
            abc = (
                <form onSubmit={() => {this.handleClick()}}>
                    <h1>Ini adalah formulir (Form: True)</h1>
                    <input />

                    <input type='submit' value='kirim'/>
                </form>
            )
        }

        else{
            abc = (
                <div>
                    Selamat Form yang kamu tulis sudah Terkirim!!
                </div>
            )
        }

        return(
            <div>
                {abc}

                <button onClick={() => {this.handleClick()}}> Test </button>
            </div>
        )
    }
}

export default Item01
```


## Breakdown code

- Buat state `state`
- buat method untuk menerima perintah dari **onClick**
- Satu method dengan if statement didalamnya, dimana dilakukan pengecekan apakah state tersebut `true` atau tidak!
- didalam `render()` buat if statement, jika state adalah true maka render element tersebut!
- Buat **onClick** untuk mengirim perintah!!


## Detail tahapan (Abstract)
- masuk ke folder src `App.js`
- Buat component baru
- Buat object
- Buat property dengan `state`
- buat `handleClick()` untuk menerima perintah
- gunakan `setState` untuk melakukan perubahan pada `state ` awal
- buat `render()` dan `return()` untuk bagian JSX
- buat fungsi `onClick` untuk mengirim permintaan kepada `handleClick()`
- `export default` untuk component baru yang kita buat



