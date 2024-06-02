// Array dan map()
// { this.state ?}
// button,
import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      output: true,
      fformN: "",
      fformAl: false,
      fform: true,
    buah: [
      {name: 'Appel', id: self.crypto.randomUUID(), fformExss: false,},
      {name: 'manggo', id: self.crypto.randomUUID(), fformExss: false,},
      {name: 'papaya', id: self.crypto.randomUUID(),fformExss: false },
      {name: 'star fruit', id: self.crypto.randomUUID(), fformExss: false},
      {name: 'banana', id:self.crypto.randomUUID(), fformExss: false},
    ],

  }
    /*
output - untuk menampilkan array item atau tdk
fformN - menerima data dari form
fformAl - error pesan, diman jika form kosong tetap "submit"
fform  - menampilkan form, sebelum submit. jika submit form hilang
buah - adalah list item, dan indikator form mereka
    */
  }

  handleClick(){ // untuk array item
    this.setState({output: !this.state.output})
  }

  handleChange(event){ // untuk menerima input form
    this.setState({fformN: event.target.value})
    console.log(event.target.value)
  }

  handleSubmit(){ // menerima dari button submit
    if(this.state.fformN !== ''){
      this.setState({fform: false})

      const newTodo = { // menata data yang baru masuk ke format array kita
        name: this.state.fformN,
        id: self.crypto.randomUUID(), // mereujuk ke state todos
        fformExss: false,
      }
      this.setState({buah: this.state.buah.concat(newTodo)}) // simpan total keseluruhan array ke state
    }
    else{
      this.setState({fformAl: true})
    }

  }

  handleAllert(){ // menampilkan pesan error jika form kosong
    return(
      <div style={{color: 'red'}}>
Form tidak boleh kosong
        </div>
    )
  }

  handleDelete(items){ // cari tau id item, dan hapus item
    let abc = this.state.buah.filter((item) => {
      return item.id !== items.id
      // item.id - adalah berasal dari id buah.map() "state asli"
      // items.id - adalah berasal dari id yang ingin dihapus user.
  })
  this.setState({buah: abc})
  }

  handleUpdate(items){ // cari id dan update tempat itu
    if(items.fformExss === false){
      let abc = this.state.buah.map((item) => {
        if (item.id === items.id){
          return { ...item, fformExss: true }; // ubah indikator dan simpan bagian lain tetap
        }
        else{
          return item
        }
      })
      this.setState({buah: abc})
    }

    else{
      let abc = this.state.buah.map((item) => {
        if (item.id === items.id){
          return { ...item, name: this.state.fformN, fformExss: false };
        }
        else{
          return item
        }
      })
      this.setState({buah: abc})
    }

    // https://www.geeksforgeeks.org/how-to-modify-an-objects-property-in-an-array-of-objects-in-javascript/#approach-1-using-arraymap-method
  }

  updateForm(item){
    return(
      <form>
        <h2>Formulir Pesanan</h2>
        <textarea onChange={(event) => {this.handleChange(event)}}/>
        {this.state.fformAl? this.handleAllert() : ""}

        <div className='appButton' onClick={() => {this.handleUpdate(item)}}>Submit</div>
      </form>
    )
  }




  appForm(){ // Ini adalah HTML form
    return(
      <form>
        <h2>Formulir Pesanan</h2>
        <textarea onChange={(event) => {this.handleChange(event)}}/>
        {this.state.fformAl? this.handleAllert() : ""}

        <div className='appButton' onClick={() => {this.handleSubmit()}}>Submit</div>
      </form>
    )
  }

  render(){

    //let abc =
    // () => {}
    // () => () untuk JSX

    return(
      <div className='appContainer'>
        <div className='appSubtitute'>


          {this.state.fform? this.appForm() : <p>Submited form!</p>} {/* <==== If statement apakah state true/false */}

          <h1>List Buah:</h1>

          {this.state.output?

        this.state.buah.map((item) => (
          <div key={item.name}>
            <p>Halo saya adalah {item.name}</p>
          <button onClick={() => {this.handleDelete(item)}}> Delete! </button>
          <button onClick={() => {this.handleUpdate(item)}}> Update </button>
          {item.fformExss? this.updateForm(item) : ''}
          </div>
        )) : ''

        }

          <button onClick={() => {this.handleClick()}}>Submit / clear</button>
        </div>
      </div>
    )
  }
}

export default App
