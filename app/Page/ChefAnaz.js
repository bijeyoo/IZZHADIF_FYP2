import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const ChefAnaz = () => {
    return(
        <View style={styles.container}>
            <Text>Chef Anaz</Text>
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
  
export default ChefAnaz;