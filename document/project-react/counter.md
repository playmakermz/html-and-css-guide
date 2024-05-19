# Membuat Button untuk melakukan counting

Terdapat fitur counter, betapa banyak button tersebut telah ditekan.

## Code

```Javascript
import React from 'react';


class Item00 extends React.Component {
    constructor(props){
        super(props)
        this.state = {count: 0} // Tambahkan State counter
    }

    handleClick(){
        this.setState({count: this.state.count + 1}) // Respon dan proses
    }

    render(){
        return(
           <div>
             <h1>Hello, namaku adalah {this.state.count}!</h1> {/* <===== ini akan berubah sesuai dengan state saat ini!!!*/}

            <button onClick={() => {this.handleClick()}}> Counter! </button> {/*<==== Click */}
           </div>
        )
    }
}

export default Item00;
```


## Breakdown code

- Buat state `count`
- buat method untuk menerima perintah dari **onClick**
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



