import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  LogBox,
  Modal,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import He_TextInput from '../components/he_TextInput';
import MainButton from '../components/he_Button';
import images from '../assets/images/images';
import Dropdown from '../components/he_DropDown';
import {RadioButton} from '../components/he_RadioButton';
import Country_Code from '../constants/Country_Code.json';
const styles = require('../assets/css/Style');
const ComponentStyle = require('../assets/css/ComponentStyle');

const Login = () => {
  const {itemStyle} = ComponentStyle;
  const [selectedOption, setSelectedOption] = useState({
    key: 'Email',
    text: 'EMAIL',
  });
  const [selected, setSelected] = useState(undefined);
  const [userEmail, setuserEmail] = useState('');
  const [userPassword, setuserPassword] = useState('');
  const [userMoblieNo, setuserMoblieNo] = useState('');
  const [countryCode, setContryCode] = useState('+1');
  const [countryCodevisible, setCountryCodeVisible] = useState(false);
  const [inputError, setInputErrors] = useState({
    mobileError: false,
    emailError: false,
    passwordError: false,
    invalidEmailError: false,
    invalidMoblieError: false,
  });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const mobileRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const options = [
    {
      key: 'Email',
      text: 'EMAIL',
    },
    {
      key: 'Moblie',
      text: 'MOBLIE',
    },
  ];
  const onSelect = item => {
    if (selectedOption && selectedOption.key === item.key) {
      setSelectedOption(null);
    } else {
      setSelectedOption(item);
    }
  };
  const checkLogin = () => {
    console.log(emailRegex.test(userEmail), userEmail);
    if (
      !emailRegex.test(userEmail) ||
      userPassword.length == 0 ||
      !mobileRegex.test(userMoblieNo)
    ) {
      userEmail.length == 0
        ? setInputErrors(prevState => ({
            ...prevState,
            emailError: true,
          }))
        : null;
      userMoblieNo.length == 0
        ? setInputErrors(prevState => ({
            ...prevState,
            mobileError: true,
          }))
        : null;
      !emailRegex.test(userEmail)
        ? setInputErrors(prevState => ({
            ...prevState,
            invalidEmailError: true,
          }))
        : null;
      userPassword.length == 0
        ? setInputErrors(prevState => ({
            ...prevState,
            passwordError: true,
          }))
        : null;
      !mobileRegex.test(userMoblieNo)
        ? setInputErrors(prevState => ({
            ...prevState,
            invalidMoblieError: true,
          }))
        : null;
    } else {
      //   fucntion call
      navigation.navigate(console.log('Login'));
    }
  };
  const toggleCountryCodeDropdown = () => {
    if (countryCodevisible) {
      setCountryCodeVisible(false);
    } else {
      setCountryCodeVisible(true);
    }
  };
  return (
    <KeyboardAvoidingView enabled={true} style={styles.Container}>
      <View style={styles.mainLoginView}>
        <Text style={styles.headText}>Log In</Text>
        <RadioButton
          selectedOption={selectedOption}
          onSelect={item => onSelect(item)}
          options={options}
          type={options.text}
        />
        {selectedOption.key == 'Email' ? (
          <>
            <View style={[styles.emailInputContainer, {}]}>
              <Text style={styles.labelEmailTextLogin}>EMAIL</Text>
              <He_TextInput
                icon={true}
                placeholder="Email"
                value={userEmail}
                onChangeText={text => {
                  setuserEmail(text);
                  setInputErrors(prevState => ({
                    ...prevState,
                    emailError: false,
                    invalidEmailError: false,
                  }));
                }}
                textContentType="emailAddress"
                screenName={'login'}
                style={[styles.inputView, {}]}
                styles={styles.textInputStyle}
                imageSrc={images.faceId}
              />
              {inputError.emailError ? (
                <Text style={styles.errorText}>This field cannot be empty</Text>
              ) : null}
              {inputError.invalidEmailError && !inputError.emailError ? (
                <Text style={styles.errorText}>Invalid EmailId!</Text>
              ) : null}
            </View>
          </>
        ) : (
          <>
            <View style={styles.mobileMainContainer}>
              <Text style={styles.labelEmailTextLogin}>MOBILE</Text>
              <View style={styles.mobileInputContainer}>
                {/* <Dropdown
                  label="+1"
                  data={Country_Code.country_code}
                  onSelect={setSelected}
                  buttonStyle={styles.buttonStyleCountryCode}
                  overlay={styles.dropdownOverlayCountryCode}
                  dropdown={styles.dropdownSingleSelectCountryCode}
                /> */}

                <Dropdown
                  // ref={el => {
                  //   console.log('agdhkashdjasj', el.getBoundingClientRect());
                  // }}
                  // visible={countryCodevisible}
                  label={countryCode}
                  onPress={() => toggleCountryCodeDropdown()}
                  // data={Country_Code.country_code}
                  // onSelect={setSelected}
                  buttonStyle={styles.buttonStyleCountryCode}
                  // overlay={}
                  // dropdown={}
                />
                {/* dropdown */}
                <Modal
                  visible={countryCodevisible}
                  transparent
                  animationType="none"
                  style={{overflow: 'hidden'}}>
                  <View style={styles.dropdownOverlayCountryCode}>
                    <FlatList
                      style={[
                        styles.dropdownSingleSelectCountryCode,
                        {
                          zIndex: 1,
                          top: 202,
                        },
                      ]}
                      data={Country_Code.country_code}
                      scrollEnabled={true}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          style={itemStyle}
                          onPress={() => {
                            setContryCode(item.label);
                            toggleCountryCodeDropdown();
                          }}>
                          <Text>{item.label}</Text>
                        </TouchableOpacity>
                      )}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  </View>
                </Modal>
                {/* dropdown */}
                <He_TextInput
                  icon={true}
                  placeholder="Moblie No"
                  value={userMoblieNo}
                  onChangeText={text => {
                    setuserMoblieNo(text);
                    setInputErrors(prevState => ({
                      ...prevState,
                      mobileError: false,
                      invalidMobileError: false,
                    }));
                  }}
                  textContentType="telephoneNumber"
                  screenName={'login'}
                  style={styles.inputView1}
                  styles={styles.textInputStyle1}
                />
              </View>
              {inputError.mobileError ? (
                <Text style={styles.errorText}>This field cannot be empty</Text>
              ) : null}
            </View>
          </>
        )}
        <View style={styles.emailInputContainer}>
          <Text style={styles.labelEmailTextLogin}>PASSWORD</Text>
          <He_TextInput
            icon={true}
            placeholder="Password"
            value={userPassword}
            onChangeText={text => {
              setuserPassword(text);
              setInputErrors(prevState => ({
                ...prevState,
                passwordError: false,
              }));
            }}
            textContentType="password"
            screenName={'login'}
            style={styles.inputView}
            styles={styles.textInputStyle}
            imageSrc={images.eye_opened}
          />
          {inputError.passwordError ? (
            <Text style={styles.errorText}>This field cannot be empty</Text>
          ) : null}
        </View>
        <MainButton
          name="Login"
          buttonText={styles.buttonText}
          styleButton={styles.commanButton}
          onPress={() => checkLogin()}
        />
      </View>
      <View style={styles.moreOptionContainer}>
        <Text style={styles.moreOptionText}>No account yet?</Text>
        <Text onPress={() => ''} style={styles.OptionText}>
          {' '}
          Sign up now{' '}
        </Text>
        <Image style={styles.loginSignInArrowImg} source={images.arrowRight} />
      </View>
      <View style={styles.moreOptionContainer}>
        <Text style={styles.moreOptionText}>Forgot Password?</Text>
        <Text onPress={() => ''} style={styles.OptionText}>
          {' '}
          Click here{' '}
        </Text>
        <Image style={styles.loginSignInArrowImg} source={images.arrowRight} />
      </View>
      <View style={styles.loginImageContainer}>
        <Image style={styles.loginImage} source={images.illustrationLeft} />
      </View>
    </KeyboardAvoidingView>
  );
};

export {Login};
