# Membuat button interactive

Pada contoh kali ini, kita bisa menyembunyikan dan menampilkan element pada HTML dengan satu kali click. 



```
// itemAdd.js
import React from 'react';

class ItemAdd extends React.Component {
    constructor() {
        super(props)
        this.state = {isItemOpen: false}
}

// method dibawah adalah untuk proses dari onClick

    handleClick(){
        this.setState({isItemOpen: true})
}

// Method dibawah adalah untuk menghilangkan element item
    handleClickClose(){
        this.setState({isItemOpen: false})
}


    render(){

        let itemParag;

        if(this.state.isItemOpen){ // <===== adalah tempat JSX dan condition
            itemParag = ( {/* <==== harus ada '()' ini adalah JSX area */}
                <p> Halo saya adalah paragraph interactive </p>
        )
        }

        return(
            <div>

            <p> saya adalah static </p>
            {itemParag}

            <button onClick={() => {this.handleClick()}} title="Open"/>

            {/* <=== button ini untuk open */}

            <button onClick={() => {this.handleClickClose()}} title="close" />

            {/* <=== button ini untuk close */}
        )
}

}

export default ItemAdd;
```


**Break down code**

- Membuat Property untuk element interactive `this.state = {isItemOpen: false}
` 
- membuat method untuk menangkap perintah dari `onClick` dengan method `   handleClick()`

- membuat variabel yang akan menampung JSX `let itemParag;`

- membuat if statement untuk mengatur kapan JSX akan digunakan dan tidak ` if(this.state.isItemOpen){`

- Tambahkan code JSX pada variabel `itemParag` didalam if statement

- pada `render(){ return(...) }` bagian return tambahkan code JSX `{itemParag}` 
- buat button onClick untuk memangil `{this.handleClick()}` 
- lakukan export pada baris terakhir untuk class yang sudah dibuat.
- BUath method `handleClickClose` untuk menutup element



### Tahap terakhir

adalah menghubungkan component item dengan file `App.js` sperti panduan sebelumnya.

```
//App.js 
import React from 'react';
import ItemAdd from 'itemAdd';

...

<ItemAdd />


```
