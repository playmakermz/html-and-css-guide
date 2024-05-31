# Expo 

adalah tool yang dapat membantu kita untuk membuat App android dan IOS. 

cara instalasi:

```
npx create-expo-app my-app


npx expo start
```


## tool tambahan

install `Expo Go` untuk melakukan testing didalam android


***
# Component Inti React Native
***
Beberapa Component bawaan dari "Expo"

1. Daftar Component dasar dalam UI 
- view
- Text 
- StyleSheet
- Image
- TextInput

2. View yang dapat scroll
- ScrollView
- FlatList

3. View yang dapat touch 
- Button 
- TouchableOpacity

# Component dasar 
Berserta penjelasan fungsi 

### view 
```Js
import { View, Text } from 'react-native'
... 

return (
<View>

<View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 40 }}>Hello React Native</Text>
      </View>

<View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 40 }}>Hello React Native</Text>
      </View>

</View>
)
```

Mereka berfungsi sebagai container pembungkus. sama seperti kita menggunakan `<div>`

### Text 

```
<Text style={{ fontSize: 30 }}>

<Text>Ini ukuran akan berubah <Text>

<View>
<Text>Ini ukuran tidak akan berubah </Text>
</View>

</Text>
```

ini adalah seoperti bentuk string. Kita tidak bisa memasukan string kepada component `<View>`. Cara diatas dapat digunakan untuk mewariskan style kepada `Text` dibawahnya, kecuali terdapat text didalam view atau component lain.

### StyleSheet

```Js
import { StyleSheet, Text, View } from 'react-native'

...

<Text style={styles.title}>React Native - Prograte</Text>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },})
```

Infile CSS 

### Image 

```Js
import { View, Image, StyleSheet } from 'react-native'

 <Image style={styles.image} source={require('./assets/icon.png')} />
```
Sama seperti Tag `image`

### TextInput
```Js 
import { View, StyleSheet, TextInput } from 'react-native'

const [name, setName] = useState()

<TextInput
        style={styles.input}
        placeholder="Masukan Nama"
        onChangeText={setName}
        value={name}
      />
```

Adalaj bentuk form. Untuk lebih detail mengenai form TextInput: https://reactnative.dev/docs/textinput#props

# Reference:
- https://www.freecodecamp.org/news/responsive-layout-react-native/ | App sangat sederhana <Begginer Recommended>
