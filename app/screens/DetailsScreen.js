// app/screens/DetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationButton from './NavigationButton';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <NavigationButton screenName="Home" title="Go to Home Screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DetailsScreen;
