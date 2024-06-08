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

***
# Note Penting 
***
Untuk kemudian kita tidak perlu mengunakan `<NavigationContainer>`, **cukup pakai** `stack`



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


##
- https://snack.expo.dev/ 
- https://medium.com/@tbgarza2/nested-navigation-react-navigation-4518c273b71e
- https://wix.github.io/react-native-navigation/docs/installing | react-native-navigation
