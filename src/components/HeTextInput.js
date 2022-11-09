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
3. Component Description: Custom TextInput
4. Date Created: 19/10/2022
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
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

/* End React Native Packages */

/* Start Components */

/* End Components */

/* Start Redux Functions */

/* End Redux Functions */

const HeTextInput = props => {
  const {
    style,
    ref,
    keyboardType,
    placeholder,
    screenName,
    textContentType,
    styles,
    onChangeText,
    value,
    caretHidden,
    onKeyPress,
    icon,
    imageSrc,
    onIconPress,
    secureTextEntry,
  } = props;
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
    <View style={style}>
      <TextInput
        ref={ref}
        keyboardType={keyboardType}
        textContentType={textContentType}
        ScreenName={screenName}
        placeholder={placeholder}
        style={styles}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        placeholderTextColor="#C5C5C5"
        onChangeText={onChangeText}
        value={value}
        caretHidden={caretHidden}
        onKeyPress={onKeyPress}
        secureTextEntry={secureTextEntry}
      />
      {icon ? (
        <TouchableOpacity
          onPress={onIconPress}
          style={{position: 'absolute', right: 10}}>
          <Image source={imageSrc} style={{width: 25, height: 25}} />
        </TouchableOpacity>
      ) : null}
    </View>
  );

  /* Final JSX End */
};

export {HeTextInput};
