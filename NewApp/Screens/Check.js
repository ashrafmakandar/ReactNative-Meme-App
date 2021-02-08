import React, {useState, useEffect} from 'react';
import Video from 'react-native-video';
import Modal from 'react-native-modal';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import Numb from './Numb';
export default function Check({route, navigation}) {
  const [name, setName] = useState([]);
  const [pass, setPass] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [values, setValues] = useState();
  const [na, setNa] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@name');
      if (value == 'ashraf') {
        setModalVisible(true);
        setValues(value);
        setNa(value);
        navigation.navigate('Homes');
      }
    } catch (e) {}
  };
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@name', 'ashraf');
    } catch (e) {}
  };

  function getlogin() {
    if (name == null) {
      setValues('name is null');
      setModalVisible(true);
    } else if (pass == null) {
      setValues('pass is null');
      setModalVisible(true);
    } else if (name == 'ashraf' && pass == '12345') {
      navigation.navigate('Homes');
      storeData();
    } else {
      //alert('values not matched');
      setValues('values not matched');
      setModalVisible(true);
    }
  }
  return (
    <View>
      <StatusBar hidden={true} />
      <Video
        source={{
          uri:
            'https://assets.mixkit.co/videos/preview/mixkit-locating-an-area-on-a-digital-map-on-a-tablet-39793-large.mp4',
        }}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />
      <Modal
        isVisible={isModalVisible}
        coverScreen={false}
        onBackdropPress={() => setModalVisible(false)}>
        <View
          style={{
            height: 150,
            width: 250,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            top: 300,
            borderRadius: 10,
            fontFamily: 'Orbitron-VariableFont_wght',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'Orbitron-VariableFont_wght',
            }}>
            {values}
          </Text>
          <Text>{na}</Text>
        </View>
      </Modal>

      <View style={styles.contain}>
        <View style={styles.heading}>
          <Text style={styles.headingtext}>Sample App</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.name}
            placeholderTextColor="#fff"
            placeholder="Enter Name"
            onChangeText={(text) => {
              setName(text);
            }}
          />
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.name}
            placeholderTextColor="#fff"
            placeholder="Enter Password"
            onChangeText={(text) => {
              setPass(text);
            }}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.logibntn} onPress={() => getlogin()}>
          <Text style={styles.logintext}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.divs}>
          <Text style={styles.news}>New User? Regsiter Here</Text>
          <Text style={styles.news}>Forgot Password? Click Here</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  iamges: {
    height: '100%',
    width: '100%',
  },
  contain: {
    height: 300,
    width: 250,
    marginTop: 120,
    backgroundColor: '#ffff0000',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  heading: {
    color: '#000',
  },
  headingtext: {
    fontSize: 25,
    color: '#fff',
    padding: 10,
    fontFamily: 'Orbitron-VariableFont_wght',
  },
  form: {
    padding: 5,
  },
  name: {
    height: 50,
    width: 250,
    color: '#000888',
    margin: 5,
    fontSize: 20,
    borderRadius: 10,
    borderColor: '#dddd',
    fontFamily: 'Cardo-Bold',
    borderWidth: 2,
    backgroundColor: '#ffff0000',
  },
  logibntn: {
    width: 100,
    backgroundColor: '#ffff0000',
    borderWidth: 1,
    borderColor: '#fff',
    margin: 10,
    padding: 5,
    borderRadius: 12,
  },
  logintext: {
    padding: 5,
    fontSize: 15,
    color: '#fffff1',
    textAlign: 'center',
    fontFamily: 'Play-Bold',
  },
  divs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  news: {
    fontSize: 15,
    padding: 2,
    margin: 2,
    color: '#fff',
    fontFamily: 'Play-Bold',
  },
  backgroundVideo: {
    height: '200%',
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
});
