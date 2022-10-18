import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import He_TextInput from '../components/he_TextInput';
import MainButton from '../components/he_Button';
import Dropdown from '../components/he_DropDown';
import MultiSelect from '../components/he_multiSelect';
import He_Loader from '../components/he_Loader';
import ArrayData from '../constants/ArrayData.json';
import language from '../constants/language.json';
import Country_Code from '../constants/Country_Code.json';
import images from '../assets/images/images';
const componentStyles = require('../assets/css/ComponentStyle');
const styles = require('../assets/css/Style');

const ProviderSignUp = () => {
  const {itemStyle} = componentStyles;
  const [userEmail, setuserEmail] = useState('');
  const [userFirstName, setuserFirstName] = useState('');
  const [userMiddleName, setuserMiddleName] = useState('');
  const [userLastName, setuserLastName] = useState('');
  const [userNickName, setuserNickName] = useState('');
  const [userMoblieNo, setuserMoblieNo] = useState('');
  const [genderVisible, setGenderVisible] = useState(false);
  const [gender, setGender] = useState('Gender');
  const [countryCode, setContryCode] = useState('+1');
  const [countryCodevisible, setCountryCodeVisible] = useState(false);
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
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const mobileRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const checkSignUp = () => {
    console.log(emailRegex.test(userEmail), userEmail);
    if (
      !emailRegex.test(userEmail) ||
      !mobileRegex.test(userMoblieNo) ||
      userEmail.length != 0 ||
      userMoblieNo.length != 0 ||
      userFirstName.length != 0 ||
      userMiddleName.length != 0 ||
      userLastName.length != 0 ||
      userNickName.length != 0 ||
      countryCode.length != 0 ||
      selectedDate.length != 0
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
      selectedDate == ''
        ? setInputErrors(prevState => ({
            ...prevState,
            dateError: true,
          }))
        : null;
    } else {
      //   fucntion call
      navigation.navigate(console.log('Login'));
    }
  };
  const toggleCountryCodeDropdown = () => {
    console.log('countryCode', countryCodevisible);
    if (countryCodevisible) {
      setCountryCodeVisible(false);
    } else {
      setCountryCodeVisible(true);
    }
  };

  const toggleSetGenderVisible = () => {
    if (genderVisible) {
      setGenderVisible(false);
    } else {
      setGenderVisible(true);
    }
  };

  return (
    <ScrollView>
      {/* <He_Loader color="#0086C3" /> */}
      <View style={styles.mainView}>
        <View style={styles.backArrowContainer}>
          <TouchableOpacity onPress={() => console.log('Back')}>
            <Image
              style={styles.backArrowImage}
              source={images.leftArrow1}></Image>
          </TouchableOpacity>
          <Text style={styles.signUpBackArrowText}>Already a member? </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={console.log('navigation.navigate')}>
            <Text style={styles.signUpLoginText}> Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.signUpHeadText}>SignUp</Text>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>LANGUAGE</Text>
          <MultiSelect
            label="Select Item"
            data={language.language}
            onSelect={item => setSelected(item)}
            buttonStyle={styles.buttonDropdownStyle}
            overlay={styles.dropDownoverlay}
          />
        </View>

        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>LEGAL FIRST NAME</Text>
          <He_TextInput
            placeholder="LEGAL FIRST NAME"
            value={userFirstName}
            onChangeText={text => {
              setuserFirstName(text);
              setInputErrors(prevState => ({
                ...prevState,
                firstNameError: false,
              }));
            }}
            screenName={'SignUp'}
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
            placeholder="MIDDLE NAME"
            value={userMiddleName}
            onChangeText={text => {
              setuserMiddleName(text);
              setInputErrors(prevState => ({
                ...prevState,
                middleNameError: false,
              }));
            }}
            screenName={'SignUp'}
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
            placeholder="LAST NAME"
            value={userLastName}
            onChangeText={text => {
              setuserLastName(text);
              setInputErrors(prevState => ({
                ...prevState,
                lastNameError: false,
              }));
            }}
            screenName={'SignUp'}
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
            placeholder="NICK NAME"
            value={userNickName}
            onChangeText={text => {
              setuserNickName(text);
              setInputErrors(prevState => ({
                ...prevState,
                nickNameError: false,
              }));
            }}
            screenName={'SignUp'}
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
          {inputError.nickNameError ? (
            <Text style={styles.errorText}>This field cannot be empty</Text>
          ) : null}
        </View>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>EMAIL</Text>
          <He_TextInput
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
            SCreenName={'SignUp'}
            style={styles.inputView}
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
          <Text style={styles.titleText}>GENDER</Text>
          <Dropdown
            label={gender}
            data={ArrayData.gender}
            // visible={genderVisible}
            onPress={() => toggleSetGenderVisible()}
            // onSelect={setSelected}
            buttonStyle={styles.genderDropDownButtonStyle}
            // overlay={styles.dropDownoverlay}
            // dropdown={styles.dropdownSingleSelect}
          />
          {/* dropdown */}
          <Modal
            visible={genderVisible}
            transparent
            animationType="none"
            style={{overflow: 'hidden'}}>
            <View style={styles.dropDownoverlay}>
              <FlatList
                style={[
                  styles.dropdownSingleSelect,
                  {
                    zIndex: 1,
                    top: 542,
                    maxHeight: 120,
                  },
                ]}
                data={ArrayData.gender}
                scrollEnabled={true}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={itemStyle}
                    onPress={() => {
                      setGender(item.label);
                      toggleSetGenderVisible();
                    }}>
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </Modal>
          {/* dropdown */}
        </View>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>MOBLIE</Text>
          <View style={styles.mobileInputContainer}>
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
                      top: 672,
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
              placeholder="Moblie No"
              value={userMoblieNo}
              onChangeText={text => setuserMoblieNo(text)}
              screenName={'SignUp'}
              style={styles.inputView1}
              styles={styles.textInputStyle1}
            />
          </View>
        </View>
        <MainButton
          name="Next"
          buttonText={styles.providerButtonText}
          styleButton={styles.providerCommanButton}
          onPress={() => checkSignUp()}
        />
      </View>
    </ScrollView>
  );
};

export default ProviderSignUp;
