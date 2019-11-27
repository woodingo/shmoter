import * as React from 'react';
import { ScrollView, Image, View } from 'react-native';
import { Text } from 'native-base';

const ProductScreen = props => {
  return (
    <ScrollView>
      <Image
        source={{
          uri:
            'https://bec2df9eb90bb6604cfc-660d71a7a33bc04488a7427f5fddcedf.ssl.cf3.rackcdn.com/uploads/product_image/photo/5ca5c1fcdd232e1f638599e1/large_2019_04_03_Ella_Chynna_FeverFish15102.jpg',
        }}
        style={{ height: 400, width: null, flex: 1 }}
      />
      <View style={{ padding: 8 }}>
        <Text>Hello!</Text>
      </View>
    </ScrollView>
  );
};

ProductScreen.navigationOptions = {
  title: 'Product Card',
};

export default ProductScreen;
