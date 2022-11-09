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
1. Developer Name: Manish singh Rana
2. Developer Email ID: manish.rana@healiom.com
3. Component Description: Custom Dropdown(SingleSelect)
4. Date Created: 19/10/2022
5. Date Modified:
6. Version number:
7. Previous version Developer Name:
8. Previous version Developer Email ID:
9. Previous version description:
10. Current version Developer Name: Manish singh Rana
11. Current version Developer Email ID: manish.rana@healiom.com
12. Current version description:
======COMPONENT COMMENT ENDS======*/

/* Start React Native Packages */
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
/* End React Native Packages */

/* Start Components */
import colors from '../assets/css/colorStyle';
/* End Components */

/* Start Redux Functions */

/* End Redux Functions */
const styles = require('../assets/css/Style');
const HeDropDown = props => {
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
    type,
    buttonTextDropdown,
  } = props;
  const {buttonText, itemStyle} = styles;
  const DropdownButton = useRef();
  /* Start Use State */

  /* End Use State */

  /* Start Use Ref */

  /* End Use Ref */

  /* Start Custom Functions Without JSX */

  /* End Custom Functions Without JSX */

  /* Start Custom Functions With JSX */

  /* End Custom Functions With JSX */

  /* Final JSX Start */
  return (
    <TouchableOpacity
      // ref={ref}
      style={buttonStyle}
      type={type}
      onPress={() => {
        onPress();
        // openDropdown();
      }}>
      {/* {props.children} */}
      <Text style={buttonTextDropdown}>{label}</Text>
      {visible === true ? (
        <Icon
          name="caret-back-outline"
          color={type === 'Patient' ? colors.Patient : colors.Provider}
          size={15}
        />
      ) : (
        <Icon
          name="caret-down-outline"
          color={type === 'Patient' ? colors.Patient : colors.Provider}
          size={15}
        />
      )}
    </TouchableOpacity>
  );

  /* Final JSX End */
};

export {HeDropDown};
