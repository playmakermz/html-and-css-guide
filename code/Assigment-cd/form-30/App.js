import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {output: true, fform: '', fformN: false}
  }

  abcForm(){
    return (
      <form className='abcForm'>
        <h2 style={{textAlign: 'center'}}>Form input</h2>

          <p>Detail Input</p>
          {/* tag textarea */}
          <textarea placeholder='Input Form' onChange={(event) => {this.handleChange(event)}}/>
          {this.state.fformN? this.formNotice() : ''}

          {/* tombol kirim */}

          <input style={{width: '50px'}} type='button' value='Submit' onClick={() => {this.handleClick()}}/>
      </form>
    )
  }

  abcClose(){
    return (
      <div>
        <h2>Form is Closed</h2>
      </div>
    )
  }

  handleClick(){
    if (this.state.fform != ''){
      this.setState({output: !this.state.output}) // Close form
      alert(this.state.fform) // print nilai akhir
    }
    else{
      this.setState({fformN: true}) // show error
    }

  }

  handleChange(event){
    this.setState({fform: event.target.value})
  }

  formNotice(){
    return (
      <div style={{color: 'red'}}>
        Form harus Terisi telebih dahulu!
      </div>
    )
  }

  render(){
   return(
    <div className='zeroContain'>
    <div className='mainContain'>

    {this.state.output? this.abcForm() : this.abcClose()}
  </div>
    </div>
   )
  }
}

export default App
