// CustomInput.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ label, placeholder, keyboardType, value, onChangeText }) => {
  return (
    <View style={styles.form}>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#6b7280"
          style={styles.inputControl}
          value={value}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    marginVertical: 10,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputControl: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default CustomInput;
