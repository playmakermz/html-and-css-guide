# Membuat component pada react 

terdapat dua cara yaitu pembuatan dengan:
- function 
- class 

Perhatikan file App.js dibawah ini
```
import logo from './logo.svg';
import './App.css';
import Item02 from './item02';
import Item01 from './item01';

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

file tersebut tidak akan berubah meskipun component class/function 

## Contoh function 

component function 
```Js
import React, {useState} from 'react';

function App(){
    let [count, setCount] = useState(0)
    // count adalah bentuk dari 'state' dengan nilai 0
    // setCount akan menjadi function, untuk memperbarui count

    let handleClick = () => {
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

export default App
```

Membuat sebuah counter, 


## Contoh class component

```Js
import React from 'react';

class Item01 extends React.Component{
    constructor(props){
        super(props)
        this.state = {count: 0}
    }

    handleClick() {
        this.setState({count : this.state.count + 1})
        // variabel 'setCount' menjadi penganti 'setState'. Istilahnya React Hooks
        // Jika ingin mengunakan setState
        // this.setState({count: this.state.count+1})
    }

    render(){
        return (
            <div>

    <h1>{this.state.count}</h1>
    <button onClick={() => {this.handleClick()}}> + </button>

            </div>
        )
    }

}

export default Item01
```
