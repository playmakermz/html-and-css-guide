// App.js
import './App.css';
import Item01 from './item01';

function App() {
  let buahArr =
            [
            {name: 'semangka', rasa:'manis'},
            {name: 'jeruk', rasa:'asam'}
            ]

  return (
    <div className="App">
      <header className="App-header">

        {buahArr.map( (buaharr)=>{
                return (
                    <Item01
                  name={buaharr.name}
                  rasa={buaharr.rasa}
                  />
                )}
                  )}
      </header>
    </div>
  );
}

export default App;
