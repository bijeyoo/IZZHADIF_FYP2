// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/Page/LoginScreen';
import DetailsScreen from './app/Page/DetailsScreen';
import ChefKumar from './app/Page/ChefKumar';
import ChefAnaz from './app/Page/ChefAnaz';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ChefKumar" component={ChefKumar} />
        <Stack.Screen name="ChefAnaz" component={ChefAnaz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
