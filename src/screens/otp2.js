import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import He_TextInput from '../components/he_TextInput';
import HeButton from '../components/he_Button';
import images from '../assets/images/images';
import He_Loader from '../components/he_Loader';
const styles = require('../assets/css/Style');
const OtpVerfication = () => {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otp5, setOtp5] = useState('');
  const [otp6, setOtp6] = useState('');
  const ref_input1 = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input6 = useRef();

  const settingOtp = (x, index) => {
    if (index == 0) {
      setOtp1(x.slice(-1));
    }
    if (index == 1) {
      setOtp2(x.slice(-1));
    }
    if (index == 2) {
      setOtp3(x.slice(-1));
    }
    if (index == 3) {
      setOtp4(x.slice(-1));
    }
    if (index == 4) {
      setOtp5(x.slice(-1));
    }
    if (index == 5) {
      setOtp6(x.slice(-1));
    }
    if ((index = 0)) {
      secondTextInput.focus();
    }
  };
  return (
    <ScrollView>
      {/* <He_Loader color="#24DAC6" /> */}
      <View style={styles.mainView}>
        <View style={styles.VerifyBackArrowContainer}>
          <TouchableOpacity onPress={() => console.log('Back')}>
            <Image
              style={styles.backArrowImage}
              source={images.leftArrow1}></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.verifyHeadText}>Verify Phone</Text>
        <Text style={styles.VryPhoneText}>A 6 digit code was sent to</Text>
        <View style={styles.verifyOtpConstainer}>
          <He_TextInput
            // name='Otp'
            refs={ref_input1}
            keyboardType={'numeric'}
            //caretHidden={true}
            value={otp1}
            onChangeText={x => {
              settingOtp(x, 0);
            }}
            screenName={'login'}
            style={[styles.verifyInputView, {}]}
            styles={{backGroundColor: '#ffffff'}}
          />

          <He_TextInput
            onChangeText={x => {
              settingOtp(x, 1);
            }}
            //name='Otp'
            keyboardType={'numeric'}
            //caretHidden={true}
            value={otp2}
            screenName={'login'}
            style={[styles.verifyInputView, {}]}
            // styles={styles.textInputStyle}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace') {
                ref_input1.focus();
              }
            }}
            //refs={ref_input2}
          />

          <He_TextInput
            onChangeText={x => {
              settingOtp(x, 2);
            }}
            //name='Otp'
            value={otp3}
            keyboardType={'numeric'}
            //caretHidden={true}
            screenName={'login'}
            style={[styles.verifyInputView, {}]}
            // styles={styles.textInputStyle}
            //refs={ref_input3}
          />

          <He_TextInput
            onChangeText={x => {
              settingOtp(x, 3);
            }}
            //caretHidden={true}
            //name='Otp'
            value={otp4}
            keyboardType={'numeric'}
            screenName={'login'}
            style={[styles.verifyInputView, {}]}
            // styles={styles.textInputStyle}
            //refs={ref_input4}
          />

          <He_TextInput
            onChangeText={x => {
              settingOtp(x, 4);
            }}
            //name='Otp'
            value={otp5}
            keyboardType={'numeric'}
            //caretHidden={true}
            screenName={'login'}
            style={[styles.verifyInputView, {}]}
            // styles={styles.textInputStyle}
            //refs={ref_input5}
          />

          <He_TextInput
            //refs={ref_input6}
            onChangeText={x => {
              settingOtp(x, 5);
            }}
            // name='Otp'
            value={otp6}
            keyboardType={'numeric'}
            //caretHidden={true}
            screenName={'login'}
            style={[styles.verifyInputView, {}]}
            // styles={styles.textInputStyle}
          />
        </View>
        <View>
          <Text style={styles.verifyInputContainer}>
            Didn???t receive code?{' '}
            <Text style={styles.verifyRequestText} onPress={() => ''}>
              {' '}
              Request again.
            </Text>
          </Text>
          <HeButton
            name="Verify and continue"
            buttonText={styles.buttonText}
            styleButton={styles.commanButton}
            onPress={() => console.log('Done')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default OtpVerfication;
