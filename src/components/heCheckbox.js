import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

const HeCheckbox = props => {
  const {style, checked, onPress} = props;
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={style}>
      {!checked ? (
        <Image source={{uri: 'insert a unchecked image'}} />
      ) : (
        <Image source={{uri: 'insert a checked image'}} />
      )}
    </TouchableOpacity>
  );
};

export {HeCheckbox};
