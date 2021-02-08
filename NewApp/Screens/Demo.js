import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
export default function Demo({route, navigation}) {
  const {name, email, address} = route.params;
  return (
    <View style={styles.contents}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Log');
        }}>
        <Text style={styles.alltext}>{name}</Text>
      </TouchableOpacity>

      <Text style={styles.alltext}>{email}</Text>
      <Text style={styles.alltext}>{address}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  contents: {
    top: 150,
    margin: 100,
  },
  alltext: {
    fontStyle: 'italic',
    fontSize: 15,
    color: '#889977',
  },
});
