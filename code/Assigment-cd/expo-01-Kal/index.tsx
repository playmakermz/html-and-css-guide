import { StyleSheet, View, ScrollView, Text, Image, Button, Alert, TextInput } from 'react-native'
import { useState } from 'react'
import {styles} from './style'


function App(){
  let [formInput, setFormInput] =  useState('')

  function handleSubmit(){
    setFormInput(eval(formInput))
  }

  return(
    <View style={styles.container}>
      <View style={styles.containerSibling}>
        <Text style={styles.h1}>React Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Calculation"
        onChangeText={setFormInput}
        value={formInput}
      />

      <View style={styles.item}>
        <Button title='Clear' color="red" onPress={() => {setFormInput('')}}/>
        <Button title='()'  onPress={() => {setFormInput(`(${formInput})`)}}/>
        <Button title='%'  onPress={() => {setFormInput(`${formInput}%`)}}/>
        <Button title=':'  onPress={() => {setFormInput(`${formInput}/`)}}/>
      </View>

      <View style={styles.item}>
        <Button title='7'  onPress={() => {setFormInput(`${formInput}7`)}}/>
        <Button title='8'  onPress={() => {setFormInput(`${formInput}8`)}}/>
        <Button title='9'  onPress={() => {setFormInput(`${formInput}9`)}}/>
        <Button title='x'  onPress={() => {setFormInput(`${formInput}*`)}}/>
      </View>

      <View style={styles.item}>
        <Button title='4'  onPress={() => {setFormInput(`${formInput}4`)}}/>
        <Button title='5'  onPress={() => {setFormInput(`${formInput}5`)}}/>
        <Button title='6'  onPress={() => {setFormInput(`${formInput}6`)}}/>
        <Button title='-'  onPress={() => {setFormInput(`${formInput}-`)}}/>
      </View>

      <View style={styles.item}>
        <Button title='1'  onPress={() => {setFormInput(`${formInput}1`)}}/>
        <Button title='2'  onPress={() => {setFormInput(`${formInput}2`)}}/>
        <Button title='3'  onPress={() => {setFormInput(`${formInput}3`)}}/>
        <Button title='+'  onPress={() => {setFormInput(`${formInput}+`)}}/>
      </View>

      <View style={styles.item}>
        <Button title='0'  onPress={() => {setFormInput(`${formInput}0`)}}/>
        <Button title='.'  onPress={() => {setFormInput(`${formInput}.`)}}/>
      </View>

<Button
          title="Submit Calculation"
          color="#f194ff"
          onPress={() => {handleSubmit()}}
        />

      </View>
    </View>
  )

}

export default App
