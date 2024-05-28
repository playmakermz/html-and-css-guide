import logo from './logo.svg';
import './App.css';
import React, { useState, createContext } from 'react'
import Item00 from './item00'

export const TodoContext = createContext()

function App() {

  let [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <TodoContext.Provider value={{ count, setCount }}>
        <Item00 />
        </TodoContext.Provider>

      </header>
    </div>
  );
}

export default App;

