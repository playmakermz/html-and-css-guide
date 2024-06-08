# Expo Navigator 

Tahapan Instalasi:
```Js
npm install @react-navigation/native
```

- 2 
```Js 
npx expo install react-native-screens react-native-safe-area-context
```

- 2 / Atau 
```Js 
npm install react-native-screens react-native-safe-area-context
```

- 3 

```Js
npm install react-native-screens react-native-safe-area-context
```

- 4 
```Js 
npm install --save react-native-navigation
```

- 5 
```Js 
npm install @react-navigation/drawer
```

- 6 
```Js 
npm install react-native-gesture-handler react-native-reanimated 
```

***
# fundamental information 
***

Mengenai "React Navigation". Sebagai contoh pada web browser disaat kita klik `<a>` dimana kita akan dilempar ke halaman dimana sebuah link tersebut berada, kita bisa kembali kehalaman utama dengan cara klik tombol "back". Dimana tombol "back" itu mengambil informasi dari history browser kita. "React Navigation" bekerja seperti itu.  


Terdapat perbedaan kunci dimana:

- "React Navigation": Pada fungsi ini, mereka menyediakan kita sebuah gesture dan animasi perpindahan seperti apa yang kita exspetasikan pada android.


## createNativeStackNavigator

`createNativeStackNavigator` adalah suatu fungsi yang akan menghasilkan 2 property: `Screen` dan `Navigator`. Mereka berdua adalah component react untuk melakukan configurasi navigator. 

penempatan dari `NavigationContainer` adalah didalam bagian aplikasi utama, `index.tsx` atau `app`. 

perhatikan code dibawah ini:
```Js 
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

// Pemilihan suatu "route" didasarkan "name"
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

```
- Sekarang kita berhasil membuat dua "routes"
- yaitu: `Home` dan `Details` route. 
- Cara membuat "route" adalah dengan bantuan `Screen`
- `name` adalah property yang akan merespon dari "route" yang akan digunakan. 


## Melakukan perubahan tampilan pada route 
`options` atau `screenOptions`

contoh: https://reactnavigation.org/docs/hello-react-navigation#specifying-options



***
# Tab Navigation / Nesting navigators 
***

ref: https://reactnavigation.org/docs/nesting-navigators

Tujuan dari "Nesting navigators" adalah untuk melakukan rendering "navigator" didalam screen dari "navigator" lain. 

```Js 
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

Untuk percobaan real-time local computer, hilangkan tag `<NavigationContainer>`

dengan urutan seperti ini: 

- Stack.Navigator
    - Home (Tab.Navigator)
        - Feed (Screen)
        - Messages (Screen)
    - Profile (Screen)
    - Settings (Screen)

## Terdapat Beberapa hal yang perlu diperhatikan 
ref: https://reactnavigation.org/docs/nesting-navigators#how-nesting-navigators-affects-the-behaviour

## Melakukan navigasi terhadap screen didalam navigator lain

ref: https://reactnavigation.org/docs/nesting-navigators#how-nesting-navigators-affects-the-behaviour

<!-- Akhir hari ini, lanjutkan 8-06-2024 -->



***
# Contoh code sederhana
***
```Js
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    
  );
}

export default App;
```

Ref: https://reactnavigation.org/docs/navigating

- Seperti yang saya katakan sebelumnya, sepertinya `NavigationContainer` sudah telah menjadi satu dengan `Stack.Navigator`


***
# Note Penting 
***
Untuk kemudian kita tidak perlu mengunakan `<NavigationContainer>`, **cukup pakai** `stack`


- "Navigator" - adalah component react yang akan mennentukan melakukan render "screens" mana yang akan dipilih. 
- "Router" - adalah koleksi fungsi yang dapat membantu kita untuk melakukan handle terhadap perubahan  action dan state didalam navigator.
- "Screen component" - adalah sebuah component yang kita gunakan didalam melakukan configurasi route.

- `Navigation Prop` "navigate" - digunakan untuk melakukan navigasi kita.


## Referensi 
- https://snack.expo.dev/ 
- https://medium.com/@tbgarza2/nested-navigation-react-navigation-4518c273b71e
- https://wix.github.io/react-native-navigation/docs/installing | react-native-navigation
