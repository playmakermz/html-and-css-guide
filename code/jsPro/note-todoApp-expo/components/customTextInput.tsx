import React from 'react'
import { TextInput, Text, View } from 'react-native'
import { styles } from './Style'

function CustomTextInput({text, onChange, label, multiline, numberOfLines}){
    return (
        <View>
          <Text>{label}</Text>
          <TextInput
            multiline={multiline}
            numberOfLines={numberOfLines}
            placeholder={`Ini adalah form ${label}`}
            onChangeText={onChange}
            defaultValue={text}
          />
        </View>
      )
  }

export default CustomTextInput