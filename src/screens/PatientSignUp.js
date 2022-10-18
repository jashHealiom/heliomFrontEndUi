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
//Import constants
import ArrayData from '../constants/ArrayData.json';
import language from '../constants/language.json';
import Country_Code from '../constants/Country_Code.json';
import images from '../assets/images/images';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = require('../assets/css/Style');
const componentStyles = require('../assets/css/ComponentStyle');
const SignUp = () => {
  //states
  const {buttonText} = styles;
  const {itemStyle} = componentStyles;
  // date picker start
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setselectedDate] = useState('');
  // date picker end
  const [userEmail, setuserEmail] = useState('');
  const [userFirstName, setuserFirstName] = useState('');
  const [userMiddleName, setuserMiddleName] = useState('');
  const [userLastName, setuserLastName] = useState('');
  const [userNickName, setuserNickName] = useState('');
  const [userMoblieNo, setuserMoblieNo] = useState('');
  const [countryCode, setContryCode] = useState('+1');
  const [countryCodevisible, setCountryCodeVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [genderVisible, setGenderVisible] = useState(false);
  const [gender, setGender] = useState('Gender');
  const [searchResult, setSearchResult] = useState({});
  const [selected, setSelected] = useState([]);
  const [multiDropDownMulti, setMultiDropDownMulti] = useState(false);

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

  const toggleSetGenderVisible = () => {
    if (genderVisible) {
      setGenderVisible(false);
    } else {
      setGenderVisible(true);
    }
  };

  // dropdown multi end

  const toggleMultiDropdown = () => {
    multiDropDownMulti
      ? setMultiDropDownMulti(false)
      : setMultiDropDownMulti(true);
  };
  //insert Dropdown value
  const InsertDropDownValue = item => {
    const isFound = selected.some(element => {
      if (element.label === item.label) {
        return true;
      }
      return false;
    });
    if (!isFound) {
      let selectedItem = selected;
      var obj = {};
      obj['label'] = item.label;
      obj['value'] = item.value;
      selectedItem.push(obj);
      setSelected(selectedItem);
      onSelect(item);
      // setMultiDropDownMulti(false);
    }
  };
  //Delete Dropdown Value
  const DeleteDropDownValue = index => {
    var newData = [...selected];
    if (index > -1) {
      newData.splice(index, 1);
      setSelected(newData);
    }
  };
  // Dropdown Search function
  const onSearch = text => {
    let searchData = language.language.filter(function (item) {
      return item.value.includes(
        text.slice(0, 1).toUpperCase() + text.slice(1, text.length),
      );
    });
    setSearchResult(searchData);
  };

  // dropdown multi end

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
  // date picker functions
  const formatDate = date => {
    var month = '' + (date.getMonth() + 1),
      day = '' + date.getDate(),
      year = date.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('/');
  };
  // date picker functions end
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
            // data={language.language}
            onSelect={item => setSelected(item)}
            buttonStyle={styles.buttonDropdownStyle}
            // overlay={styles.dropDownoverlay}
            onPress={() => toggleMultiDropdown()}
            visible={multiDropDownMulti}
          />
          {/* dropdown multi */}
          <Modal visible={multiDropDownMulti} transparent animationType="none">
            {/* <TouchableOpacity
              activeOpacity={0.1}
              style={styles.dropDownoverlay}
              // onPress={() => setVisible(false)}
            > */}
            <View style={styles.dropDownoverlay}>
              <View
                style={[componentStyles.dropdown, {top: 175, width: '100%'}]}>
                <View style={componentStyles.multiSelectSearchContainer}>
                  <View style={componentStyles.multiSelectSearchMainView}>
                    <Icon
                      name="search-outline"
                      color="#ccc"
                      size={18}
                      style={componentStyles.multiSelectSearchIcon}
                    />
                    <He_TextInput
                      placeholder="Search language..."
                      style={
                        (componentStyles.multiSelectSearchTextInput,
                        {width: '87%'})
                      }
                      onChangeText={text => onSearch(text)}
                    />
                  </View>
                  <TouchableOpacity onPress={() => toggleMultiDropdown()}>
                    <Icon
                      name="arrow-back-outline"
                      color="#ccc"
                      size={18}
                      style={componentStyles.multiSelectBackIcon}
                    />
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={
                    Object.keys(searchResult).length == 0
                      ? language.language
                      : searchResult
                  }
                  scrollEnabled={true}
                  renderItem={({item, index}) => {
                    const isFound = selected.some(element => {
                      if (element.label === item.label) {
                        return true;
                      }
                      return false;
                    });
                    return (
                      <TouchableOpacity
                        key={index}
                        style={componentStyles.itemMultiSelect}
                        onPress={() => InsertDropDownValue(item)}>
                        {console.log('item hai re tu?', item)}
                        <Text>{item.label}</Text>
                        {isFound ? (
                          <Icon
                            name="checkmark-outline"
                            color="#24DAC6"
                            size={16}
                          />
                        ) : null}
                      </TouchableOpacity>
                    );
                  }}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </View>
            {/* </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => toggleMultiDropdown()}
              style={{
                backgroundColor: '#24DAC6',
                height: 40,
                marginHorizontal: 20,
                width: '90%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 2,
              }}>
              <Text>Submit</Text>
            </TouchableOpacity>
            <View style={componentStyles.selectedDropDownContainer}>
              {selected.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={componentStyles.selectedDropDownItem}>
                    <Text style={componentStyles.SelectedDropDownText}>
                      {item.value}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.1}
                      onPress={() => DeleteDropDownValue(index)}>
                      <Icon name="close-outline" color="#24DAC6" size={20} />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </Modal>
          {/* dropdown multi end */}
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
          <Text style={styles.titleText}>DATE OF BIRTH</Text>
          <DatePickerApp
            value={date}
            onChange={(event, selectedDate) => {
              setselectedDate(formatDate(selectedDate));
              setDatePicker(false);
              setInputErrors(prevState => ({
                ...prevState,
                dateError: false,
              }));
            }}
            selectedDate={selectedDate}
            // style={datePickerStyle}
            onPress={() => {
              // showDatePicker();
              setDatePicker(true);
              console.log('whats the problem bitch');
            }}
            datePicker={datePicker}
          />
          {/* date picker */}
          {/* <View style={datePickerContainer}>
            {datePicker && (
              <DateTimePicker
                value={date}
                mode={'date'}
                dateFormat={'day month year'}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                is24Hour={true}
                // onChange={onDateSelected}
                onChange={(event, selectedDate) => {
                  setselectedDate(formatDate(selectedDate));
                  setDatePicker(false);
                  setInputErrors(prevState => ({
                    ...prevState,
                    dateError: false,
                  }));
                }}
                selectedDate={selectedDate}
                style={datePickerStyle}
                onPress={showDatePicker}
              />
            )}
            <He_TextInput
              value={selectedDate}
              onChangeText={text => setselectedDate(text)}
              placeholder="MM/DD/YYYY"
              style={datePickerTextStyle}
              editable={false}
            />
            {!datePicker && (
              <View style={{margin: 10}}>
                <TouchableOpacity
                  onPress={showDatePicker}
                  activeOpacity={0.7}
                  style={touchableSizeIncreaseStyle}>
                  <Icon name="calendar-outline" color="#24DAC6" size={20} />
                </TouchableOpacity>
              </View>
            )}
          </View> */}
          {/* end date picker */}
          {inputError.dateError ? (
            <Text style={styles.errorText}>This field cannot be empty</Text>
          ) : null}
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
                      top: 688,
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
