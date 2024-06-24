// app/screens/NavigationButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavigationButton = ({ screenName, title, style, textStyle }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => navigation.navigate(screenName)}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default NavigationButton;
