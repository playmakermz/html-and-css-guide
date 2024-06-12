import { StyleSheet,TouchableOpacity, View, ScrollView, Text, Image, Button, Alert, TextInput } from 'react-native'
import { useState, useEffect } from 'react'
import {styles} from './style'
import pokeball from './pokemon.json'


function App(){
  let abc = [pokeball]
  let [pokemonList, setPokemonList] = useState(abc[0].results)
  let [selectedPokemonName, setSelectedPokemonName] = useState("")
  let [pokemonDetail, setPokemonDetail] = useState('')

  pokemonList.map((item) => {console.log(item)})

  useEffect(() => {
    if (!selectedPokemonName) return
    // URL harus dalam satu baris
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}`)
      .then((res) => res.json())
      .then((data) => setPokemonDetail(data))
      .catch((err) => console.log(err))
  }, [selectedPokemonName])
  

  function clear() {
    setSelectedPokemonName("")
    setPokemonDetail('')
  }

  return(
    <View style={styles.container}>
      <View style={styles.containerSibling}>

        <ScrollView contentContainerStyle={styles.itemList}>
        {pokemonList.map((item, keyy) => (

<TouchableOpacity onPress={()=> setSelectedPokemonName(item.name)} key={keyy} style={styles.itemm}>
<Text>{item.name}</Text>
</TouchableOpacity>

      ))}
        </ScrollView>

{pokemonDetail && (
  <View>
<Image source={{uri: pokemonDetail.sprites.front_default}} style={{ width: 200, height: 200 }}/>
<Text>Pokemon Name: {pokemonDetail.name}</Text>
<Text>Pokemon base_experience: {pokemonDetail.base_experience}</Text>
<Text>Pokemon weight: {pokemonDetail.weight}</Text>
<Text>Pokemon Height: {pokemonDetail.height}</Text>
<Button title="Clear Button" color="#f194ff" onPress={() => clear()}/>
  </View>
)}
        


      </View>
    </View>
  )

}

export default App
