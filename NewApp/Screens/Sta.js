import React from 'react';
import { View, Text, CheckBox } from 'react-native';
import Check from './Check';
import Home from './Homes';
import { createStackNavigator } from '@react-navigation/stack';
import Homes from './Homes';
import Memes from './Memes';
import Comp from './Comp';
const Stack = createStackNavigator();
export default function Sta() {
    return (
        <Stack.Navigator initialRouteName="Memes">

        <Stack.Screen name="Memes" component={Memes} options={{headerShown: false}}   />
        <Stack.Screen name="Comp" component={Comp}    />
        

      </Stack.Navigator>
    )
}
