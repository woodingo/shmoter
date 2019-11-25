import * as React from 'react';
import { Button, Image, View, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const ResultsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
    </View>
  );
};

ResultsScreen.navigationOptions = {
  title: 'Search Results',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
});

export default ResultsScreen;
