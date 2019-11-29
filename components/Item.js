import React from 'react';
import { Image, View } from 'react-native';
import { Card, CardItem, Text, Body, TouchableOpacity } from 'native-base';

const Item = props => {
  return (
    <View style={{ flex: 1, padding: 4 }}>
      <Card>
        <CardItem cardBody onPress={props.onPress} button>
          <Image
            source={{
              uri: props.item.imgUrl,
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Body>
            <Text>11 903 RUB</Text>
          </Body>
        </CardItem>
      </Card>
    </View>
  );
};

export default Item;
