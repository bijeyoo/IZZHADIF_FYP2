// BackButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure you have installed react-native-vector-icons

const BackButton = ({ style, textStyle, iconSize = 24 }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" size={iconSize} color="#000" />
      <Text style={[styles.text, textStyle]}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 5,
    fontSize: 16,
  },
});

export default BackButton;
