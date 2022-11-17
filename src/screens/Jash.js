import {View, Text, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import Card from '../components/he_Card';
import HeButton from '../components/HeButton';
import CallScreenTimer from '../components/he_CallScreenTimer';
import {StarRating} from '../components/he_StarRating';
import {HeCheckbox} from '../components/HeCheckbox';
import PatientSignUpInfo from './ProviderSignUp';
const styles = require('../assets/css/Style');
import {VitalBox} from '../components/he_VitalBox';
import {Switch} from 'react-native'; // copy paste where ever using a switch
import {InfoButton} from '../components/he_InfoButton';

const Jash = () => {
  // infoButton
  const [informationIconTextVisible, setInformationIconTextVisible] =
    useState(false);
  // infoButton end

  // copy paste where ever using a switch
  const [onOff, setOnOff] = useState(false);
  const [rating, setRating] = useState(0); // rating component
  const toggleSwitch = value => {
    setOnOff(value);
  };
  // copy paste where ever using a switch
  let items = ['', '', '', '', '']; // add with star component
  // for checkbox
  const [checked, setChecked] = useState(false);
  const toggleCheckBox = () => {
    checked ? setChecked(false) : setChecked(true);
  };
  //end checkbox

  return (
    <ScrollView style={{marginHorizontal: 20, marginTop: 10}}>
      <Card>
        <Text>Hi this is Jash.</Text>
        <HeButton
          name="Login"
          buttonText={styles.buttonText}
          styleButton={styles.commanButton}
          onPress={() => navigation.navigate(console.log('Login'))}
        />
        <HeButton
          name="Login"
          buttonText={styles.buttonText}
          styleButton={styles.commanButton}
          onPress={() => navigation.navigate(console.log('Login'))}
        />
        <HeButton
          name="Login"
          buttonText={styles.buttonText}
          styleButton={styles.commanButton}
          onPress={() => navigation.navigate(console.log('Login'))}
        />
        <HeButton
          name="Login"
          buttonText={styles.buttonText}
          styleButton={styles.commanButton}
          onPress={() => navigation.navigate(console.log('Login'))}
        />
        <HeButton
          name="Login"
          buttonText={styles.buttonText}
          styleButton={styles.commanButton}
          onPress={() => navigation.navigate(console.log('Login'))}
        />

        {/* // copy paste where ever using a switch */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Switch
            //   style={{ marginLeft: 16, marginRight: 2 }}
            trackColor={{false: '#767577', true: '#0086C3'}}
            thumbColor={onOff ? '#0086C3' : '#0086C3'}
            value={onOff}
            onValueChange={value => toggleSwitch(value)}
          />
          {onOff ? <Text>ON</Text> : <Text>OFF</Text>}
        </View>
        <CallScreenTimer />

        {/* star rating */}
        <View style={[{width: '100%', marginTop: 12}]}>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-between',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <StarRating
              onPress={() => setRating(index)}
              ratedIndex={rating} //add the data value from api or update onPress in state
            />
          </View>
        </View>
        {/* star rating end*/}

        <HeCheckbox onPress={() => toggleCheckBox()} checked={checked} />
        {/* // copy paste where ever using a switch */}
      </Card>
      <VitalBox
        title={'HEART RATE'}
        iconSource={require('../assets/images/signup/ic_heart_beat.png')}
        metric={'bmp'}
        value={'92'}
      />
      <VitalBox
        title={'RESPIRATION'}
        iconSource={require('../assets/images/signup/ic_activity.png')}
        metric={'rpm'}
        value={'98'}
      />
      <VitalBox
        title={'STRESS'}
        iconSource={require('../assets/images/signup/ic_smiley_shaded.png')}
        // metric={'bmp'}
        value={'Low'}
      />
      <View
        style={{
          marginBottom: 10,
        }}
      />
      <InfoButton
        onPress={() =>
          setInformationIconTextVisible(!informationIconTextVisible)
        }
        visible={informationIconTextVisible}
        text={'Obstetrics and gynaecology'}
      />

      {/* <PatientSignUpInfo /> */}
    </ScrollView>
  );
};

export default Jash;
