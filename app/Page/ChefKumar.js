import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const ChefKumar = () => {
    return(
        <View style={styles.container}>
            <Text>Chef Kumar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
    },
  });
  

export default ChefKumar;