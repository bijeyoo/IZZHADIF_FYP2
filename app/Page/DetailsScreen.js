import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import BackButton from '../functions/BackButton';
import InfoCard from '../functions/InfoCard';
import BigInfoCard from '../functions/BigInfoCard';
import ScrollBar from '../functions/ScrollBar';
import ChefKumar from '../Page/ChefKumar';


const DetailsScreen = ({ navigation }) => {

const items1 = [
  {
  img : require('../assets/ChefKumar.jpg'),
  name : 'Chef Kumar',
  description : 'Head Chef of Steak and Surf Restaurant at Impian Hotel',
  inside: {
    img:  require('../assets/cheflogo.jpg'),
    name: '5 years experience',
  }
  }
];

const items2 = [
  {
    img: require('../assets/ChefAnaz.jpg'),
    name: 'Chef Anaz',
    description: 'Expert Chef in Malay Cuisine and learning French Cuisine ',
    inside: {
      img: require('../assets/cheflogo.jpg'),
      name: '2 years experience',
    }
  }
];

const handleCardPress1 = (item) => {

   navigation.navigate('ChefKumar',{ item });
};

const handleCardPress2 = (item) => {
  alert("You clicked on Chef Anaz profile!");
};



  return (
    <ScrollBar contentContainerStyle={styles.scrollViewContent}>
   
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <InfoCard
        imageSource={require('../assets/ChefAnaz.jpg')}
        name="Anaz Hariz"
        description="Chef"
        count={3}
        backgroundColor="#ffd700"
        
      />
      <InfoCard
        imageSource={require('../assets/ChefKumar.jpg')}
        name="Kumar Ganeshan"
        description="Chef"
        count={5}
        backgroundColor="#ff0000"
      />
      
      <BigInfoCard  items={items1} onPress={handleCardPress1} />
     
      
      <BigInfoCard items={items2} onPress={handleCardPress2} />
      
      </ScrollBar>
    
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
