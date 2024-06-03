import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import CustomButton from '../components/customButton'
import CustomTextInput from '../components/customTextInput'
import { styles } from '../components/Style'


function AddNote({noteList,setNoteList, setCurrentPage, addNote }){
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    return(
        <View>
            <Text>Tambahkan Note</Text>
            <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
      />

<CustomButton
        text="Simpan / Save"
        onPress={() => {addNote(title, desc)
            setCurrentPage('home')}}
      />

<CustomButton
        text="Home"
        onPress={() => {setCurrentPage('home')}}
      />
        </View>
    )
}

export default AddNote