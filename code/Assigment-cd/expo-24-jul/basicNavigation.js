import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyBackButton() {
  const navigation = useNavigation();
  // Dengan UseNavigation kita bisa akses parameter navigation
  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}

function Home({navigation}) {
  return(
    <View>
      <Text>Halo dunia Home</Text>
      <Button
      title="To Profile"
      onPress={() => {
        navigation.dispatch(StackActions.replace('Profile', { user: 'Wojtek' }));
      }}
    />
    </View>
  )
}

function Profile({navigation, route}) {
  return(
    <View>
      <Text>Halo dunia Profiule {route.params.user}</Text>
      <Button
      title="To Profile"
      onPress={() => {
        navigation.navigate('Home');
      }}
    />
    <MyBackButton/>
    </View>
  )
}

export default function App() {
  return (

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>

  );
}

