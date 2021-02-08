import React from 'react';
import {View, Text} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import New from './New';
import Check from './Check';
import Nullll from './Nullll';
import Sta from './Sta';
import Login from './Login';
import Settings from './Settings';
import Review from './Review';
const Drawer = createDrawerNavigator();
export default function Log() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Sta"
        component={Sta}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Nullll" component={Nullll} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Review" component={Review} />

    </Drawer.Navigator>
  );
}
