/******************************************************************************
 *	Copyright 2022 Healiom Inc
 *	Licensed under the Healiom Inc, Version 1.0 (the  "License"); you may not
 *	user this file except in compliance with the License. You may obtain a copy
 *	of the License at
 *
 *	Unless required by applicable law or agreed to in writing, software
 *	distributed under the License is distributed on an
 *	"AS IS"
 *	BASIS. WITHOUT
 *	WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *	See the
 *	License for the specific lanquage governing permissions and limitations under
 *	the License
 ******************************************************************************/

/*=====COMPONENT COMMENT BEGINS=====
1. Developer Name: Manish Singh Rana
2. Developer Email ID: manishranaharidwar@gmail.com
3. Component Description: PatientAddRxDelivery
4. Date Created: 
5. Date Modified:
6. Version number:
7. Previous version Developer Name:
8. Previous version Developer Email ID:
9. Previous version description:
10. Current version Developer Name: Manish Singh Rana
11. Current version Developer Email ID: manishranaharidwar@gmail.com
12. Current version description:
======COMPONENT COMMENT ENDS======*/

/* Start React Native Packages */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';

/* End React Native Packages */

/* Start Components */
import images from '../assets/images/images';
import HeButton from '../components/HeButton';
import {HeDropDown} from '../components/HeDropDown';
import ArrayData from '../constants/ArrayData.json';
import rxDeliveryStaticData from '../constants/rx_delivery.json';

/* End Components */

/* Start Redux Functions */

/* End Redux Functions */
const componentStyles = require('../assets/css/ComponentStyle');
const styles = require('../assets/css/Style');
const PatientAddRxDelivery = props => {
  const {
    headContainer,
    settingsTextStyle,
    settingsImageStyle,
    settingsTitleText,
    settingsMiddleDividingLine,
    settingsTitleContainer,
    settingsSubContainer,
    backArrowImageSettings,
  } = styles;
  const {itemStyle} = componentStyles;

  /* Start Use Selector */

  /* End Use Selector */

  /* Start Use State */
  const [genderVisible, setGenderVisible] = useState(false);

  /* End Use State */

  /* Start Use Ref */

  /* End Use Ref */

  /* Start Use Effect */

  /* End Use Effect */

  /* Start Custom Functions Without JSX */
  const toggleSetGenderVisible = () => {
    if (genderVisible) {
      setGenderVisible(false);
    } else {
      setGenderVisible(true);
    }
  };
  /* End Custom Functions Without JSX */

  /* Start Custom Functions With JSX */

  /* End Custom Functions With JSX */

  /* Final JSX Start */
  return (
    <View style={headContainer}>
      <ScrollView
        style={settingsTitleContainer}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => backFun()}
          style={{backgroundColor: '#FAFAFA'}}>
          <Image style={backArrowImageSettings} source={images.arrowLeft} />
        </TouchableOpacity>
        <Text style={settingsTitleText}>Rx Delivery</Text>
        <Text
          style={{
            textAlign: 'left',
            color: '#1B1E29',
            fontFamily: 'Rubik-Regular',
            fontSize: 16,
            marginTop: 16,
          }}>
          Add your preferred pharmacy brand.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 16,
          }}>
          <Text
            style={{
              fontFamily: 'Rubik-Regular',
              textAlign: 'left',
              color: '#1B1E29',
              fontSize: 14,
              textTransform: 'uppercase',
            }}>
            Pharmacy brand
          </Text>
          <Image
            style={{height: 18, width: 18, marginTop: 0, marginHorizontal: 7}}
            source={images.ic_info}
          />
        </View>
        <HeDropDown
          //   label={gender}
          type={'Patient'}
          data={rxDeliveryStaticData.rx_delivery}
          //   buttonTextDropdown={[
          //     styles.buttonTextDropdown,
          //     {color: gender === 'GENDER' ? '#C5C5C5' : '#1B1E29'},
          //   ]}
          // visible={genderVisible}
          onPress={() => toggleSetGenderVisible()}
          // onSelect={setSelected}
          buttonStyle={styles.PharmacyDropDownButtonStyle}
          // overlay={styles.dropDownoverlay}
          // dropdown={styles.dropdownSingleSelect}
        />
        {genderVisible ? (
          <View style={styles.dropDownoverlay}>
            <FlatList
              style={[
                styles.dropdownSingleSelect,
                {
                  zIndex: 1,
                  top: 0,
                },
              ]}
              data={rxDeliveryStaticData.rx_delivery}
              scrollEnabled={true}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={itemStyle}
                  onPress={() => {
                    setGender(item.label);
                    toggleSetGenderVisible();
                    setInputErrors(prevState => ({
                      ...prevState,
                      genderError: false,
                    }));
                  }}>
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        ) : null}
        <HeButton
          name="Save"
          buttonText={styles.buttonText}
          styleButton={styles.commanButton}
          //   onPress={() => }
        />
      </ScrollView>
    </View>
  );

  /* Final JSX End */
};

export default PatientAddRxDelivery;
