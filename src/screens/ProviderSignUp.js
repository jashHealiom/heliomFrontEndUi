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
          <Text style={styles.signUpBackArrowText}>
            Already a member?{' '}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={console.log('navigation.navigate')}>
              <Text style={styles.signUpLoginText}> Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <Text style={styles.signUpHeadText}>SignUp</Text>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>LANGUAGE</Text>
          <MultiSelect
            label="Select Item"
            data={language.language}
            onSelect={item => setSelected(item)}
            buttonStyle={styles.genderDropDownButtonStyle}
            overlay={styles.dropDownoverlay}
          />
        </View>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>EMAIL</Text>
          <He_TextInput
            placeholder="Email"
            value={userEmail}
            onChangeText={text => setuserEmail(text)}
            SCreenName={'SignUp'}
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
        </View>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>LEGAL FIRST NAME</Text>
          <He_TextInput
            placeholder="LEGAL FIRST NAME"
            value={userFirstName}
            onChangeText={text => setuserFirstName(text)}
            screenName={'SignUp'}
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
        </View>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>MIDDLE NAME</Text>
          <He_TextInput
            placeholder="MIDDLE NAME"
            value={userMiddleName}
            onChangeText={text => setuserMiddleName(text)}
            screenName={'SignUp'}
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
        </View>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>LAST NAME</Text>
          <He_TextInput
            placeholder="LAST NAME"
            value={userLastName}
            onChangeText={text => setuserLastName(text)}
            screenName={'SignUp'}
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
        </View>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>NICK NAME</Text>
          <He_TextInput
            placeholder="NICK NAME"
            value={userNickName}
            onChangeText={text => setuserNickName(text)}
            screenName={'SignUp'}
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
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
          <Text style={styles.titleText}>
            NPI/Medical license identification number
          </Text>
          <He_TextInput
            placeholder="11-Digit No."
            screenName={'SignUp'}
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
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
          onPress={() => console.log('Done')}
        />
      </View>
    </ScrollView>
  );
};

export default ProviderSignUp;
