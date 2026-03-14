import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

export default function Caliber() {
    return (
    <View style={styles.container}>
        <Header/>
        <View style={styles.mainContent}>
            <View style={styles.mechanism}>
                <Image source={require('../assets/mechanism.png')} style={styles.mechanismPng}/>
            </View>
            <View style={styles.div}>
                <Text style={styles.title_watch}>Caliber UN-118 <br/>Manufacture movement <br/> ----</Text>
                <Text style={styles.discription1}>NUMBER <br/>OF PARTS <br/><br/> <Text style={styles.discription12}>260</Text></Text>
                <Text style={styles.discription1}>FREQUENC <br/>Y (HZ) <br/><br/> <Text style={styles.discription12}>4</Text></Text>
                <Text style={styles.discription1}>POWER <br/>RESERVE (H) <br/><br/> <Text style={styles.discription12}>60</Text></Text>
                <Text style={styles.discription1}>FREQUENCY <br/>(VPH) <br/><br/> <Text style={styles.discription12}>28 800</Text></Text>
                <Text style={styles.discription1}>FUNCTIONS <br/><br/> <Text style={styles.discription12}>H/M/S Date</Text></Text>
                <Text style={styles.discription1}>BALANCE TYPE <br/><br/> <Text style={styles.discription12}>DCS</Text></Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#white',
    backgroundColor: 'white',
  },
  mechanism:{
    width: 390,
    height: 350,
    position: 'absolute',
    top: -60,
    zIndex: 2,
    backgroundColor: '#9e9e9e',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  mechanismPng:{
  },
  title_watch:{
    width: 320,
    fontFamily: 'MonumentExtended',
    fontSize: 25,
    letterSpacing: 3,
  },
  div:{
    width: 390,
    height: 484,
    backgroundColor: 'white',
    position: 'absolute',
    top: 300,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-evenly',
    alignItems: 'center',
  },
  discription1:{
    width: 150,
    fontSize: 20,
    fontFamily: 'MonumentExtended',
    color: '#898989a0',
  },
  discription12:{
    color: '#3D566D',
  },
});
