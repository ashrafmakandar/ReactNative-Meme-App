import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
export default function Des() {
  const [task, setTask] = useState([]);
  const [list, setList] = useState([]);

  function adddata() {
    var data = task;
    setList([...list, data]);
  }
  function getclick(name) {
    alert(name);
  }
  return (
    <View>
      <TextInput
        placeholder="ENTER SOME TASK"
        placeholderTextColor="#888fff"
        style={{
          borderWidth: 1,
          borderColor: '#444777',
          margin: 20,
          padding: 5,
          borderRadius: 6,
        }}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity
        style={{
          borderColor: '#ddffee',
          borderWidth: 1,
          margin: 10,
          padding: 10,
          backgroundColor: '#99ddaa',
          width: 110,
          left: 120,
          borderRadius: 12,
        }}
        onPress={() => {
          adddata();
        }}>
        <Text style={{fontSize: 15}}>Click To Add</Text>
      </TouchableOpacity>

      <FlatList
        style={{margin: 2, borderWidth: 1, borderColor: '#fff'}}
        data={list}
        renderItem={({item}) => (
          <View
            style={{
              margin: 5,
              padding: 10,
              borderColor: '#222fff',
              borderWidth: 1,
            }}>
            <TouchableOpacity
              onPress={() => {
                getclick(item);
              }}>
              <Text style={{fontSize: 15}}>{item}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
