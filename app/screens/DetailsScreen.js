// DetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationButton from './NavigationButton';
import BackButton from './BackButton';
import InfoCard from './InfoCard';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
      </View>
      <InfoCard
        imageSource={require('../assets/ChefAnaz.jpg')}
        name="Anaz Hariz"
        description="Chef"
        count={10}
        backgroundColor="#E8F5E9"
      />
      <Text style={styles.title}>User List</Text>
      {/* <NavigationButton screenName="Home" title="Go to Home Screen" /> */}
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
    width: '100%', //adjust back button
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
