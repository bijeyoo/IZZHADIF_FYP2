import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from './BackButton';
import InfoCard from './InfoCard';
import BarChartComponent from './BarChartComponent';

const DetailsScreen = ({ navigation }) => {

  //const [data] = useState([4, 5, 8,10]); // Hardcoded bar chart data

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <InfoCard
        imageSource={require('../assets/ChefAnaz.jpg')}
        name="Anaz Hariz"
        description="Chef"
        count={10}
        backgroundColor="#ffd700"
        
      />
      <InfoCard
        imageSource={require('../assets/ChefKumar.jpg')}
        name="Kumar Ganeshan"
        description="Chef"
        count={5}
        backgroundColor="#ff0000"
      />
      
      <Text style={styles.title}>User List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DetailsScreen;
