import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import Card from './he_Card';
import {StarRating} from './he_StarRating';
// star rating would be better on screen component
const SpecialistCard = props => {
  const {
    style,
    name,
    waitTime,
    docType,
    location,
    languages,
    yearsOfExperience,
    ratedIndex,
    ratePerHour,
    rating,
    source,
    onPress,
  } = props;
  return (
    <TouchableOpacity
      style={[style, {marginBottom: 10}]}
      activeOpacity={0.99}
      onPress={onPress}>
      <Card
        style={[
          {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
          },
        ]}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Image
            style={{height: 65, width: 65, borderRadius: 50}}
            source={source}
          />
          <View style={{marginLeft: 10, width: '78%'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontFamily: 'Rubik',
                  fontSize: 20,
                  color: 'black',
                  marginBottom: 5,
                }}>
                {name}
              </Text>
              <Text
                style={{
                  color: '#00A896',
                  fontSize: 18,
                  fontFamily: 'Rubik',
                  fontWeight: '300',
                  marginTop: 2,
                }}>
                {waitTime}
              </Text>
            </View>
            <Text style={{fontFamily: 'Rubik', color: 'black', fontSize: 16}}>
              {docType}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 8,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Rubik',
              color: 'black',
            }}>
            {location}
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#00A896',
            }}>
            |
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Rubik',
              color: 'black',
            }}>
            {languages}
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#00A896',
            }}>
            |
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Rubik',
              color: 'black',
            }}>
            {yearsOfExperience}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
            paddingHorizontal: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <StarRating
              style={{marginRight: 3, marginTop: 4}}
              // onPress={() => setRating(index)}
              ratedIndex={ratedIndex} //add the data value from api or update onPress in state
            />
            <Text
              style={{
                fontSize: 18,
                marginLeft: 30,
                marginTop: 4,
                fontFamily: 'Rubik',
                color: 'black',
              }}>
              {rating}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 20,
                marginTop: 4,
                fontFamily: 'Rubik',
                color: 'black',
              }}>
              {ratePerHour}
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export {SpecialistCard};
