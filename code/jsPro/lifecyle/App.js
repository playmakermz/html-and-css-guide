import logo from './logo.svg';
import './App.css';
import React, { useState, createContext } from 'react'
import Item00 from './item00'

export const TodoContext = createContext()

function App() {

  let [count, setCount] = useState(0)
  let [isGameOver, setIsGameOver] = useState(false)

  function finishGame(){
    setIsGameOver(true)
  }

  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <TodoContext.Provider value={{ count, setCount, finishGame, isGameOver }}>
        <Item00 />
        </TodoContext.Provider>

      </header>
    </div>
  );
}

export default App;

