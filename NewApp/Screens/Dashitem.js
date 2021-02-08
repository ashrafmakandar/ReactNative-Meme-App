/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Dashitem(props) {
  return (
    <View style={styles.single}>
      <View style={styles.round}>
        <FontAwesome name={props.name} size={50} color={props.color} />
        <Text style={styles.suptext}>{props.newtext}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  single: {
    flexDirection: 'column',
 margin:5,flexWrap:"wrap",
  },
  round: {
    margin: 2,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width:85,height:110
 
  
  },
  suptext: {
    top: 20,
    padding: 2,
    fontSize:13,
    fontFamily:"Play-Bold",
  },
});
