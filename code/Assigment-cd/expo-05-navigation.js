import { useState, useCallback, useEffect } from "react"
import { View, Text, Button, TextInput } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

function Home({ route, navigation }){ // Route dan item

  // Pada navigation, 
  // kita bisa mengirim data ke component pengirim state 
  // tetapi disaat state terkirim, react tidak menyadari darimana pengirimnya
  // menghasilkan component tidak mengalami re-render


  let {form, setForm} = route.params // Mengambil state dan event dari pengirim
  let [input, setInput] = useState('') // menyiapkan state untuk form
  
  console.log(`Halo saya ada re-render ke: ${form}`)

  useFocusEffect(
    useCallback(() => {
      console.log('Screen was focused ( Mount )');
      // Do something when the screen is focused
      return () => {
        console.log('Screen was unfocused ( Unmount )');
        setInput('')
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );
  
  return (
    <View>
      <Text>Halo saya adalah Home Page</Text>
      <TextInput
        style={{border: '1px solid red'}}
        placeholder="Masukan Nama"
        onChangeText={setInput}
        value={input}
      />
      <Text> halo saya adalah state dari App Form : {form}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Det')}
      />
      <Button
        title="Submit Form"
        onPress={() =>
          {
            setForm(input)
            navigation.setParams({
              form: input,
            }) // Timpa state "form" dengan hasil dari state "input"
          }

        }
      />

      <Text>Halo saya adalah Home Page</Text>
      
    </View>
  )
}

function Det({navigation}){ // Route dan item
  console.log('Hi Det Re-render')
  let [count, setCount] = useState(0)
  return(
    <View>
      <Text>Halo saya adalah Detail Page</Text>
      <Text> halo saya adalah state dari Det {count}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Update State"
        onPress={() => setCount(count + 1)}
      />
    </View>
  )
}

function App(){ // component utama  == Container utama, 
  let [form, setForm] = useState('')
  console.log(`Halo saya dari App() ${form}`)
  return(
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} initialParams={{ form: form, setForm: setForm }}/>
        <Stack.Screen name="Det" component={Det} />
      </Stack.Navigator>
  )
}

export default App
