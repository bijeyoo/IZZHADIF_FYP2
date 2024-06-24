// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomInput from './app/screens/CustomInput'; 
import ImageField from './app/screens/ImageField';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import DetailsScreen from './app/screens/DetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
