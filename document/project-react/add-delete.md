# Membuat element dapat muncul dan hilang

Tujuan adalah membuat element, dan hanya terdapat satu tombol untuk mengatur kapan dibuka dan ditutup.

## Code

```Javascript
import React from 'react';


class Item00 extends React.Component {
    constructor(props){
        super(props)
        this.state = {site: true} // Tambahkan State counter, awalan ada!
    }

    handleClick(){
        if (this.state.site){ // Check Nilai
            this.setState({site: false}) // Tutup Element
        }
        else {
            this.setState({site: true}) // buka element
        }
        
    }

    render(){

        let itemInter 

        if (this.state.site){
            itemInter = ( // <===== Wajib ada () pada JSX
                <div>
                    Halo saya adalah <b>element Interaktive!!</b>
                </div>
            )
        }

        return(
           <div>
             <h1>Hello, Aku adalah component item01!</h1> {/* <===== ini akan berubah sesuai dengan state saat ini!!!*/}


             {itemInter}

            <button onClick={() => {this.handleClick()}}> Open and close </button> {/*<==== Click method */}
           </div>
        )
    }
}

export default Item00;
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



