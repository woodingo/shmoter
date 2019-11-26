import React from 'react';
import { Image, View, Text, Dimensions } from 'react-native';

// const dimensions = Dimensions.get('window');
// const imageHeight = Math.round((dimensions.width * 9) / 16);

const Item = props => {
  return (
    <View style={{ flex: 1, padding: 4 }}>
      <View
        style={{
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: 'white',
        }}
      >
        <Image
          source={{
            uri:
              'https://cdn11.bigcommerce.com/s-mfcpiiyu2d/images/stencil/2048x2048/products/197/718/Atalaya_Hunt_35_Carbon_X-Wide_Rainbow_Wall_Side_Low_Sq__24927.1564159445.1280.1280__41913.1565022873.jpg?c=2',
          }}
          style={{
            flex: 1,
            height: Dimensions.get('window').width / 2,
            resizeMode: 'cover',
          }}
        />
        <Text
          style={{
            color: 'grey',
            paddingTop: 4,
            paddingBottom: 8,
            paddingHorizontal: 8,
          }}
        >
          Похожая картинка
        </Text>
      </View>
    </View>
  );
};

export default Item;
