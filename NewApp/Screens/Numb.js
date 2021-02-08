import React from 'react';
import {View, Text} from 'react-native';

export default function Numb(props) {
  return (
    <View>
      <Text style={{color: '#2c2a', fontSize: 25}}>{props.count}</Text>
    </View>
  );
}
