import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import images from '../assets/images/images';
import {VitalBox} from '../components/he_VitalBox';
import Card from '../components/he_Card';
import {StarRating} from '../components/he_StarRating';
import {SpecialistCard} from '../components/HeSpecialistCard';
import HeButton from '../components/HeButton';
import {PatientReviewCard} from '../components/HePatientReviewCard';

const styles = require('../assets/css/Style');

const SpecialistDetails = ({navigation}) => {
  // const [mute, setMute] = useState(false);
  // const [videoOn, setVideoOn] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [renderFullText, setRenderFullText] = useState(false);
  let items = ['', '', '', '', '']; // add with star component
  // const [rating, setRating] = useState(0); // rating component
  const onTextLayout = lines => {
    setShowMore(lines.nativeEvent.lines.length > 2);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5', paddingHorizontal: 20}}>
      <View
        style={{
          paddingTop: 20,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={{paddingTop: 3, color: 'black'}}
            source={require('../assets/images/signup/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 22,
            paddingLeft: 8,
            marginBottom: 3,
            fontWeight: '400',
            fontFamily: 'Rubrik',
            color: 'black',
          }}>
          Specialist Details
        </Text>
      </View>
      <View
        style={{
          marginBottom: 10,
          height: 220,
          width: '100%',
          backgroundColor: 'black',
          marginTop: 15,
          borderRadius: 8,
        }}></View>
      <View style={{marginBottom: 20}}>
        <View style={{width: '100%', marginTop: 5}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontFamily: 'Rubik',
                fontSize: 20,
                color: 'black',
                marginBottom: 5,
              }}>
              {'Dr Ash Damle'}
            </Text>
            <Text
              style={{
                color: '#00A896',
                fontSize: 18,
                fontFamily: 'Rubik',
                fontWeight: '300',
                marginTop: 2,
              }}>
              {'Available'}
            </Text>
          </View>
          <Text style={{fontFamily: 'Rubik', color: 'black', fontSize: 16}}>
            {'Doctor'}
          </Text>
        </View>
        {/* </View> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Rubik',
              color: 'black',
            }}>
            {'Mumbai'}
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
            {'English/Hindi'}
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
            {'20 years'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <StarRating
              style={{marginRight: 3, marginTop: 4}}
              // onPress={() => setRating(index)}
              ratedIndex={3} //add the data value from api or update onPress in state
            />
            <Text
              style={{
                fontSize: 18,
                marginLeft: 30,
                marginTop: 4,
                fontFamily: 'Rubik',
                color: 'black',
              }}>
              {'4/5 (2000)'}
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
              {'$20/hr'}
            </Text>
          </View>
        </View>
      </View>
      <Text>
        Here will be a tab bar navigation and there are 2 screens 1.Description,
        2. Reviews
      </Text>
      <PatientReviewCard
        patientName={'Jash Manish Paleja'}
        ratingIndex={3}
        date={'12/10/2022'}
        ratingConfig={'4.25 / 5.0(375)'}
        patientComments={
          'A review details written by otherasdfghjk patient, about this doctor.A review details written by as s s s s s s s s s s  other patient, about this doctor.A review details written by other patient, about this doctor.A review details written by other patient, about this doctor.A review details written by other patient, about this doctor.'
        }
        tags={[{name: 'jash'}, {name: 'bruh'}, {name: 'eStud'}]}
      />
      {/* Description */}
      <Card style={{marginTop: 10, borderRadius: 5}}>
        <Text style={{fontFamily: 'Rubik', fontSize: 16}}>
          Pedigree: St. Luis University (Heart Failure Fellowship), U Washington
          (Cards Fellow), UCSF (Med School) Practice: 6 yrs Languages: English,
          Mandarin Statement: “Cardiology is my passion. My brother was born
          with a congenital heart anomaly and I have wanted to help people with
          cardiac problems since then.”
        </Text>
      </Card>
      <HeButton
        name="Talk Now"
        buttonText={styles.buttonText}
        styleButton={styles.commanButton}
        onPress={() => console.log('Navigate to video preview screen')}
      />
    </View>
  );
};

export default SpecialistDetails;
