import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  HeButton,
  HeTextInput,
  HeDropDown,
  HeMultiSelect,
  HeDatePicker,
  HeCheckBox,
} from '../../../components';
//Import constants
import ArrayData from '../../../constants/ArrayData.json';
import language from '../../../constants/language.json';
import Country_Code from '../../../constants/Country_Code.json';
import images from '../../../assets/images/images';
import Icon from 'react-native-vector-icons/Ionicons';
const styles = require('../../../assets/css/Style');
const componentStyles = require('../../../assets/css/ComponentStyle');

const PatientSignUpInfo = props => {
  const [searchResult, setSearchResult] = useState({});
  const [selected, setSelected] = useState([]);
  const [multiDropDownMulti, setMultiDropDownMulti] = useState(false);

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
      // onSelect(item);
      //   setMultiDropDownMulti(false);
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
  const onSearch = (text, item) => {
    console.log(text, item, 'this is Text');
    let searchData = language.language.filter(function (item) {
      return item.value.includes(
        text.slice(0, 1).toUpperCase() + text.slice(1, text.length),
      );
    });
    setSearchResult(searchData);
  };
  const backFun = () => {
    try {
      props.navigation.goBack();
    } catch (error) {
      Alert.alert(appMessageStaticData.ERROR_COMMON);
    }
  };

  // dropdown multi end

  return (
    <ScrollView style={styles.Container}>
      <View style={styles.mainView}>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>LANGUAGE</Text>
          <HeMultiSelect
            label={'Selected Item' + ' ' + (selected.length || '')}
            //     {(selected && selected.label) || label}{" "}
            // {(selected && selected.length) || null}
            // data={language.language}
            onSelect={item => setSelected(item)}
            buttonStyle={styles.buttonDropdownStyle}
            // overlay={styles.dropDownoverlay}
            onPress={() => toggleMultiDropdown()}
            visible={multiDropDownMulti}
          />
          {/* dropdown multi */}
          <Modal visible={multiDropDownMulti} transparent animationType="none">
            <KeyboardAvoidingView style={styles.dropDownoverlay}>
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
                    <HeTextInput
                      placeholder="Search language..."
                      style={(componentStyles.multiSelectSearchTextInput, {})}
                      onChangeText={text => onSearch(text)}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => toggleMultiDropdown()}
                    Open={multiDropDownMulti}>
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
                  type={'patient'}
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
            </KeyboardAvoidingView>
            <KeyboardAvoidingView style={styles.multiSelectPatientSubmitButton}>
              <TouchableOpacity onPress={() => toggleMultiDropdown()}>
                <Text>Submit</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </Modal>
          {/* dropdown multi end */}
        </View>
      </View>
    </ScrollView>
  );
};

export default PatientSignUpInfo;
