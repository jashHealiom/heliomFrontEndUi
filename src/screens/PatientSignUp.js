import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import He_TextInput from '../components/he_TextInput';
import MainButton from '../components/he_Button';
import Dropdown from '../components/he_DropDown';
import MultiSelect from '../components/he_multiSelect';
import DatePickerApp from '../components/he_DatePicker';
import Icon from 'react-native-vector-icons/Ionicons';
//Import constants
import ArrayData from '../constants/ArrayData.json';
import language from '../constants/language.json';
import Country_Code from '../constants/Country_Code.json';
import images from '../assets/images/images';
const styles = require('../assets/css/Style');
const componentStyles = require('../assets/css/ComponentStyle');
const SignUp = () => {
  //states
  const {buttonText} = styles;
  const {itemStyle} = componentStyles;
  const [selected, setSelected] = useState([]);
  const [userEmail, setuserEmail] = useState('');
  const [userFirstName, setuserFirstName] = useState('');
  const [userMiddleName, setuserMiddleName] = useState('');
  const [userLastName, setuserLastName] = useState('');
  const [userNickName, setuserNickName] = useState('');
  const [userMoblieNo, setuserMoblieNo] = useState('');
  const [countryCode, setContryCode] = useState('+1');
  const [countryCodevisible, setCountryCodeVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [inputError, setInputErrors] = useState({
    mobileError: false,
    emailError: false,
    firstNameError: false,
    middleNameError: false,
    lastNameError: false,
    nickNameError: false,
    dateError: false,
    countryCodeError: false,
    invalidEmailError: false,
    invalidMoblieError: false,
  });
  // const openDropdown = () => {
  //   // console.log('TGIS IS SOMETHING', DropdownButton);
  //   // DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
  //   //   setDropdownTop(py + h);
  //   // });
  //   toggleCountryCodeDropdown();
  // };
  const toggleCountryCodeDropdown = () => {
    console.log('countryCode', countryCodevisible);
    if (countryCodevisible) {
      setCountryCodeVisible(false);
    } else {
      setCountryCodeVisible(true);
    }
  };
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const mobileRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const checkSignUp = () => {
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
      userFirstName.length == 0
        ? setInputErrors(prevState => ({
            ...prevState,
            firstNameError: true,
          }))
        : null;
      userMiddleName.length == 0
        ? setInputErrors(prevState => ({
            ...prevState,
            middleNameError: true,
          }))
        : null;
      userLastName.length == 0
        ? setInputErrors(prevState => ({
            ...prevState,
            lastNameError: true,
          }))
        : null;
      userNickName.length == 0
        ? setInputErrors(prevState => ({
            ...prevState,
            nickNameError: true,
          }))
        : null;
      countryCode.length == 0
        ? setInputErrors(prevState => ({
            ...prevState,
            countryCodeError: true,
          }))
        : null;
      !emailRegex.test(userEmail)
        ? setInputErrors(prevState => ({
            ...prevState,
            invalidEmailError: true,
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
  return (
    <ScrollView>
      <View style={styles.mainView}>
        <View style={styles.backArrowContainer}>
          <TouchableOpacity onPress={() => console.log('Back')}>
            <Image
              style={styles.backArrowImage}
              source={images.leftArrow1}></Image>
          </TouchableOpacity>
          <Text style={styles.signUpBackArrowText}>
            Already a member?
            <Text style={styles.signUpLoginText}> Login</Text>
          </Text>
        </View>
        <Text style={styles.signUpHeadText}>SignUp</Text>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>LANGUAGE</Text>
          <MultiSelect
            label="Please Select"
            data={language.language}
            onSelect={item => setSelected(item)}
            buttonStyle={styles.buttonDropdownStyle}
            overlay={styles.dropDownoverlay}
          />
        </View>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>EMAIL</Text>
          <He_TextInput
            icon={emailRegex.test(userEmail) ? true : false}
            imageSrc={images.check}
            placeholder="Email"
            value={userEmail}
            keyboardType={'email-address'}
            onChangeText={text => {
              setuserEmail(text);
              setInputErrors(prevState => ({
                ...prevState,
                emailError: false,
                invalidEmailError: false,
              }));
            }}
            textContentType="emailAddress"
            screenName={'signUp'}
            style={[styles.inputView, {}]}
            styles={styles.textInputStyle}
          />
          {inputError.emailError ? (
            <Text style={styles.errorText}>This field cannot be empty</Text>
          ) : null}
          {inputError.invalidEmailError && !inputError.emailError ? (
            <Text style={styles.errorText}>Invalid EmailId!</Text>
          ) : null}
        </View>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>LEGAL FIRST NAME</Text>
          <He_TextInput
            icon={userFirstName.length > 0 ? true : false}
            imageSrc={images.check}
            placeholder="LEGAL FIRST NAME"
            value={userFirstName}
            onChangeText={text => {
              setuserFirstName(text);
              setInputErrors(prevState => ({
                ...prevState,
                firstNameError: false,
              }));
            }}
            screenName={'signUp'}
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
          {inputError.firstNameError ? (
            <Text style={styles.errorText}>This field cannot be empty</Text>
          ) : null}
        </View>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>MIDDLE NAME</Text>
          <He_TextInput
            icon={userMiddleName.length > 0 ? true : false}
            imageSrc={images.check}
            placeholder="MIDDLE NAME"
            screenName={'signUp'}
            value={userMiddleName}
            onChangeText={text => {
              setuserMiddleName(text);
              setInputErrors(prevState => ({
                ...prevState,
                middleNameError: false,
              }));
            }}
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
          {inputError.middleNameError ? (
            <Text style={styles.errorText}>This field cannot be empty</Text>
          ) : null}
        </View>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>LAST NAME</Text>
          <He_TextInput
            icon={userLastName.length > 0 ? true : false}
            imageSrc={images.check}
            placeholder="LAST NAME"
            screenName={'signUp'}
            value={userLastName}
            onChangeText={text => {
              setuserLastName(text);
              setInputErrors(prevState => ({
                ...prevState,
                lastNameError: false,
              }));
            }}
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
          {inputError.lastNameError ? (
            <Text style={styles.errorText}>This field cannot be empty</Text>
          ) : null}
        </View>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>NICK NAME</Text>
          <He_TextInput
            icon={userNickName.length > 0 ? true : false}
            imageSrc={images.check}
            placeholder="NICK NAME"
            screenName={'signUp'}
            value={userNickName}
            onChangeText={text => {
              setuserNickName(text);
              setInputErrors(prevState => ({
                ...prevState,
                nickNameError: false,
              }));
            }}
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
          {inputError.nickNameError ? (
            <Text style={styles.errorText}>This field cannot be empty</Text>
          ) : null}
        </View>
        {/* <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>GENDER</Text>
          <Dropdown
            label="Please Select"
            data={ArrayData.gender}
            buttonStyle={styles.buttonDropdownStyle}
            overlay={styles.dropDownoverlay}
            dropdown={styles.dropdownSingleSelect}
          />
        </View> */}
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>DATE OF BIRTH</Text>
          <DatePickerApp />
        </View>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>MOBLIE</Text>
          <View
            style={styles.mobileInputContainer}
            // onLayout={event => {
            //   const layout = event.nativeEvent.layout;
            //   setDropdownTop(layout.y + layout.height);
            //   console.log(
            //     'height:',
            //     layout.height,
            //     'width',
            //     layout.width,
            //     'x',
            //     layout.x,
            //     'y',
            //     layout.y,
            //     'event',
            //     layout,
            //     // .natiiveEvent.target.childNodes[0].offsetTop,
            //   );
            // }}
          >
            <Dropdown
              // ref={el => {
              //   console.log('agdhkashdjasj', el.getBoundingClientRect());
              // }}
              visible={countryCodevisible}
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
                      top: 628,
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
              icon={mobileRegex.test(userMoblieNo) ? true : false}
              imageSrc={images.check}
              placeholder="Moblie No"
              screenName={'signUp'}
              value={userMoblieNo}
              keyboardType={'numeric'}
              onChangeText={text => {
                setuserMoblieNo(text);
                setInputErrors(prevState => ({
                  ...prevState,
                  mobileError: false,
                  invalidMobileError: false,
                }));
              }}
              style={styles.inputView1}
              styles={styles.textInputStyle1}
            />
          </View>
          {inputError.mobileError ? (
            <Text style={styles.errorText}>This field cannot be empty</Text>
          ) : null}
        </View>
        <MainButton
          name="Signup"
          buttonText={styles.buttonText}
          styleButton={styles.commanButton}
          onPress={() => checkSignUp()}
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;
