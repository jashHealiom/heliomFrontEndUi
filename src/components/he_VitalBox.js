import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

const VitalBox = props => {
  const {style, title, iconSource, metric, value} = props;
  return (
    <View
      style={[
        {
          marginTop: 10,
          width: '30%',
          backgroundColor: '#FAFAFA',
          paddingVertical: 10,
          paddingHorizontal: 8,
          borderRadius: 4,
          opacity: 0.8,
        },
        style,
      ]}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '400',
              fontFamily: 'Rubrik',
            }}>
            {title}
          </Text>
        </View>
        <View>
          <Image
            source={iconSource}
            style={{
              width: 20,
              height: 20,
              //   position: 'absolute',
              //   left: -18,
              marginTop: -2,
            }}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '400',
              fontFamily: 'Rubrik',
            }}>
            {value}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 11,
              fontWeight: '400',
              fontFamily: 'Rubrik',
              marginTop: 12,
            }}>
            {metric}
          </Text>
        </View>
      </View>
    </View>
  );
};

export {VitalBox};
