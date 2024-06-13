import { StyleSheet } from 'react-native';
import React from 'react';

const styles : { [key: string]: React.CSSProperties }   = {

  input: {
    width: 600,
    border: '3px solid black',
    opacity: '0.6',
  },
  
  container: {
    height: 600,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    border: '4px solid red',
    
  },

  containerSibling: {
    width: 600,
    display: 'flex',
    flexDirection: 'column',
    border: '4px solid black',
  },

  item: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  h1: {
    backgroundColor: 'black',
    color: 'white',
  },

  itemList: {
    display: 'flex',
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    border: '1px solid black',
    width: '100%',
    gap: 10,
    flexWrap: 'wrap',
  },

  itemm: {
    //flex: '25%',
    border: '1px solid black',
  },

  buttons: {
    border: '1px solid black',
    backgroundColor: 'green',
    opacity: '0.7',
  },
   
  buttonu: {
    border: '1px solid black',
    backgroundColor: 'green',
    opacity: '0.7',
  }
};

export { styles }
