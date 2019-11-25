import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import $picture from '../stores/picture';
import { useStore } from 'effector-react';

const ResultsScreen = () => {
  const picture = useStore($picture);

  return (
    <View style={styles.container}>
      <Text>{picture.uri}</Text>
      {picture && (
        <Image source={picture} style={{ width: 200, height: 200 }} />
      )}
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
