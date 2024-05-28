import React, {useContext} from 'react'
import { TodoContext } from './App'

function Item00(){

    let {count, setCount, finishGame, isGameOver} = useContext(TodoContext)

    function handleClick() {
        setCount(count + 1)
        // variabel 'setCount' menjadi penganti 'setState'. Istilahnya React Hooks
        // Jika ingin mengunakan setState
        // this.setState({count: this.state.count+1})
    }

    function GameOver() {
        return <h1>See you again!</h1>
      }

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
