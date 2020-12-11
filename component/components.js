import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const Icons = ({size, name}) => {
  return (
    <View style={{position: 'absolute'}}>
      <Image
        source={require('../assets/icon/cook.png')}
        style={{width: size, height: size}}
      />
    </View>
  );
};

export {Icons};
