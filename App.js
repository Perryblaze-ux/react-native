import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

import React from 'react';

import Home from "./views/Home"
import login from "./views/login"
import cart from "./views/cart"


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer  >
    
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="login">
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="login" component={login}/>
    <Stack.Screen name="cart" component={cart}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'justify',
    justifyContent: 'justify',
  },
});
