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
import React, {Component} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

/* End React Native Packages */

/* Start Components */
import MainButton from '../components/he_Button';
import images from '../assets/images/images';
/* End Components */

/* Start Redux Functions */

/* End Redux Functions */
const styles = require('../assets/css/Style');
const ProviderEnableTouchId = props => {
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
    <ScrollView style={{backgroundColor: '#FAFAFA', flex: 1}}>
      <View style={{marginHorizontal: 20}}>
        <TouchableOpacity
          style={styles.FaceTouchIdArrow}
          onPress={() => this.backFun()}>
          <Image style={styles.leftArrow1} source={images.arrowLeft} />
        </TouchableOpacity>
        <Text style={styles.headText}>Enable Touch ID</Text>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 80, height: 80, marginTop: 30, tintColor: '#0086C3'}}
            source={images.touchId}
          />
        </View>
        <Text style={styles.FaceTouchIdText}>
          Login with a touch of your finger or your face, instead of typing your
          password everytime.
        </Text>
        <MainButton
          name="Enable Now"
          buttonText={styles.buttonText}
          styleButton={styles.providerCommanButton}
          onPress={() => ''}
        />

        <TouchableOpacity onPress={() => ''}>
          <Text style={styles.FaceTouchIdMaybeLaterTextProvider}>
            Maybe Later
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  /* Final JSX End */
};

export default ProviderEnableTouchId;
