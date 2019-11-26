import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import $picture from '../stores/picture';
import { useStore } from 'effector-react';
import SearchedImage from '../components/SearchedImage';
import Item from '../components/Item';

const data = [
  { key: 'A' },
  { key: 'B' },
  { key: 'C' },
  { key: 'D' },
  { key: 'E' },
  { key: 'F' },
];

const ResultsScreen = () => {
  const picture = useStore($picture);

  return (
    <View style={styles.container}>
      {picture && <SearchedImage source={picture} />}
      <View style={{ flex: 1, padding: 4, flexDirection: 'column' }}>
        <FlatList data={data} renderItem={Item} numColumns={2} />
      </View>
    </View>
  );
};

ResultsScreen.navigationOptions = {
  title: 'Search Results',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
  },
});

export default ResultsScreen;
