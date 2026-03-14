import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/Header';

export default function Caliber() {
    return (
    <View style={styles.container}>
        <Header/>
        <View style={styles.mainContent}>
            <View style={styles.mechanism}>
                <Image source={require('../assets/mechanism.png')} style={styles.mechanismPng}/>
            </View>
            <View style={styles.div}>
              <View style={styles.title_watch_div}>
                <Text style={styles.title_watch}>Caliber UN-118</Text>
                <Text style={styles.title_watch1}>Manufacture movement</Text>
                <Text style={styles.title_watch2}>----</Text>
              </View>
              <View>
                <Text style={styles.discription1}>NUMBER</Text>
                <Text style={styles.discription1}>OF PARTS</Text>
                <Text style={styles.discription12}>260</Text>
              </View>
              <View>
                <Text style={styles.discription1}>FREQUENC</Text>
                <Text style={styles.discription1}>Y (HZ)</Text>
                <Text style={styles.discription12}>4</Text>
              </View>
              <View>
                <Text style={styles.discription1}>POWER</Text>
                <Text style={styles.discription1}>RESERVE</Text>
                <Text style={styles.discription12}>60</Text>
              </View>
              <View>
                <Text style={styles.discription1}>FREQUENCY</Text>
                <Text style={styles.discription1}>(VPH)</Text>
                <Text style={styles.discription12}>28 800</Text>
              </View>
              <View>
                <Text style={styles.discription1}>FUNCTIONS</Text>
                <Text style={styles.discription12}>H/M/S Date</Text>
              </View>
              <View>
                <Text style={styles.discription1}>BALANCE TYPE</Text>
                <Text style={styles.discription12}>DCS</Text>
              </View>
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
    title_watch1:{
    width: 320,
    fontFamily: 'MonumentExtended',
    fontSize: 25,
    letterSpacing: 3,
  },
    title_watch2:{
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
    fontFamily: 'MonumentExtended',
    fontSize: 20,
  },
});