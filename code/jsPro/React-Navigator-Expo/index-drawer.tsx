import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


// Parameter "navigation"
// Bekerja dikarenakan ada "NavigationContainer" didalam "Drawer.Navigator"
// Berfungsi sebagai tombol yang dapat memindahkan kita kemana saja, berdasarkan "Drawer name"

// Sedangakan "Drawer.Screen" berfungsi memunculkan menu pada bagian kiri, yang dapat membantu kita berpindah-pindah halaman

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#380953',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{
  title: 'Homepage Service',
}}/>
      <Drawer.Screen name="Details" component={DetailsScreen} options={{
  title: 'Detail Menu Seriice',
}}/>

<Drawer.Screen name="Contacts" component={ContactScreen} options={{
  title: 'Detail Contact',
}}/>
    </Drawer.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate('Contacts')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Homepage"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function ContactScreen({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput placeholder="Nama Anda"  />
      <TextInput placeholder="Pesan"  />
      <View >
        <Button title="Kirim" />
      </View>
      <Button
        title="Go to HOmePage"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
       <MyDrawer />
    
  );
}

export default App;

