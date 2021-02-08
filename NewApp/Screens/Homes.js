import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Dashitem from './Dashitem';
export default function Homes() {
  const imageurl =
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
  return (
    <View style={styles.con}>
      <StatusBar hidden={true} />
      <ImageBackground
        source={require('./p1.jpg')}
        resizeMode="cover"
        style={styles.full}>
        <View>
          <View style={styles.topconatiner}>
            <Image
              source={{uri: imageurl}}
              style={{
                width: 150,
                height: 200,
                margin: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#fff',
              }}
            />
            <View style={styles.sideconatiner}>
              <Text style={styles.subtext}>Emilia heart</Text>
              <Text style={styles.subtext}>Software Developer</Text>
              <Text style={styles.subtext}>emilia@gmail.com</Text>
              <Text style={styles.subtext}>00-11-22-9999</Text>
            </View>
          </View>
          <View style={styles.dash}>
            <View style={styles.first}>
              <Dashitem name="car" newtext="Taxi Ride" color="#22ff" />
              <Dashitem name="ambulance" newtext="Health" color="#fff" />
              <Dashitem name="beer" newtext="Bar" color="#000" />
              <Dashitem name="book" newtext="Library" color="#266666" />
            </View>
            <View style={styles.first}>
              <Dashitem name="child" newtext="School" color="#884f2a" />
              <Dashitem name="eye" newtext="Optics" color="#2fd28e" />
              <Dashitem
                name="fire-extinguisher"
                newtext="Fire"
                color="#FF0000"
              />
              <Dashitem name="headphones" newtext="Music" color="#8A2BE2" />
            </View>
            <View style={styles.first}>
              <Dashitem name="twitter" newtext="Twitter" color="#0000ff" />
              <Dashitem name="linkedin" newtext="Linkedin" color="#0000CD" />
              <Dashitem
                name="facebook-square"
                newtext="facebook"
                color="#0000CD"
              />
              <Dashitem name="instagram" newtext="Insta" color="#FF4500" />
            </View>
            <View
              style={{
                top: 80,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontFamily: 'Orbitron-VariableFont_wght',
                }}>
                @SampleApp
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View>
        <Text>@SampleApp</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  full: {
    height: '100%',
    width: '100%',
  },
  topconatiner: {
    flexDirection: 'row',
    top: 10,
  },
  sideconatiner: {
    flexDirection: 'column',
    top: 2,
    left: 20,
    padding: 10,
  },
  subtext: {
    fontSize: 18,
    color: '#22ff',
    fontWeight: '500',
    margin: 5,
    padding: 5,
    fontFamily: 'Play-Bold',
  },
  dash: {
    flexDirection: 'column',
    top: 0,
  },
  first: {
    flexDirection: 'row',
    top: 20,
  },
  con: {
    flexDirection: 'column',
  },
});
