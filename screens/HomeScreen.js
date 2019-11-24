import React, { useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Camera from '../components/Camera';

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <Camera></Camera>
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
