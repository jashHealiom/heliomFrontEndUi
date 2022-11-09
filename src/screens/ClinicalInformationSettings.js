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
1. Developer Name:Manish singh Rana
2. Developer Email ID:manish.rana@healiom.com
3. Component Description: PatientAccountSettings
4. Date Created: 28/10/2022
5. Date Modified:
6. Version number:
7. Previous version Developer Name:
8. Previous version Developer Email ID:
9. Previous version description:
10. Current version Developer Name:Manish singh Rana
11. Current version Developer Email ID: manish.rana@healiom.com
12. Current version description:
======COMPONENT COMMENT ENDS======*/

/* Start React Native Packages */

import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';

/* End React Native Packages */

/* Start Components */
import images from '../assets/images/images';
/* End Components */

/* Start Redux Functions */

/* End Redux Functions */
const styles = require('../assets/css/Style');
const PatientClinicalSettings = props => {
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
  const backFun = () => {
    try {
      navigation.goBack();
    } catch (error) {
      Alert.alert(appMessageStaticData.ERROR_COMMON);
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
        <Text style={settingsTitleText}>Clinical Information</Text>

        <View style={{justifyContent: 'space-between', flex: 1, height: 590}}>
          <View>
            <View style={[settingsMiddleDividingLine, {marginTop: 28}]}></View>
            <TouchableOpacity
              onPress={() => navigation.navigate('')}
              style={settingsSubContainer}>
              <Text style={settingsTextStyle}>Provider Setting</Text>
              <Image style={settingsImageStyle} source={images.chevron_right} />
            </TouchableOpacity>
            <View style={settingsMiddleDividingLine}></View>
            <TouchableOpacity
              onPress={() => navigation.navigate('')}
              style={settingsSubContainer}>
              <Text style={settingsTextStyle}>Facility Setting</Text>
              <Image style={settingsImageStyle} source={images.chevron_right} />
            </TouchableOpacity>
            <View style={settingsMiddleDividingLine}></View>
            <TouchableOpacity
              onPress={() => navigation.navigate('')}
              style={settingsSubContainer}>
              <Text style={settingsTextStyle}>Rx Delivery</Text>
              <Image style={settingsImageStyle} source={images.chevron_right} />
            </TouchableOpacity>
            <View style={settingsMiddleDividingLine}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );

  /* Final JSX End */
};

export default PatientClinicalSettings;
