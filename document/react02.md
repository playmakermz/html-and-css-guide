# membuat banyak component 

Tujuan adalah membuat banyak component, dan digabungkan menjadi satu pada App.js. 


### Tahapan
- Buat component disekitar `App.js`



### Tahapan 01 


```
// Item01.js
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

Membuat Component `item02` yang berfungsi untuk mengabungkan `item01` dan `item02`.

```
import React from 'react';
import Item01 from './Item01'

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

{buahArr.map( =>{

return (

<Item01 
<p> name={buahArr.name} </p>
<p> rasa={buahArr.rasa} </p>
/>
)

}
)}


</div>

)
}
}


```

