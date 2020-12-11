import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const Icons = ({size, iconName, bg}) => {
  return (
    <View
      style={{
        width: 80,
        padding: 5,
        height: '100%',
        backgroundColor: bg,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      }}>
      <Image
        source={iconName}
        style={{width: size, height: size, borderRadius: 50}}
      />
    </View>
  );
};

export {Icons};
