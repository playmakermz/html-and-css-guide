import React, {useState, useEffect} from 'react'
import { StyleSheet, View, ScrollView, Text, Button, Alert, TextInput } from 'react-native'
//import {CustomTextInput, WeatherSearch, WeatherInfo} from './components/components' // Ambil component lain
//import { styles } from './components/style'
import axios from 'axios'
//import { BASE_URL, API_KEY } from './components/constant'
import cuacaJson from './cuaca.json'
import { BASE_URL, API_KEY } from './constant'
import {styles} from './styles'

function App(){
  let [cuacaData, setCuacaData] = useState([cuacaJson])
  let [form, setForm] = useState('')
  let [lokasi, setLokasi] = useState('')

/*
  useEffect(() => { // Ambil API secara sementara.
    axios  // axios adalah bentuk dari "Promise".
      .get(cuacaJson)
      .then((response) => {
        setCuaca([response.data])
      })
      .catch((error) => {
        console.log(error)
      })
  }, [Lokasi])

*/

useEffect(() => { // Ambil API secara sementara.
  axios  // axios adalah bentuk dari "Promise".
    .get(`${BASE_URL}?q=${lokasi}&appid=${API_KEY}`)
    .then((response) => {
      console.log(`State axios sukses: ${lokasi}`)
      setCuacaData([response.data])
    })
    .catch((error) => { // Default, awal website render!
      console.log(`State Lokasi: ${lokasi}`)
      console.log(`Error: ${error} `)
      console.log(`Base: ${BASE_URL} dan API: ${API_KEY}`)
    })
}, [lokasi])



  
  function HandleSearch(){
    return(
      <View>
        <TextInput 
        
         placeholder="Search the weather of your city"
         numberOfLines={1}
         defaultValue={form}
         //onChangeText={(item) => {console.log(item)}}
         onChangeText={setForm}
       />

<Button title="Search" onPress={() => setLokasi(form)}/>
      </View>
    )
  }

  //============== App() ==============
  return(
  <View style={styles.container}> 
      <View style={styles.item}>
    <Text>Aplikasi Cuaca</Text>

    {HandleSearch()}

<View>
      <ScrollView>
      {cuacaData.map((item, index)=> {
      return (
       <View key={index}>
        <Text >
       Name: {item.name}
     </Text>

     <Text>
      Country: {item.sys.country}
     </Text>

     <Text>
      TimeZone: {item.timezone}
     </Text>

     <Text>
      Weather: {item.weather[0].description}
     </Text>

     <Text>
      Temperature: {item.main.temp}
     </Text>
     

      <Text>Key: {index}</Text>


      
       </View>
      )
    })}
       
      </ScrollView>
    </View>


    </View>
  </View>
  )
}

export default App