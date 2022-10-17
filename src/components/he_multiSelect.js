import React, {FC, ReactElement, useRef, useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = require('../assets/css/ComponentStyle');
export default Dropdown = ({label, data, onSelect, buttonStyle, overlay}) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState([]);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [searchResult, setSearchResult] = useState([]);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
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
      // setVisible(false);
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
    let searchData = data.filter(function (item) {
      return item.value.includes(
        text.slice(0, 1).toUpperCase() + text.slice(1, text.length),
      );
    });
    setSearchResult(searchData);
  };

  //render values
  const renderItem = ({item, index}) => {
    const isFound = selected.some(element => {
      if (element.label === item.label) {
        return true;
      }
      return false;
    });
    return (
      <TouchableOpacity
        key={index}
        style={styles.itemMultiSelect}
        onPress={() => InsertDropDownValue(item)}>
        <Text>{item.label}</Text>
        {isFound ? (
          <Icon name="checkmark-outline" color="#24DAC6" size={16} />
        ) : null}
      </TouchableOpacity>
    );
  };

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          activeOpacity={0.1}
          style={overlay}
          // onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, {top: dropdownTop}]}>
            <View style={styles.multiSelectSearchContainer}>
              <View style={styles.multiSelectSearchMainView}>
                <Icon
                  name="search-outline"
                  color="#ccc"
                  size={18}
                  style={styles.multiSelectSearchIcon}
                />
                <TextInput
                  placeholder="Search language..."
                  style={styles.multiSelectSearchTextInput}
                  onChangeText={text => onSearch(text)}
                />
              </View>
              <TouchableOpacity>
                <Icon
                  name="arrow-back-outline"
                  color="#ccc"
                  size={18}
                  style={styles.multiSelectBackIcon}
                />
              </TouchableOpacity>
            </View>
            <FlatList
              data={searchResult.length == 0 ? data : searchResult}
              scrollEnabled={true}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisible(false)}
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
        <View style={styles.selectedDropDownContainer}>
          {selected.map((item, index) => {
            return (
              <View key={index} style={styles.selectedDropDownItem}>
                <Text style={styles.SelectedDropDownText}>{item.value}</Text>
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
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={buttonStyle}
      onPress={toggleDropdown}>
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {(selected && selected.label) || label}{' '}
        {(selected && selected.length) || null}
      </Text>
      {visible === true ? (
        <Icon name="caret-back-outline" color="#24DAC6" size={15} />
      ) : (
        <Icon name="caret-down-outline" color="#24DAC6" size={15} />
      )}
    </TouchableOpacity>
  );
};
