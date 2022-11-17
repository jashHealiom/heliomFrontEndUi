import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
// star rating would be better on screen component
const StarRating = props => {
  const {style, ratedIndex, onPress, starStyle} = props;
  return (
    <View
      style={[{flexDirection: 'row', justifyContent: 'space-between'}, style]}>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <View>
          {ratedIndex >= index + 1 ? (
            <TouchableOpacity
              onPress={onPress}
              activeOpacity={0.7}
              style={{marginRight: 3}}>
              <Image
                style={[{height: 21, width: 21}, starStyle]}
                source={require('../assets/images/signup/vectorfilled_star.png')}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={onPress}
              activeOpacity={0.7}
              style={{marginRight: 3}}>
              <Image
                style={[{height: 21, width: 21}, starStyle]}
                source={require('../assets/images/signup/vectorunfilled_star.png')}
              />
            </TouchableOpacity>
          )}
        </View>
      ))}

      {/* {ratedIndex > 2 ? (
          <TouchableOpacity onPress={onPress1} activeOpacity={0.7}>
            <Image
              source={require('../assets/images/signup/vectorfilled_star.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPress1} activeOpacity={0.7}>
            <Image
              source={require('../assets/images/signup/vectorunfilled_star.png')}
            />
          </TouchableOpacity>
        )}
        {ratedIndex > 3 ? (
          <TouchableOpacity onPress={onPress1} activeOpacity={0.7}>
            <Image
              source={require('../assets/images/signup/vectorfilled_star.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPress1} activeOpacity={0.7}>
            <Image
              source={require('../assets/images/signup/vectorunfilled_star.png')}
            />
          </TouchableOpacity>
        )}
        {ratedIndex > 4 ? (
          <TouchableOpacity onPress={onPress1} activeOpacity={0.7}>
            <Image
              source={require('../assets/images/signup/vectorfilled_star.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPress1} activeOpacity={0.7}>
            <Image
              source={require('../assets/images/signup/vectorunfilled_star.png')}
            />
          </TouchableOpacity>
        )}
        {ratedIndex > 5 ? (
          <TouchableOpacity onPress={onPress1} activeOpacity={0.7}>
            <Image
              source={require('../assets/images/signup/vectorfilled_star.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPress1} activeOpacity={0.7}>
            <Image
              source={require('../assets/images/signup/vectorunfilled_star.png')}
            />
          </TouchableOpacity>
        )} */}
    </View>
  );
};

export {StarRating};
