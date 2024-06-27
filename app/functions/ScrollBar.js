// ScrollBar.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const ScrollBar = ({ children, style, contentContainerStyle, horizontal }) => {
  return (
    <ScrollView
      style={[styles.scrollView, style]}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      horizontal={horizontal}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={horizontal}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default ScrollBar;
