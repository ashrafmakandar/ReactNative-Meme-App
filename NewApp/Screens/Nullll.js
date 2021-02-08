import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import New from './New';
import Log from './Log';
import Des from './Des';
import Home from './Homes';
import Sta from './Sta';

const Tab = createMaterialTopTabNavigator();
export default function Nullll() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Des" component={Des} />
      <Tab.Screen name="Log" component={Log}  options={{headerShown: false}}/>
      <Tab.Screen name="Sta" component={Sta} />
    </Tab.Navigator>
  );
}
