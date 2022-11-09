import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import He_TextInput from '../components/he_TextInput';
import HeButton from '../components/he_Button';
import images from '../assets/images/images';

const styles = require('../assets/css/Style');
const ForgotPassword = () => {
  const [selected, setSelected] = useState([]);
  const [userPassword, setuserPassword] = useState('');
  const [userConfirmPassword, setuserConfirmPassword] = useState('');

  return (
    <ScrollView>
      <View style={styles.mainView}>
        <View style={styles.backArrowContainer}>
          <TouchableOpacity onPress={() => console.log('Back')}>
            <Image
              style={styles.backArrowImage}
              source={images.leftArrow1}></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.headText}>Create new password</Text>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>Password</Text>
          <He_TextInput
            placeholder="PASSWORD"
            value={userPassword}
            onChangeText={text => setuserPassword(text)}
            screenName={'SignUp'}
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
        </View>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>Confirm Password</Text>
          <He_TextInput
            placeholder="CONFIRM PASSWORD"
            value={userConfirmPassword}
            onChangeText={text => setuserConfirmPassword(text)}
            screenName={'SignUp'}
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
        </View>

        <HeButton
          name="Create account"
          buttonText={styles.buttonText}
          styleButton={styles.commanButton}
          onPress={() => console.log('Done')}
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
