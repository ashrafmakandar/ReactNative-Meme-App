import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Linking,
} from 'react-native';
import {
  Button,
  Card,
  Image,
  Overlay,
  Icon,
  SocialIcon,
} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import Share from 'react-native-share';
export default function Comp({route, navigation}) {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [imageurls, setImageurls] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = route.params;
  const [visible, setVisible] = useState(false);
  function fetchdata() {
    fetch(
      'https://api.imgflip.com/caption_image?template_id=' +
        id +
        '&username=ashrafmakandar&password=ashraf1234&text0=' +
        first +
        '&text1=' +
        second,
      {
        method: 'POST',
      },
    )
      .then((response) => response.json())
      .then((responsejson) => {
        console.log('apivalues', responsejson);

        setImageurls(responsejson.data.url);
        setLoading(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function sharedata() {
    Linking.openURL(imageurls).catch((err) =>
      console.error('An error occurred', err),
    );
  }
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <FastImage
          style={{
            width: 380,
            height: 200,
            borderRadius: 1,
            borderWidth: 1,
            backgroundColor: '#fff',
            margin: 1,
            padding: 1,
            borderRadius: 10,
          }}
          source={{
            uri: imageurls,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      ) : (
        <Text />
      )}
      <TextInput
        placeholder="Enter First Text"
        onChangeText={(text) => {
          setFirst(text);
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter Second Text"
        onChangeText={(text) => {
          setSecond(text);
        }}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => {
          fetchdata();
        }}
        style={styles.click}>
        <Text style={styles.clicktext}>Click Here To Get Meme</Text>
      </TouchableOpacity>
      {loading ? (
        <View style={styles.contain}>
          <TouchableOpacity style={styles.options}>
            <Text style={styles.optionstext}>DOWNLOAD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.options}
            onPress={() => {
              sharedata();
            }}>
            <Text style={styles.optionstext}>OPEN IN BROWSER</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1F1',
    margin: 5,
  },
  input: {
    backgroundColor: '#fff2ff',
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
    borderRadius: 2,
    fontSize:20,
    color:"#888",
    fontFamily:'Cardo-Bold'
  },
  click: {
    paddingVertical: 15,
    backgroundColor: '#dddfff',
    borderWidth: 1,
    borderColor: '#fff',
    margin: 10,
  },
  contain: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  options: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    height: 45,
    width: 100,
    backgroundColor: '#dddfff',
  },
  optionstext: {
    textAlign: 'center',
    fontFamily:'Cardo-Bold'
  },
  clicktext: {
    textAlign: 'center',
    fontFamily:'Orbitron-VariableFont_wght',fontSize:20
  },
});
