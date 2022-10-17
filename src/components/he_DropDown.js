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
  const {label, data, onSelect, buttonStyle, overlay, dropdown} = props;
  const {buttonText, itemStyle} = styles;
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = item => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={itemStyle} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <View style={overlay}>
          <FlatList
            style={[dropdown, {top: dropdownTop}]}
            data={data}
            scrollEnabled={true}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={buttonStyle}
      onPress={toggleDropdown}>
      {renderDropdown()}
      <Text style={buttonText}>{(selected && selected.label) || label}</Text>
      {visible === true ? (
        <Icon name="caret-back-outline" color="#24DAC6" size={15} />
      ) : (
        <Icon name="caret-down-outline" color="#24DAC6" size={15} />
      )}
    </TouchableOpacity>
  );
};

// import React, { FC, ReactElement, useRef, useState, useEffect } from 'react';
// import {
//     FlatList,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     Modal,
//     View,
//     SafeAreaView,
// } from 'react-native';
// // import { Icon } from 'react-native-elements';

// const styles = require("../assets/css/ComponentStyle");
// export default Dropdown = ({ label, data, onSelect, buttonStyle, overlay, dropdown }) => {
//     const DropdownButton = useRef();
//     const [visible, setVisible] = useState(false);
//     const [selected, setSelected] = useState(undefined);
//     const [dropdownTop, setDropdownTop] = useState(0);

//     const toggleDropdown = () => {
//         visible ? setVisible(false) : openDropdown();
//     };

//     const openDropdown = () => {
//         DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
//             setDropdownTop(py + h);
//         });
//         setVisible(true);
//     };

//     const onItemPress = (item) => {
//         setSelected(item);
//         onSelect(item);
//         setVisible(false);
//     };

//     const renderItem = ({ item }) => (
//         <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
//             <Text>{item.label}</Text>
//         </TouchableOpacity>
//     );

//     const renderDropdown = () => {
//         return (
//             <Modal visible={visible} transparent animationType="none">
//                 {/* <TouchableOpacity

//                     onPress={() => setVisible(false)}
//                 > */}
//                     <View  style={overlay}>
//                         <FlatList
//                             style={[dropdown, { top: dropdownTop }]}
//                             data={data}
//                             scrollEnabled={true}
//                             renderItem={renderItem}
//                             keyExtractor={(item, index) => index.toString()}
//                         />
//                     </View>
//                 {/* </TouchableOpacity> */}
//             </Modal>

//             //        <Modal visible={state} transparent animationType="none">
//             //     <View style={overlay}>
//             //         <FlatList
//             //             style={[dropdown, { top: dropdownTop }]}
//             //             data={data}
//             //             scrollEnabled={true}
//             //             renderItem={renderItem}
//             //             keyExtractor={(item, index) => index.toString()}
//             //         />
//             //     </View>
//             // </Modal>
//         );
//     };

//     return (
//         <TouchableOpacity
//             ref={DropdownButton}
//             style={buttonStyle}
//             onPress={toggleDropdown}
//         >
//             {renderDropdown()}
//             <Text style={styles.buttonText}>
//                 {(selected && selected.label) || label}
//             </Text>
//             {/* <Icon style={styles.icon} type="font-awesome" name="chevron-down" /> */}
//         </TouchableOpacity>
//     );
// };
