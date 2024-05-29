// item01.js
import React from 'react';

class Item01 extends React.Component {

    render(){
        return(
        <div>

        <h1> Halo aku adalah item 01 </h1>
        <p> buah {this.props.name} rasanya adalah {this.props.rasa} </p>
        {/* <===== Paragraph memiliki hubungan dengan App === */}
        </div>
)
}
}


// Eksport component

export default Item01;
