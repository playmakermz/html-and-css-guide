# Membuat Form Lengkap

Tujuan membuat form yang memiliki fitur lengkap

- Menerima input real time
- Membuka menutup form berdasarkan interaksi user
- Memiliki button untuk mengirim form
- Tidak boleh form kosong, jika kosong kita akan memberikan pesan secara manual
- Menirima hasil akhir dari form, dan menampilkan didepan layar

## Code

```Javascript
import React from 'react';

class Item01 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Form: true,
            email: '',
            emailError: false,
        } // Representasi Form itu sendiri
    }

    handleClick(){
        if (this.state.Form){
            this.setState({Form: false}) // Jika Form sudah masuk maka close form
        }
        else{
            this.setState({Form: true}) // Jika form sudah 'submit' maka tutup!!
        }
    }

    handleChange(even){
        let inputEmail = even.target.value // Mengambil nilai dari form real time
        let testEmail = inputEmail === '' // Melakukan check apakah sudah terisi atau belum
        this.setState({
            email: inputEmail, // masukan value ke state.email
            emailError: testEmail, 
        })
    }

    render(){
        let notif; // Variabel untuk notif

        if(this.state.emailError) { // If statemen untuk notif
            notif = (
                <div style={{color: 'red'}}>
                    Email harus Ada!
                </div>
            )
        }

        let abc; // 'abc' adalah untuk menyimpan elemen form

        if (this.state.Form){ // tampilkan form pada awalan
            abc = (
                <form onSubmit={() => {this.handleClick()}}>
                    <h1>Ini adalah formulir (Form: True)</h1>

                    <input
                    title='Email'
                    type='email' 
                    value={this.state.email} 
                    onChange={(event) => {this.handleChange(event)}}
                    />
                    {notif}

                    <input type='submit' value='kirim'/>
                </form>
            )
        }

        else{ // close form jika sudah selesai
            abc = (
                <div>
                    Selamat Form yang kamu tulis sudah Terkirim!!, {this.state.email}
                </div>
            )
        }

        return(
            <div>
                {abc}

                <button onClick={() => {this.handleClick()}}> Ambil form ulang</button>
            </div>
        )
    }
}

export default Item01
```

### App
```Javascript
import logo from './logo.svg';
import './App.css';
import Item01 from './item01'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Item01 />
      </header>
    </div>
  );
}

export default App;
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



