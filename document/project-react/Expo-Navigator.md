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

Setiap navigator memiliki "history" mereka sendiri-sendiri. Sebagai contoh jika kamu menjalankan sebuah navigator didalam "screen" maka kamu akan dapat kembali kedalam navigator semula dimana "navigator" parent berada. 

### Tugas: 

Membuat sebuah app navigator dimana terdapat: 
- `Profile` - screen 
- `Home` - screen 
- `EmptyScreen` - `Settings` - screen 
- `EmptyScreen` - `EditPost` - screen

dan: 
- pada `Home` screen, kita bisa akses `Profile` dan `EmptyScreen`
- pada component app, kita akan membuat "navigator" utama, dimana mereka bisa diakses dari mana saja didalam component childern.

```Js 
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

let Tab = createBottomTabNavigator()
let Stack = createNativeStackNavigator()

function Profile({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        onPress={() => navigation.navigate('EditPost')}
        title="Go to Edit Post"
      />
    </View>
  )
}

function EmptyScreen(){
  return (
    <View>
      <Text>Hai, this is Empty and dummy screen</Text>
    </View>
  )
}

function Home(){
  // tidak boleh ada selain Screen didalam navigator
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={EmptyScreen} />
    </Tab.Navigator>
  )
}

function App(){
  // Halaman utama akan diambil dari 
  // Stack.Screen pertama,
  // untuk akses Stack Screen kedua "EditPost"
  // kita bisa akses dari component "Profile" "navigation"!!
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name='EditPost' component={EmptyScreen} />
    </Stack.Navigator>
  )
}

export default App
```


***
# Navigation lifecycle 
***

Pada topic sebelumnya kita telah mempelajari bagiama mengunakan `navigation.navigate('RouteName')` untuk melakukan navigasi diantara routes.

Pertanyaan: Apa yang terjadi jika kita melakukan navigasi jauh dari `Home`, atau bagaimana cara kita kembali? Bagaimana suatu route mencari tau user pergi dan kembali?

contoh code: (Src)[../../code/jsPro/React-Navigator-Expo/index-nesting-nagvigator.tsx]

Dimana disini, kita akan membuat dua "child container", yang berfungsi sebagai:

**Tujuan**

- Dimana screen awal adalah "setting". 
- Terdapat dua screen utama "setting" dan "Home"
- Kita tidak bisa membuat button pada "setting", untuk akses creen didalam "Home", dan sebaliknya.

```Js
<Tab.Navigator screenOptions={{ headerShown: false }}>
 <Tab.Screen name="First">

 {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen name="Settings" component={SettingsScreen}/>
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}

 </Tab.Screen>
 <Tab.Screen name="Second">

 {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}

</Tab.Screen>
```

- "Home" hanya bisa akses "Details"
- "Settings" hanya bisa akses profile





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

***
# mengetahui kapan masuk dan keluar screen (LifeCyle)
***


```Js
import { useState, useCallback } from "react"
import { useFocusEffect } from '@react-navigation/native';

useFocusEffect(
    useCallback(() => {
      console.log('Screen was focused ( Mount )');
      // Do something when the screen is focused
      return () => {
        console.log('Screen was unfocused ( Unmount )');
        setCount(0)
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );
```

[source code](../../code/jsPro/React-Navigator-Expo/index-lifecylce-navigator.tsx)


***
# Tugas Akhir, membuat pilihan keluar atau stay pada screen 
***
Ref: https://reactnavigation.org/docs/preventing-going-back


***

***


***
# Berpindah antara screen dan Back() 
*** 

```js 
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

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

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

**Titik Penting:**

```Js 
 <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />

      <Button title="Go back" onPress={() => navigation.goBack()} />
```

ref: https://stackoverflow.com/questions/51090135/react-navigation-v2-difference-between-navigation-push-and-navigation-navigate

***
# Passing Parameter to routes
***

```Js 

// ============== Send Params ===============
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

// ============= get the params =============
function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

```

**Point penting :***

```Js 
// ====== Params sender ==========

<Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />


// =============== Params receiver ==========

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
```


**Atau dengan :**

initial params. dimana ini kita tulis didalam screen. 

```Js 
<Stack.Screen
  name="Details"
  component={DetailsScreen}
  initialParams={{ itemId: 42 }}
/>
```

***
# useNavigation
***
Ref: https://reactnavigation.org/docs/use-navigation/

Sebuah metode untuk berpindah screen jika kita berada didalam component paling bawah. 

***
# StackAction
***

Ref: https://reactnavigation.org/docs/stack-actions/


StackAction push adalah sebuah metode untuk kita mengirim data dari screen lain

- Gunakan "Push" ketika Anda ingin menambahkan layar baru ke riwayat navigasi dan memungkinkan pengguna untuk kembali ke layar sebelumnya.
- Gunakan "Replace" ketika Anda ingin mengganti layar yang ada dengan layar baru dan mencegah pengguna kembali ke layar yang diganti.


## Referensi 
- https://snack.expo.dev/ 
- https://medium.com/@tbgarza2/nested-navigation-react-navigation-4518c273b71e
- https://wix.github.io/react-native-navigation/docs/installing | react-native-navigation
