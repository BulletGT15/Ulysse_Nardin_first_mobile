import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';  // ← +TouchableOpacity
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

export default function Marine_Torpilleur() {
  const navigation = useNavigation();

  const handleWatchPress = () => {
    navigation.navigate('Caliber');  // ← На Caliber по клику на watch1
  };

  return (
    <View style={styles.container}>
      <Header title="Marine Torpilleur" />
      <View style={styles.mainContent}>
        <Text style={styles.MarineText}>Marine Torpilleur <br/> <Text style={styles.MarineText1}>42 mm</Text></Text>
        
        {/* Обернули Image в TouchableOpacity */}
        <TouchableOpacity onPress={handleWatchPress}>
          <Image source={require('../assets/watch1.png')} style={styles.watch1}/>
        </TouchableOpacity>
        
        <View style={styles.cart}>
          <Text style={styles.cartText}>
            <Image source={require('../assets/Union.png')} style={styles.cart_logo}/> 
            CART <Text style={styles.cartText1}>----</Text> 2
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#213345',
  },
  content: {
    flex: 1,
    marginTop: 60, // Высота header
  },
  mainContent: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  MarineText: {
    fontSize: 30,
    fontWeight: '400',
    letterSpacing: 5,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'MonumentExtended',
  },
  MarineText1:{
    fontSize: 25,
    color: '#ffffff50',
  },
  watch1:{
    width: 400,
    height: 400,
    marginBottom: 100,
  },
  cart:{
    width: 300,
    height: 80,
    backgroundColor: '#3f3f3f78',
    borderTopLeftRadius: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  cart_logo:{
    width: 25,
    height: 30,
  },
  cartText:{
    display: 'flex',
    width: 250,
    height: 50,
    fontFamily: 'MonumentExtended',
    fontSize: 30,
    letterSpacing: 5,
    color: 'white',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  cartText1:{
    color: '#ffffff50',
  },
});
