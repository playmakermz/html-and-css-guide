import { StyleSheet,TouchableOpacity, View, ScrollView, Text, Image, Button, Alert, TextInput } from 'react-native'
import { useState, useEffect } from 'react'
import {styles} from './style'

function App(){
  let [formTitle, setFormTitle] =  useState('') // ============= State untuk title form
  let [formDescription, setFormDescription] = useState('') // ================= state untuk description 
  let [formInput, setFormInput] = useState([{title: 'Try', description: 'Description Try', id: crypto.randomUUID()}]) // =============== form utama
  let [itemid, setItemId] = useState('') // ================ update form
  let [buttonUpdate, setButtonUpdate] = useState(true)


  // =============== HandleSubmit ================
  function handleSubmit(choice : number){
    console.log(`choice: ${choice} and id: ${itemid}`)
    if (formTitle === ''){alert('Please enter a title'); return ''}
    
    if (choice === 0) {
    let abc = {title: formTitle, description: formDescription, id: crypto.randomUUID()}
    setFormInput([...formInput, abc]) // add item
    setFormTitle('') // clear form
    setFormDescription('') // clear form
    }

    else{
      handleUpdate(itemid)
    }

    }

  // ==================== HandleDelete =================
  function handleDelete(input : string){
    let abc = formInput.filter((item) => {
      return item.id !== input
      // item.id - adalah berasal dari id buah.map() "state asli"
      // items.id - adalah berasal dari id yang ingin dihapus user.
  })
  setFormInput(abc)
  }

  // ======================= handleUpdate =====================

  function handleUpdate(input : string){
    let abc = formInput.map((item) => {
      if (item.id === input) {
        return {...item, title: formTitle, description: formDescription, }
      }
      else{
        return item
      }
    })
    setFormTitle('') // clear title
    setFormDescription('') // clear description
    setFormInput(abc) // input data update
    setButtonUpdate(true) // ubah button menjadi sumbit
  }

  // ================= Main return Function ======================
  return(
    <View style={styles.container}>
      <View style={styles.containerSibling}>
        <Text style={styles.h1}>Note Taking App</Text>

        <TextInput
        style={styles.input}
        placeholder="Note Title"
        onChangeText={setFormTitle}
        value={formTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Note Description"
        onChangeText={setFormDescription}
        value={formDescription}
      />

      {buttonUpdate? 
    (<TouchableOpacity onPress={()=> handleSubmit(0)} style={styles.buttons}>
    <Text>Submit Button</Text>
      </TouchableOpacity>) : 
      
      (<TouchableOpacity onPress={()=> handleSubmit(1)} style={styles.buttonu}>
    <Text>Update Button</Text>
      </TouchableOpacity>)  
    }

      <ScrollView contentContainerStyle={styles.itemList}>
        {formInput.map((item, index) => (
          <View key={index} style={styles.itemm}>
            <Text>Title  :{item.title}</Text>
            <Text>{item.description}</Text>
            <Button title="Delete Note" color="red" onPress={() => handleDelete(item.id)}/>
            <Button title="Update Note" color="orange" onPress={() => {setItemId(item.id); setButtonUpdate(false)}}/>
          </View>
        ))}
      </ScrollView>

      </View>
    </View>
  )
}

export default App