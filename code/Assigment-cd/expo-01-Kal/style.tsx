import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

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

  button: {
    width:  1000,
    color: 'red',
  },

  h1: {
    backgroundColor: 'black',
    color: 'white',
  }
   
});

export { styles }
