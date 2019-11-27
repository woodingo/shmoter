import * as React from 'react';
import { StyleSheet, FlatList, ScrollView } from 'react-native';
import $picture from '../stores/picture';
import { useStore } from 'effector-react';
import SearchedImage from '../components/SearchedImage';
import Item from '../components/Item';
import $results from '../stores/results';

const ResultsScreen = props => {
  const picture = useStore($picture);
  const results = useStore($results);

  return (
    <ScrollView style={styles.container}>
      {picture && <SearchedImage source={picture} />}
      <FlatList
        style={styles.list}
        data={results}
        renderItem={itemProps => (
          <Item
            onPress={() => props.navigation.navigate('Product')}
            {...itemProps}
          />
        )}
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
