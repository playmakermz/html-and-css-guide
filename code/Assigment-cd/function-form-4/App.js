import {useState} from 'react'
import Header from './header'

function App(){
    let [count, setCount] = useState(0)  // Counter
    let [close, setClose] = useState(true) // close counter jika count === 5
    let [formInput, setFormInput] = useState('') // Form input 
    let [formAlert, setFormAlert] = useState(false) // munculkan alert, 
    // ================= state declare ================

    function handleCount(){
        if(count == 5){
            alert('Selesai')
            setClose(false)
        }
        else{
            setCount(count + 1)
        }
    } // =================== HandleCount ================
    
    function handleChange(event){
        setFormInput(event.target.value)
        console.log(event.target.value) // tanpa preventdefault, log ini akan hilang
    } // ========================= handleChange ===============
    
    function handleSubmit(event){
        if (formInput === ""){
            setFormAlert(true)
        }
        else{
            event.preventDefault()
            // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_preventdefault
            setFormInput('')
            alert(formInput)

        }
    } // ======================== handleSubmit ===============
    
    function handleAllert(){
        return (
            <div>
                <h4 style={{color: 'red'}}> Form tidak boleh kosong!! </h4>
            </div>
        )
    } // ========================== handleAllert ================
    
    function appForm(){
        return (

            <form onSubmit={(evet) => {handleSubmit(evet)}}>
        <h2>Formulir Pesanan</h2>
        <textarea value={formInput} onChange={(event) => {handleChange(event)}}/>
        {formAlert? handleAllert() : ""}
    
        <input type='submit' value='kirim'/>
      </form>

        )
    } // ===================== appForm ===================

    return(
    <div className='appContainer'>
        <div className='appSubtitute'>
          <Header />
{/* =============== Start ===================*/}
         <h2>Ini Counter App </h2>
         <h3>Count: {count}</h3>

        {close? <button onClick={() => {handleCount()}}>+</button> : ''}

        <h3>Ini adalah Form</h3>
        {appForm()}
        
        
{/* ========== End ================= */}

        </div>
      </div>
    )
}

export default App
