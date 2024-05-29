// item01.js
import React from 'react';

class Item01 extends React.Component {

    render(){

        return(
        <div style={styles.jarak}>

        <p> buah {this.props.name} rasanya adalah manis </p>
        <p  style={styles.colorP}> Nomor Id: {this.props.id} </p>

        {/* <===== Paragraph memiliki hubungan dengan App === */}
        </div>
)
}
}

let styles = {
    jarak: {margin: '10px'},
    colorP: {color: 'red', fontSize: '40px'},
    colorH1: {color: 'red', fontSize: '40px'},
    }
// Eksport component

export default Item01;
