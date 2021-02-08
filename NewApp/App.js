import React from 'react';
import New from './Screens/New';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Demo from './Screens/Demo';
import Log from './Screens/Log';
import Comp from './Screens/Comp';
const Stack = createStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="New">
        <Stack.Screen name="New" component={New} />
        <Stack.Screen name="Comp" component={Comp}  />
 
      </Stack.Navigator>
   

    </NavigationContainer>
  
  )
}
