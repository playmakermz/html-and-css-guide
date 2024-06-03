import React from 'react'
import { FlatList, View, Text } from 'react-native'
import CustomButton from './customButton'
import { styles } from './Style'



function NoteCard({item, setCurrentPage, handleDelete}) { // pemangilan kedua
    return(
        <View>

    <Text>{item.title}</Text>
    <Text>{item.desc}</Text>
    <Text>{item.id}</Text>

    <View style={styles.bcontain}> {/* === Buat container untuk dua button kosong ===*/}
    
      <CustomButton
        text="Ubah"
        onPress={() => {setCurrentPage('edit')}}
      />

      <CustomButton
        text="Hapus"
        onPress={() => {handleDelete(item)}}
      />

    </View>
    
  </View>
    )
}
function home({noteList, setCurrentPage, handleDelete}){ // Pemangilan pertama, "noteList" adalah penerima data dari file lain. yaitu index.tsx
    return (
        <View>
          <CustomButton 
        text="Tambahkan Note"
        onPress={() => {setCurrentPage('add')}}
      />
          <FlatList // {/* Menampilkan array item dan button disebelah mereka  */}
            showsVerticalScrollIndicator={false}
            data={noteList}

            renderItem={({ item }) => (
              <NoteCard item={item} setCurrentPage={setCurrentPage} handleDelete={handleDelete}/>
            )}

            keyExtractor={(item) => item.id}

          /> 
        </View>
      )
}



export default home 