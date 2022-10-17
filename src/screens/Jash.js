import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Card from '../components/he_Card';
import MainButton from '../components/he_Button';
import CallScreenTimer from '../components/he_CallScreenTimer';
import StarRating from '../components/he_StarRating';
const styles = require('../assets/css/Style');
import {Switch} from 'react-native'; // copy paste where ever using a switch

const Jash = () => {
  // copy paste where ever using a switch
  const [onOff, setOnOff] = useState(false);
  const toggleSwitch = value => {
    setOnOff(value);
  };
  // copy paste where ever using a switch

  return (
    <View style={{marginHorizontal: 20, marginTop: 10}}>
      <Card>
        <Text>Hi this is Jash.</Text>
        <MainButton
          name="Login"
          buttonText={styles.buttonText}
          styleButton={styles.commanButton}
          onPress={() => navigation.navigate(console.log('Login'))}
        />
        <MainButton
          name="Login"
          buttonText={styles.buttonText}
          styleButton={styles.commanButton}
          onPress={() => navigation.navigate(console.log('Login'))}
        />
        <MainButton
          name="Login"
          buttonText={styles.buttonText}
          styleButton={styles.commanButton}
          onPress={() => navigation.navigate(console.log('Login'))}
        />
        <MainButton
          name="Login"
          buttonText={styles.buttonText}
          styleButton={styles.commanButton}
          onPress={() => navigation.navigate(console.log('Login'))}
        />
        <MainButton
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
        <StarRating />
        {/* // copy paste where ever using a switch */}
      </Card>
    </View>
  );
};

export default Jash;
