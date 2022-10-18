import React, {FC, ReactElement, useRef, useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = require('../assets/css/ComponentStyle');

export default Dropdown = props => {
  const {
    label,
    data,
    buttonStyle,
    overlay,
    dropdown,
    onPress,
    onItemSelect,
    visible,
    ref,
    onLayout,
  } = props;
  const {buttonText, itemStyle} = styles;
  // const DropdownButton = useRef();
  const [dropdownTop, setDropdownTop] = useState(0);

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
  // useEffect(
  //   Dropdown.measure((_fx, _fy, _w, h, _px, py) => {
  //     setDropdownTop(py + h);
  //   }),
  //   [],
  // );
  // const toggleDropdown = () => {
  //   visible ? setVisible(false) : openDropdown();
  // };

  // const openDropdown = () => {
  //   console.log('BRO THIS IS A CLICKs');
  //   DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
  //     setDropdownTop(py + h);
  //   });
  //   onPress();
  // };

  // const onItemPress = item => {
  //   // setSelected(item);
  //   // onSelect(item);
  //   setVisible(false);
  // };
  // () => onItemPress(item)
  // const renderItem =
  // );

  // const renderDropdown = () => {
  //   return (
  //     <Modal visible={visible} transparent animationType="none">
  //       <View style={overlay}>
  //         <FlatList
  //           style={[dropdown, {top: dropdownTop}]}
  //           data={data}
  //           scrollEnabled={true}
  //           renderItem={({item}) => (
  //             <TouchableOpacity style={itemStyle} onPress={onItemSelect}>
  //               <Text>{item.label}</Text>
  //             </TouchableOpacity>
  //           )}
  //           keyExtractor={(item, index) => index.toString()}
  //         />
  //       </View>
  //     </Modal>
  //   );
  // };

  return (
    <TouchableOpacity
      ref={ref}
      style={buttonStyle}
      onPress={() => {
        onPress();
        // openDropdown();
      }}>
      {/* {props.children} */}
      <Text style={buttonText}>{label}</Text>
      {visible === true ? (
        <Icon name="caret-back-outline" color="#24DAC6" size={15} />
      ) : (
        <Icon name="caret-down-outline" color="#24DAC6" size={15} />
      )}
    </TouchableOpacity>
  );
};
