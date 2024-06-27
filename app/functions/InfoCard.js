// InfoCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const InfoCard = ({ imageSource, name, description, count, backgroundColor }) => {
  return (
    <View style={[styles.card, {backgroundColor}]}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.countContainer}>
        <Text style={styles.count}>{count}</Text>
        <Text style={styles.arrow}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  imageContainer: {
    marginRight: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#777',
  },
  countContainer: {
    alignItems: 'flex-end',
  },
  count: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 16,
    color: '#777',
  },
});

export default InfoCard;
