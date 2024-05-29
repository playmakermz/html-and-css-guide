import React from "react";
import './App.css';
import Item01 from './item01'

class App extends React.Component {
  constructor(param){
    super(param);
    this.state ={name: 0}
  }

render(){
  let abc = [
    {name: 'Appel', id: 1},
    {name: 'Berry', id: 2},
    {name: 'Banana', id: 3},
    {name: 'pinnaple', id: 4},
    {name: 'watermelon', id: 5},
  ]

  return(
    <div style={styles.container}>
   <div style={styles.compaCt}>
    {abc.map((item) => {
      return (<Item01 name={item.name} id={item.id} />)
    })}

   </div>
   </div>
  )
}

}

let styles = {
  container: {display: 'flex', justifyContent: 'center', alignItems: 'center', height: '700px'},
  compaCt: {display: 'flex', width: '70%', border: '1px solid red'},
  colorH1: {color: 'red', fontSize: '40px'},
}

export default App;
