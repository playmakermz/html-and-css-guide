# membuat banyak component 

Tujuan adalah membuat banyak component, dan digabungkan menjadi satu pada App.js. 


### Tahapan
- Buat component disekitar `App.js`



### Tahapan 00 
```Js
// App.js
import logo from './logo.svg';
import './App.css';
import Item02 from './item02';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

        <Item02 />
      </header>
    </div>
  );
}

export default App;
```



### Tahapan 01 

Tujuan adalah untuk membuat component yang akan terus dipanggil pada loop `map()`. maka file `item01.js` akan terus dipanggil.

```Javascript
// item01.js
import React from 'react';

class Item01 extends React.Component {

    render(){
        return(

        <div>

        <h1> Halo aku adalah item 01 </h1>
        <p> buah {this.props.name} rasanya adalah {this.props.rasa} </p>
        {/* <===== Paragraph memiliki hubungan dengan item02 === */}

        </div>

)
}

}


// Eksport component

export default Item01;
```

`Item01` adalah file baru pada folder components. 


### Tahap 02

Membuat Component `item02` yang berfungsi untuk memanggil `item01` dan menjadi wadah dari loop `map()`

```Js
// item02.js
import React from 'react';
import Item01 from './item01'

class Item02 extends React.Component {

    render(){
        let buahArr = 
            [
            {name: 'semangka', rasa:'manis'},
            {name: 'jeruk', rasa:'asam'}
            ]


        return(

            <div>
            <h3> halo ini list dari component item02 </h3>

            {/* <====== Ini adalah component item01 */}

            {buahArr.map( (buaharr)=>{

                return (

                    <Item01 
                     name={buaharr.name} 
                     rasa={buaharr.rasa} 
                    />

                    )}
            )}


            </div>

)
}
}

export default Item02
```

