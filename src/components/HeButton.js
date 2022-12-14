import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const HeButton = props => {
  return (
    <View style={{}}>
      <TouchableOpacity style={props.styleButton} onPress={props.onPress}>
        <Text style={props.buttonText}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeButton;
