// ImageField.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageField = ({ source, style, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image source={source} style={[styles.image, style]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default ImageField;
