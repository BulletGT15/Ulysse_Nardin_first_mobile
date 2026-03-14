import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Marine_Torpilleur from './pages/Marine_Torpilleur.js';
import Caliber from './pages/Caliber.js';
import Patrick from './pages/Patrick.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Marine_Torpilleur" component={Marine_Torpilleur}/>
        <Stack.Screen name="Caliber" component={Caliber}/>
        <Stack.Screen name="Patrick" component={Patrick}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
