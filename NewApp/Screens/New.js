import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
export default function Memes({route,navigation}) {
  const [meme, setMeme] = useState([]);

  function fetchmemes() {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((resjson) => {
        console.log('data', resjson.data.memes);
        setMeme(resjson.data.memes);
      });
  }
  function getitem(id){
     
      navigation.navigate('Comp',{
          id:id
      });
  }

  useEffect(() => {
    fetchmemes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={meme}
        keyExtractor={(id) => meme.id}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity onPress={()=>{
                getitem(item.id)
            }}>
            
            <FastImage
                style={{width: 380, height: 250, borderRadius:5, borderWidth:1,margin:5}}
                source={{
                  uri: item.url,
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              
         
         
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
});
