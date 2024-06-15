import { StyleSheet,TouchableOpacity, View, ScrollView, Text, Image, Button, Alert, TextInput, Platform} from 'react-native'
import { useState, useEffect, useCallback } from 'react'
import {styles} from './style'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { NavigationContainer, useNavigation, usePreventRemove, useFocusEffect} from '@react-navigation/native';

const Tab = createBottomTabNavigator()
console.log('Tab dirender ulang')

// ============== Home() ===============
function Home(){
  let [formTitle, setFormTitle] =  useState('') // ============= State untuk title form
  let [formDescription, setFormDescription] = useState('') // ================= state untuk description 
  let [formInput, setFormInput] = useState([{title: 'Try', description: 'Description Try', id: crypto.randomUUID()}]) // =============== form utama
  let [itemid, setItemId] = useState(null) // ================ update form
  let [buttonUpdate, setButtonUpdate] = useState(true) // button submit default 
  let hasUnsavedChanges = Boolean(formTitle || formDescription)

  useEffect(() => {
    console.log(`formInput : ${formInput}`)
}, [formTitle]); // <==== Indikator, 

// =============== HandleSubmit ================
function handleSubmit(choice, appTitle, appDescription){
  console.log(`choice: ${choice} and id: ${itemid}`)
  if (appTitle === ''){alert('Please enter a title'); return ''}
  
  if (choice === 0) {
  let abc = {title: appTitle, description: appDescription, id: crypto.randomUUID()}
  setFormInput([...formInput, abc]) // add item
  setFormTitle('') // clear form
  setFormDescription('') // clear form
  }

  else{
    handleUpdate(itemid, appTitle, appDescription)
  }

  }

// ==================== HandleDelete =================
function handleDelete(input){
  let abc = formInput.filter((item) => {
    return item.id !== input
    // item.id - adalah berasal dari id buah.map() "state asli"
    // items.id - adalah berasal dari id yang ingin dihapus user.
})
setFormInput(abc)
}

// ======================= handleUpdate =====================

function handleUpdate(input, appTitle, appDescription){
  let abc = formInput.map((item) => {
    if (item.id === input) {
      return {...item, title: appTitle, description: appDescription, }
    }
    else{
      return item
    }
  })
  setFormTitle('') // clear title
  setFormDescription('') // clear description
  setFormInput(abc) // input data update
  setButtonUpdate(true) // ubah ke submit
}


  // ==================== App() =====================
function App(){

  // ==================== State =====================
  // Kenapa state ini ditempatkan pada satu komponen?
  // Jika kita pindah state ini keluar, akan terjadi re-render yang terjadi setiap satu huruf

  let [appTitle, setAppTitle] = useState('')
  let [appDescription, setAppDescription] = useState('')

  
  // ================= App() return Function ======================
  return(
    <View style={styles.container}>
      <View style={styles.containerSibling}>
        <Text style={styles.h1}>Note Taking App</Text>

        <TextInput
        style={styles.input}
        placeholder="Note Title"
        onChangeText={setAppTitle}
        value={appTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Note Description"
        onChangeText={setAppDescription}
        value={appDescription}
      />

      {buttonUpdate? 
    (<TouchableOpacity onPress={()=> handleSubmit(0, appTitle, appDescription)} style={styles.buttons}>
    <Text>Submit Button</Text>
      </TouchableOpacity>) : 
      
      (<TouchableOpacity onPress={()=> handleSubmit(1, appTitle, appDescription)} style={styles.buttonu}>
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

// ====================== List() ===============
function List({ navigation }){
  return(
    <ScrollView contentContainerStyle={styles.itemList}>
        {formInput.map((item, index) => (
          <View key={index} style={styles.itemm}>
            <Text>Title  :{item.title}</Text>
            <Text>{item.description}</Text>
            <Button title="Delete Note" color="red" onPress={() => handleDelete(item.id)}/>
            <Button title="Update Note" color="orange" onPress={() => {setItemId(item.id); setButtonUpdate(false); navigation.navigate('App')}}/>
          </View>
        ))}
      </ScrollView>
  )
}


// ========================= Main function return() =================
return(
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
    }}
  >

     <Tab.Screen
      name="App"
      component={App}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="home" size={28} color={color} />
        ),
        headerShown: false,
      }}
    />

<Tab.Screen
      name="List"
      component={List}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="search" size={28} color={color} />
        ),
        headerShown: false,
      }}
    />

  </Tab.Navigator>
)

} // ====================== End Home() ====================



export default Home
