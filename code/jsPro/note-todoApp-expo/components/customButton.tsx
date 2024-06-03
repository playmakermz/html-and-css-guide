import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { styles } from './Style'

function CustomButton({text, onPress}){
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.tesxt}>{text}</Text>
        </TouchableOpacity>
      )
}


export default CustomButton