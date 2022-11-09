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
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';

/* End React Native Packages */

/* Start Components */
import HeProgressiveBar from '../components/HeProgressiveBar';
import HeButton from '../components/HeButton';
import images from '../assets/images/images';
/* End Components */

/* Start Redux Functions */

/* End Redux Functions */
const styles = require('../assets/css/Style');
const PatientAddPreviousFacility = props => {
  const {navigation} = props;
  const {
    headContainer,
    settingsTitleText,
    settingsTitleContainer,
    backArrowImage,
  } = styles;
  /* Start Use Selector */

  /* End Use Selector */

  /* Start Use State */
  const [Show, setShow] = useState(false);
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
          <Image style={backArrowImage} source={images.arrowLeft} />
        </TouchableOpacity>
        <HeProgressiveBar />
        <Text style={settingsTitleText}>Previous Facilities</Text>
        <Text
          style={{
            textAlign: 'left',
            color: '#1B1E29',
            fontFamily: 'Rubik-Regular',
            fontSize: 16,
          }}>
          Add Previous healthcare Facilities you have used.
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PatientOnboardingInsuranceManual')
          }
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Image source={images.plus} />
          <Text
            onPress={() => setShow(true)}
            style={{
              fontFamily: 'Rubik-Regular',
              fontWeight: '300',
              textAlign: 'right',
              color: '#00A896',
              fontSize: 16,
              marginTop: 0,
              marginHorizontal: 5,
            }}>
            Add Insurance
          </Text>
        </TouchableOpacity>
        <Modal visible={Show} backgroundColor="#ccc">
          <View>
            <Text onPress={() => setShow(false)}>Close</Text>
          </View>
        </Modal>
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

export default PatientAddPreviousFacility;
