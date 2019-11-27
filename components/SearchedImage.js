import React from 'react';
import { View, Image } from 'react-native';
import { Card, CardItem } from 'native-base';

const SearchedImage = props => {
  return (
    <View style={{ paddingHorizontal: 8, paddingTop: 8 }}>
      <Card>
        <CardItem cardBody>
          <Image
            source={props.source}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>
    </View>
  );
};

export default SearchedImage;
