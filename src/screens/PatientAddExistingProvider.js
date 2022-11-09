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
1. Developer Name: 
2. Developer Email ID: 
3. Component Description: 
4. Date Created: 
5. Date Modified:
6. Version number:
7. Previous version Developer Name:
8. Previous version Developer Email ID:
9. Previous version description:
10. Current version Developer Name:
11. Current version Developer Email ID:
12. Current version description:
======COMPONENT COMMENT ENDS======*/

/* Start React Native Packages */
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';

/* End React Native Packages */

/* Start Components */
import images from '../assets/images/images';
import HeProgressiveBar from '../components/HeProgressiveBar';
import {HeTextInput} from '../components/HeTextInput';
import He_TextInput from '../components/he_TextInput';
import HeButton from '../components/HeButton';
/* End Components */

/* Start Redux Functions */

/* End Redux Functions */
const styles = require('../assets/css/Style');

const PatientAddExistingProvider = props => {
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
  /* Start Use Selector */

  /* End Use Selector */

  /* Start Use State */

  /* End Use State */

  /* Start Use Ref */

  /* End Use Ref */

  /* Start Use Effect */

  /* End Use Effect */

  /* Start Custom Functions Without JSX */

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
        <HeProgressiveBar />
        <Text style={[settingsTitleText, {marginTop: 0}]}>
          Existing Providers
        </Text>
        <View style={{marginTop: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'Rubik-Regular',
                textAlign: 'left',
                color: '#1B1E29',
                fontSize: 14,
                textTransform: 'uppercase',
              }}>
              PCP
            </Text>
            <Image
              style={{height: 18, width: 18, marginTop: 0, marginHorizontal: 7}}
              source={images.ic_info}
            />

            <Text
              style={{
                fontFamily: 'Rubik-Regular',
                textAlign: 'left',
                color: '#FFFFFF',
                fontSize: 11,
                paddingLeft: 5,
                paddingTop: 2,
                paddingRight: 5,
                paddingBottom: 2,
                backgroundColor: '#000000',
              }}>
              Primary care provider
            </Text>
          </View>
          <HeTextInput
            placeholder="PCP"
            style={styles.cardInputView}
            styles={styles.textInputStyle}
          />
        </View>
        <View style={{marginTop: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'Rubik-Regular',
                textAlign: 'left',
                color: '#1B1E29',
                fontSize: 14,
                textTransform: 'uppercase',
              }}>
              OB Gyn
            </Text>
            <Image
              style={{height: 18, width: 18, marginTop: 0, marginHorizontal: 7}}
              source={images.ic_info}
            />

            <Text
              style={{
                fontFamily: 'Rubik-Regular',
                textAlign: 'left',
                color: '#FFFFFF',
                fontSize: 11,
                paddingLeft: 5,
                paddingTop: 2,
                paddingRight: 5,
                paddingBottom: 2,
                backgroundColor: '#000000',
              }}>
              Obstetrics and gynaecology
            </Text>
          </View>
          <HeTextInput
            placeholder="OB Gyn"
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
        </View>

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

export default PatientAddExistingProvider;
