import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { View, FlatList, StyleSheet, Text } from 'react-native'

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

function App(){
  const [data, setData] = useState([]) // state untuk menyimpan hasil API
  const renderItem = ({ item }) => <Item title={item.title} /> // Array map, render semua item

  useEffect(() => { // Ambil API secara sementara.
    axios  // axios adalah bentuk dari "Promise".
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <View style={styles.container}>

      <FlatList // Kirim data pada fungsi ini ke fungsi FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    color: 'white',
    fontSize: 32,
  },
})

export default App
