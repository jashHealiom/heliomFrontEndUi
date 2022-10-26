import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import He_TextInput from '../components/he_TextInput';
import MainButton from '../components/he_Button';
import images from '../assets/images/images';
const styles = require('../assets/css/Style');
const OtpVerfication = () => {
  // const [otp1, setOtp1] = useState('');
  // const [otp2, setOtp2] = useState('');
  // const [otp3, setOtp3] = useState('');
  // const [otp4, setOtp4] = useState('');
  // const [otp5, setOtp5] = useState('');
  // const [otp6, setOtp6] = useState('');
  // const ref_input1 = useRef();
  // const ref_input2 = useRef();
  // const ref_input3 = useRef();
  // const ref_input4 = useRef();
  // const ref_input5 = useRef();
  // const ref_input6 = useRef();
  const [otpError, setOtpError] = useState(false);
  const [otp, setOtp] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: '',
  });
  const settingOtp = (val, key) => {
    var newVal = '';
    var o = val.slice(-1);
    if (o != '.' && o != ',' && o != ' ' && o != '-') {
      // console.log('valllll', o == '.', o == ',', o == ' ', o == '-');
      newVal = o;
    }
    if (key == '' || key == null) {
      // console.log('val', val, otp);
      if (otp.one == '') {
        setOtp(prevState => ({
          ...prevState,
          one: newVal,
        }));
      } else if (otp.two == '') {
        setOtp(prevState => ({
          ...prevState,
          two: newVal,
        }));
      } else if (otp.three == '') {
        setOtp(prevState => ({
          ...prevState,
          three: newVal,
        }));
      } else if (otp.four == '') {
        setOtp(prevState => ({
          ...prevState,
          four: newVal,
        }));
      } else if (otp.five == '') {
        setOtp(prevState => ({
          ...prevState,
          five: newVal,
        }));
      } else if (otp.six == '') {
        setOtp(prevState => ({
          ...prevState,
          six: newVal,
        }));
      }
    } else {
      if (key == 'backspace') {
        if (otp.six != '') {
          setOtp(prevState => ({
            ...prevState,
            six: '',
          }));
        } else if (otp.five != '') {
          setOtp(prevState => ({
            ...prevState,
            five: '',
          }));
        } else if (otp.four != '') {
          setOtp(prevState => ({
            ...prevState,
            four: '',
          }));
        } else if (otp.three != '') {
          setOtp(prevState => ({
            ...prevState,
            three: val,
          }));
        } else if (otp.two != '') {
          setOtp(prevState => ({
            ...prevState,
            two: val,
          }));
        } else if (otp.one != '') {
          setOtp(prevState => ({
            ...prevState,
            one: val,
          }));
        }
      }
    }
    setOtpError(false);
  };
  const verifyCheck = () => {
    var flag = 0;
    if (otp.one == '') {
      flag = 1;
    } else if (otp.two == '') {
      flag = 1;
    } else if (otp.three == '') {
      flag = 1;
    } else if (otp.four == '') {
      flag = 1;
    } else if (otp.five == '') {
      flag = 1;
    } else if (otp.six == '') {
      flag = 1;
    }

    if (flag == 1) {
      setOtpError(true);
    } else {
      // call the function here
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
            keyboardType={'numeric'}
            caretHidden={true}
            value={otp.one}
            onChangeText={x => {
              console.log('i want to see this', typeof x, x);
              settingOtp(x);
            }}
            screenName={'login'}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace') {
                settingOtp('', 'backspace');
              }
            }}
            style={[styles.verifyInputView, {}]}
            styles={{backGroundColor: '#ffffff'}}
          />

          <He_TextInput
            onChangeText={x => {
              settingOtp(x);
            }}
            //name='Otp'
            keyboardType={'numeric'}
            caretHidden={true}
            value={otp.two}
            screenName={'login'}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace') {
                settingOtp('', 'backspace');
              }
            }}
            style={[styles.verifyInputView, {}]}
          />

          <He_TextInput
            onChangeText={x => {
              settingOtp(x);
            }}
            //name='Otp'
            value={otp.three}
            keyboardType={'numeric'}
            caretHidden={true}
            screenName={'login'}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace') {
                settingOtp('', 'backspace');
              }
            }}
            style={[styles.verifyInputView, {}]}
          />

          <He_TextInput
            onChangeText={x => {
              settingOtp(x);
            }}
            //caretHidden={true}
            //name='Otp'
            value={otp.four}
            keyboardType={'numeric'}
            screenName={'login'}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace') {
                settingOtp('', 'backspace');
              }
            }}
            style={[styles.verifyInputView, {}]}
          />

          <He_TextInput
            onChangeText={x => {
              settingOtp(x);
            }}
            //name='Otp'
            value={otp.five}
            keyboardType={'numeric'}
            caretHidden={true}
            screenName={'login'}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace') {
                settingOtp('', 'backspace');
              }
            }}
            style={[styles.verifyInputView, {}]}
          />

          <He_TextInput
            onChangeText={x => {
              settingOtp(x);
            }}
            value={otp.six}
            keyboardType={'numeric'}
            caretHidden={true}
            screenName={'login'}
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace') {
                settingOtp('', 'backspace');
              }
            }}
            style={[styles.verifyInputView, {}]}
          />
        </View>
        {otpError ? (
          <Text style={[{top: -10}, styles.errorText]}>
            One or more fields are empty!
          </Text>
        ) : null}
        <View>
          <Text style={styles.verifyInputContainer}>
            Didn’t receive code?{' '}
            <Text style={styles.verifyRequestText} onPress={() => ''}>
              {' '}
              Request again.
            </Text>
          </Text>
          <MainButton
            name="Verify and continue"
            buttonText={styles.buttonText}
            styleButton={styles.commanButton}
            onPress={() => verifyCheck()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default OtpVerfication;
