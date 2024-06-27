// CustomInput.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure you have installed react-native-vector-icons

const CustomInput = ({ label, placeholder, keyboardType, value, onChangeText, isPassword }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.form}>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>{label}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#6b7280"
            style={styles.inputControl}
            value={value}
            secureTextEntry={secureTextEntry}
          />
          {isPassword && (
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
              <Icon
                name={secureTextEntry ? 'eye-off' : 'eye'}
                size={20}
                color="#6b7280"
              />
            </TouchableOpacity>
          )}
        </View>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputControl: {
    flex: 1,
    height: 40,
  },
  toggleButton: {
    padding: 5,
  },
});

export default CustomInput;
