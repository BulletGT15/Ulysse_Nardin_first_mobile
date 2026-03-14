import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

export default function Header({ title = "Marine Torpilleur" }) {
  const navigation = useNavigation();
  
  const [fontsLoaded] = useFonts({
    'MonumentExtended': BebasNeue_400Regular,
  });

  if (!fontsLoaded) return null;

  const handleTitlePress = () => {
    navigation.navigate('Patrick');  // ← Изменено на Patrick
  };

  const handleMenuPress = () => {
    navigation.navigate('Marine_Torpilleur');
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleTitlePress} style={styles.titleContainer}>
        <Text style={styles.title}>ULYSSE <Text style={styles.title2}>NARDIN</Text></Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
        <View style={styles.menuLine} />
        <View style={styles.menuLine} />
      </TouchableOpacity>
    </View>
  );
}

// styles остаются те же
const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#1e3b8a00',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
    zIndex:1,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'MonumentExtended',
    letterSpacing: 3,
  },
  title2: {
    color: '#ffffff50'
  },
  menuButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
  },
  menuLine: {
    height: 3,
    width: 24,
    backgroundColor: 'white',
    marginBottom: 3,
    borderRadius: 2,
  },
});
