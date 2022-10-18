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
