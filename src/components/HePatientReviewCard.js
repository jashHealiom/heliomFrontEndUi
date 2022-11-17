import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import Card from './he_Card';
import {StarRating} from './he_StarRating';
// star rating would be better on screen component
const PatientReviewCard = props => {
  const {
    style,
    patientName,
    date,
    ratingConfig,
    ratingIndex,
    patientComments,
    tags,
  } = props;

  const [showMore, setShowMore] = useState(false);
  const [renderFullText, setRenderFullText] = useState(false);
  let items = ['', '', '', '', '']; // add with star component
  // const [rating, setRating] = useState(0); // rating component
  const onTextLayout = lines => {
    setShowMore(lines.nativeEvent.lines.length > 2);
  };
  return (
    <Card
      style={[
        {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
          marginTop: 10,
        },
        style,
      ]}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Image
          source={require('../assets/images/signup/ash_photo.png')}
          style={{height: 40, width: 40, borderRadius: 50}}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '91%',
              marginLeft: 12,
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '60%',
              }}>
              <Text
                style={{
                  fontFamily: 'Rubik',
                  fontSize: 16,
                  fontWeight: '400',
                  color: 'black',
                  marginBottom: 7,
                }}>
                {patientName}
              </Text>
              <Text
                style={{
                  fontFamily: 'Rubik',
                  fontSize: 13,
                  fontWeight: '400',
                  color: 'black',
                }}>
                {date}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', marginBottom: 10}}>
                <StarRating
                  ratedIndex={ratingIndex}
                  style={{paddingLeft: 4}}
                  starStyle={{height: 18, width: 18}}
                />
              </View>
              <Text style={{paddingLeft: 20}}>{ratingConfig}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginBottom: 10}} />
      {tags ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '100%',
            flexWrap: 'wrap',
          }}>
          {/* put this in a flatlist or a map function to render all the comments/tags by the patients */}
          {tags.map((item, index) => (
            <Text
              style={{
                backgroundColor: '#FAFAFA',
                padding: 5,
                borderRadius: 10,
                color: '#00A896',
                fontSize: 13,
                marginRight: 8,
                marginBottom: 6,
                height: 28,
                fontFamily: 'Rubik',
              }}>
              {item.name}
            </Text>
          ))}
        </View>
      ) : null}
      {patientComments && patientComments.length > 0 ? (
        <View>
          {showMore && !renderFullText ? (
            <View>
              <Text
                style={{fontSize: 15, color: 'black', fontFamily: 'Rubik'}}
                numberOfLines={2}
                onTextLayout={lines => onTextLayout(lines)}>
                {patientComments}
              </Text>
              {showMore ? (
                <TouchableOpacity
                  style={{paddingTop: 5, width: '30%'}}
                  activeOpacity={0.7}
                  onPress={() => {
                    setRenderFullText(!renderFullText);
                  }}>
                  <Text>Show More</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          ) : (
            <View>
              <Text
                style={{fontSize: 15, color: 'black', fontFamily: 'Rubik'}}
                onTextLayout={lines => onTextLayout(lines)}>
                {patientComments}
              </Text>
              {showMore ? (
                <TouchableOpacity
                  style={{paddingTop: 5, width: '30%'}}
                  activeOpacity={0.7}
                  onPress={() => {
                    setRenderFullText(!renderFullText);
                  }}>
                  <Text>Show Less</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          )}
        </View>
      ) : null}
    </Card>
  );
};

export {PatientReviewCard};
