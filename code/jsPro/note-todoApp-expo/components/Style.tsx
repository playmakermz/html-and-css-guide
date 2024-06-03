import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

box: {
    width: '80%',
    height: 150,
    backgroundColor: 'red',
    alignSelf: 'center',
    borderRadius: 9
  },
  bcontain: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    border: '1px solid black',
    backgroundColor: 'black',
    width:'70',
  },
  tesxt: {
    color: 'white',
  },

  zero: {
    display:'flex',
    justifyContent: 'center', 
    width: '100%',},

  main: {
  alignItems: 'center',
  display:'flex',
  justifyContent: 'center', 
  marginTop: '30px', 
  width:"50%", 
  border:'5px solid black',
  marginRight:'50%'
},

  
   
});

export { styles }