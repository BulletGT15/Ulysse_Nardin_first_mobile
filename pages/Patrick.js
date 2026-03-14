import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Header';

export default function Patrick() {
    return (
    <View style={styles.container}>
        <Header/>
        <Image style={styles.patrick} source={require('../assets/Patrick.png')}/>
        <View style={styles.div}>
            <Image source={require('../assets/jak.png')}/>
            <Text style={styles.text1}>Patrick Pruniaux</Text>
            <Text style={styles.text2}>In 2014, Patrick was hired by Apple, in Cupertino, to prepare the launch of the Apple Watch as a member of the Special Projects team.</Text>
            <Text style={styles.text3}>Meet our Team of Ulysses</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#080c1e',
  },
  patrick:{
    width: 390,
    height: 600,
    position: 'absolute',
    top: 0,
  },
  div:{
    width: 390,
    height: 280,
    backgroundColor: '#233548',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
  },
  text1:{
    fontFamily: 'MonumentExtended',
    fontSize: 25,
    color: 'white',
    letterSpacing: 3,
  },
  text2:{
    fontFamily: 'MonumentExtended',
    width: 250,
    textAlign: 'center',
    color: '#5E7284',
  },
  text3:{
    width: 250,
    height: 40,
    textAlign: 'center',
    alignContent: 'center',
    fontFamily: 'MonumentExtended',
    color: 'white',
    backgroundColor: '#5E7284',
    borderRadius: 10,
  },
});