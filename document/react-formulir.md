#Pembuatan formulir interaktive

Tujuan adalah membuat sebuah formulir yang dapat menerima input, dan memberikan feedback setelah input tersebut masuk.

##Tahapan

- Membuat Form dengan JSX -
- Membuat onClick terima -
- Membuat feedback

```Js
// itemForm.js 
import React from 'react';

class FormComp extends React.Component {
    constructor(props){
        this.state ={
    /* Dibawah ini adalah kunci dinamis form */ 
        isSubmitted: false;
    }
}
    

    handleSubmit(){
        this.setState({isSubmitted: true})
    }

    render(){
        let contactForm

        if (this.state.isSubmitted){ /* <=== adalah jika terkirim */
            contactForm = (
            <div className='pesan-terkirim'>

            Pesan terkirim 
            </div>
        )
        }; /* <=== Semicolom wajib pada course online */ 

        else { /* <=== adalah jika belum terkirim */
            contactForm = (

            <form onSubmit= {() => {this.handleSubmit()} 
          <p>Input Alamat Rumah!</p>
          <input 
            
          />

          <p>Detail Pesanan</p>
          {/* tag textarea */}
          <textarea 

          />

          {/* tombol kirim */}

          <input 

          />


            } // Akhir form 

        ) // Akhir contactForm

        return (
            <div>
                {contactForm} {/* <=== JSX disini */}
            </div>
        )
        }
    }
}

```
