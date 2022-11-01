import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

const InfoButton = props => {
  const {style, text, visible, onPress} = props;
  return (
    <View
      style={[
        {
          width: '100%',
          //   backgroundColor: '#ffffff',
          flexDirection: 'row',
          paddingVertical: 15,
          paddingHorizontal: 12,
          borderRadius: 10,
        },
        style,
      ]}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Image
          style={{height: 25, width: 25, marginRight: 10}}
          source={require('../assets/images/signup/checkcircle.png')}
        />
      </TouchableOpacity>
      {visible ? (
        <View
          style={{
            backgroundColor: '#424545',
            padding: 5,
            borderRadius: 3,
            paddingHorizontal: 10,
            height: 25,
            zIndex: 1,
          }}>
          <Text style={{color: '#ffffff', fontSize: 11, fontFamily: 'Rubik'}}>
            {text}
          </Text>
        </View>
      ) : null}

      {/* <Image source={require('../assets/images/signup/i_dot.png')} />
      <Image source={require('../assets/images/signup/i_circle.png')} /> */}
    </View>
  );
};

export {InfoButton};
