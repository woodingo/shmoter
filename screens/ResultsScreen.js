import * as React from 'react';
import { StyleSheet, FlatList, ScrollView } from 'react-native';
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
    <ScrollView style={styles.container}>
      {picture && <SearchedImage source={picture} />}
      <FlatList
        style={styles.list}
        data={data}
        renderItem={Item}
        numColumns={2}
      />
    </ScrollView>
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
  list: {
    padding: 4,
  },
});

export default ResultsScreen;
