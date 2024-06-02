# Catatan pembuatan project note

tujuan adalah membuat aplikasi note, seperti TodoApp. dimana kita akan melakukan
- Input data 
- Membuat form baru 
- close form 
- submit input 
- tampilkan hasil submit

***
# Tahap 1
***
- Membuat file khusus untuk css
- aturan css pada file khusus
- configurasi file 


Expo App yang digunakan berasal dari React template codespace.
```
> /(tabs)
> index.tsx
> > /components
> > Style.tsx 
> > Home.tsx 
> > customTextInput.tsx 
> > customButton.tsx 
```

dimana disana kita akan membuat folder baru bernama `/components` dan 4 file didalamnya. 

penjelasan file:
- `Style.tsx` - disini hanya akan fokus untuk css, dan tidak akan menyentuh komponen lain. 


**Aturan css**:
- tidak ada file dengan format css pada native 
- property seperti `backgroundColor` bisa digunakan pada container 
- tetapi container tidak bisa modifikasi property `color` pada item.
- oleh karena itu `backgroundColor` gunakan untuk container, dan `color` gunakan untuk item

***
# bagian 2
***
- Menyiapkan button 
- Menyiaopkan form 
- Menyiapkan home, yang akan menerima button dan mengatur tata letak mereka.

### customButton
```Js
// customButton.js 

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
```
- fungsi `customButton` menerima parameter `text, dan onPress`
- diman itu adalah component yang dikirm oleh file lain. 

### customTextInput
```Js
// customTextInput/tsx 

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
            placeholder={label}
            onChangeText={onChange}
            defaultValue={text}
          />

        </View>
      )
  }

export default CustomTextInput
```
- `{text, onChange, label, multiline, numberOfLines}` adalah component yang dikirim oleh file lain. 
- `TextInput` component tersebut akan ditata rapi didalam form tersebut

### Home
```Js
// Home.tsx
import React from 'react'
import { FlatList, View, Text } from 'react-native'
import CustomButton from './customButton'
import { styles } from './Style'

function NoteCard({item}) { // pemangilan kedua
    return(
        <View>

    <Text>{item.title}</Text>
    <Text>{item.desc}</Text>

    <View style={styles.bcontain}> {/* === Buat container untuk dua button kosong ===*/}
      <CustomButton
        text="Ubah"
        onPress={() => {}}
      />

      <CustomButton
        text="Hapus"
        onPress={() => {}}
      />

    </View>

  </View>
    )
}
function home({noteList}){ // Pemangilan pertama, "noteList" adalah penerima data dari file lain. yaitu index.tsx
    return (
        <View>
          <CustomButton
        text="Tambahkan Note"
        onPress={() => {}}
      />
          <FlatList // {/* Menampilkan array item dan button disebelah mereka  */}
            showsVerticalScrollIndicator={false}
            data={noteList}
            renderItem={NoteCard}
            keyExtractor={(item) => item.id}
          />
        </View>
      )
}



export default home
```
- `Home.tsx` digunakan untuk memangil form, dan juga menata tempat bagi array item.

### index
```Js 
// index.tsx 
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Home from './components/Home'
import { styles } from './components/Style'


function App(){

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
  ])

  return(
    <view style={styles.zero}>
      <View style={styles.main}>

<Home noteList={noteList} />
</View>

    </view>
  )
}



export default App;
```
- `index.tsx` - ditujukan untuk membuat state list, dan array.
- dan akan memangil `Home.tsx` 

***
# Bagian 2 
***
- tujuan: membuat halaman lain, untuk input form. 
- menyiapkan folder dan file baru untuk itu 

```
// Pada directory yang sama dengan folder components
> /screen
> addNote.tsx 
> editNote.tsx 
> home.tsx
```

### addNote
```
// addNote.js 

import React from 'react'
import { Text } from 'react-native'

const AddNote = () => <Text>Tambahkan Note</Text>

export default AddNote
```

### editNote
```
import React from 'react'
import { Text } from 'react-native'

const EditNote = () => <Text>Ubah Note</Text>

export default EditNote
```


## Referensi 
- https://medium.com/@yildizfatma/handling-user-input-in-react-native-expo-text-input-buttons-6e7931bc227a

- [Todoapp](https://medium.com/nerd-for-tech/make-todo-list-application-using-react-native-expo-for-ios-and-android-device-1de436168f86)
- [React native and css](https://codeflarelimited.com/blog/use-external-style-sheet-in-react-native/)
