import React, {useContext} from 'react'
import { TodoContext } from './App'

function Item00(){

    let {count, setCount} = useContext(TodoContext)

    function handleClick() {
        setCount(count + 1)
        // variabel 'setCount' menjadi penganti 'setState'. Istilahnya React Hooks
        // Jika ingin mengunakan setState
        // this.setState({count: this.state.count+1})
    }

    return (
        <div>

<h1>{count}</h1>
<button onClick={() => {handleClick()}}> + </button>

        </div>
    )
}

export default Item00
