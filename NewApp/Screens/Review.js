import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function Review() {
  return (
    <View style={styles.elipse}>
      <View style={styles.rows}>
        <Image source={require('./bikes.jpg')} style={styles.ima} />
        <TouchableOpacity style={styles.demo}>
          <TextInput style={styles.bnn} placeholder="ENTER EMAIL" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.demo}>
          <TextInput style={styles.bnn} placeholder="ENTER PASSWORD" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.demoS}>
          <Text style={styles.bn}>CLICK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.subtext}>Forgot Password ? Click Here</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.register}>
          <Text style={styles.subtext}>Register Here</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.footer}>
        <Text style={styles.footerttext}>Need Help?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rightfooter}>
        <Text style={styles.footerttext}>Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  elipse: {
    backgroundColor: '#fafaf9',
    justifyContent: 'center',
    alignItems: 'center',

    flex: 1,
  },
  demo: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    width: 220,
    right: 10,
    marginTop: 10,
    elevation: 5,
  },
  rows: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bnn: {
    padding: 10,
    fontFamily: 'Play-Bold',
  },
  demoS: {
    backgroundColor: '#3f3f89',
    borderRadius: 10,
    width: 220,
    right: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    elevation: 5,
  },
  bn: {
    textAlign: 'center',
    padding: 5,
    color: '#fafafa',
    fontSize: 14,
    fontFamily: 'Cardo-Bold',
  },
  ima: {
    height: 150,
    width: 150,
    borderRadius: 25,
    bottom: 20,
  },
  forgot: {
    padding: 10,
  },
  subtext: {
    fontFamily: 'Play-Bold',
    fontWeight: '100',
    color: '#00000f',
  },
  footer: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    left: 130,
    top: 120,
    padding: 10,
  },
  footerttext: {
    fontFamily: 'Play-Bold',
    color: '#1f1f1f',
  },
  rightfooter: {
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    right: 130,
    top: 80,
    padding: 10,
  },
});
