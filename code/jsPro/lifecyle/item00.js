import React, {useContext, useEffect} from 'react'
import { TodoContext } from './App'

function Item00(){

    let {count, setCount, finishGame, isGameOver} = useContext(TodoContext)

    function handleClick() {
        console.log('key pressed') // sebagai debuggin, jangan dihapus
        setCount(count + 1)
        // variabel 'setCount' menjadi penganti 'setState'. Istilahnya React Hooks
        // Jika ingin mengunakan setState
        // this.setState({count: this.state.count+1})
    }

    function GameOver() {
        return <h1>See you again!</h1>
      }

      useEffect(() => { // Fungsi dari "useEffect()" adalah menambahkan tool
        window.addEventListener('keydown', handleClick)
        return () => { // lalu hapus tool tersebut, agar tidak error.
          window.removeEventListener('keydown', handleClick) 
        } // jika nilai return ini tidak kita hapus, akan mucul error di "web browser console"
      }, [count])

    return (
        <div>

<h1>{count}</h1>


{isGameOver ? 
    <GameOver /> : <button onClick={() => {handleClick()}}> + </button>
}

<button onClick={() => {finishGame()}}> Finish Game </button>


        </div>
    )
}

export default Item00
