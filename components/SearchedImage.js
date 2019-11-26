import React from 'react';
import { View, Image } from 'react-native';

// const dimensions = Dimensions.get('window');
// const imageHeight = Math.round((dimensions.width * 9) / 16);

const SearchedImage = props => {
  return (
    <View style={{ paddingHorizontal: 8, paddingTop: 9 }}>
      <Image
        source={props.source}
        style={{
          width: '100%',
          height: 200,
          resizeMode: 'cover',
          borderRadius: 2,
        }}
      />
    </View>
  );
};

export default SearchedImage;
