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
  Dimensions,
  Modal,
  FlatList,
} from 'react-native';

/* End React Native Packages */

/* Start Components */

import HeProgressiveBar from '../components/HeProgressiveBar';
import HeButton from '../components/HeButton';
import images from '../assets/images/images';
import {HeCard} from '../components/HeCard';
import He_TextInput from '../components/he_TextInput';
import Dropdown from '../components/he_DropDown';
import Country_Code from '../constants/Country_Code.json';
import he_multiSelect from '../components/he_multiSelect';
/* End Components */

/* Start Redux Functions */

/* End Redux Functions */
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const styles = require('../assets/css/Style');
const PatientCareCircle = props => {
  const {navigation} = props;
  const {
    headContainer,
    settingsTitleText,
    settingsTitleContainer,
    backArrowImage,
    mainCardContainer,
  } = styles;
  /* Start Use Selector */

  /* End Use Selector */

  /* Start Use State */
  const [countryCode, setContryCode] = useState('+1');
  const [userMoblieNo, setuserMoblieNo] = useState('');
  const [countryCodevisible, setCountryCodeVisible] = useState(false);
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
      <Modal visible={Show}>
        <View
          style={[
            {
              width: windowWidth * 1,
              height: windowHeight * 0.9,
              backgroundColor: '#FAFAFA',
              margin: 10,
              padding: 0,
              borderRadius: 10,
              flex: 1,
              alignSelf: 'center',
              alignItems: 'center',
            },
            {},
          ]}>
          <HeCard
            style={[
              mainCardContainer,
              {backgroundColor: '#fff', height: '100%'},
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text onPress={() => setShow(false)} style={{width: '30%'}}>
                Cancel
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  alignItems: 'center',
                }}>
                <Text style={{width: '60%'}}>New Care Circle Member</Text>
                <HeButton
                  name="Add"
                  buttonText={styles.addMoreButtonText}
                  styleButton={styles.addMoreButton}
                />
              </View>
            </View>
            <View style={styles.emailInputContainer}>
              <Text style={styles.titleText}>Name</Text>
              <He_TextInput
                placeholder="NAME"
                screenName={'SignUp'}
                style={styles.inputView}
                styles={styles.textInputStyle}
              />
            </View>
            <View style={styles.emailInputContainer}>
              <Text style={styles.titleText}>Email</Text>
              <He_TextInput
                placeholder="EMAIL"
                screenName={'SignUp'}
                style={styles.inputView}
                styles={styles.textInputStyle}
              />
            </View>
            <View style={styles.emailInputContainer}>
              <Text style={styles.titleText}>MOBLIE</Text>
              <View style={styles.mobileInputContainer}>
                <Dropdown
                  // ref={el => {
                  //   console.log('agdhkashdjasj', el.getBoundingClientRect());
                  // }}
                  // visible={countryCodevisible}
                  label={countryCode}
                  onPress={() => toggleCountryCodeDropdown()}
                  // data={Country_Code.country_code}
                  // onSelect={setSelected}
                  buttonStyle={styles.buttonStyleCountryCode}
                  // overlay={}
                  // dropdown={}
                />
                {/* dropdown */}
                <Modal
                  visible={countryCodevisible}
                  transparent
                  animationType="none"
                  style={{overflow: 'hidden'}}>
                  <View style={styles.dropdownOverlayCountryCode}>
                    <FlatList
                      style={[
                        styles.dropdownSingleSelectCountryCode,
                        {
                          zIndex: 1,
                          top: 172,
                        },
                      ]}
                      data={Country_Code.country_code}
                      scrollEnabled={true}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          style={itemStyle}
                          onPress={() => {
                            setContryCode(item.label);
                            toggleCountryCodeDropdown();
                          }}>
                          <Text>{item.label}</Text>
                        </TouchableOpacity>
                      )}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  </View>
                </Modal>
                {/* dropdown */}
                <He_TextInput
                  placeholder="Moblie No"
                  value={userMoblieNo}
                  onChangeText={text => setuserMoblieNo(text)}
                  screenName={'SignUp'}
                  style={styles.inputView1}
                  styles={styles.textInputStyle1}
                />
              </View>
            </View>
          </HeCard>
        </View>
      </Modal>
      <ScrollView
        style={settingsTitleContainer}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => backFun()}
          style={{backgroundColor: '#FAFAFA'}}>
          <Image style={backArrowImage} source={images.arrowLeft} />
        </TouchableOpacity>
        <HeProgressiveBar />
        <Text style={settingsTitleText}>Care Circle</Text>
        <Text
          style={{
            textAlign: 'left',
            color: '#1B1E29',
            fontFamily: 'Rubik-Regular',
            fontSize: 16,
          }}>
          Care Circle Members are individuals you are giving access to your
          information on the Healiom platform. They can be family members,
          friends or a caretaker.
        </Text>
        <TouchableOpacity
          onPress={() => ''}
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
            Add Care Circle Member
          </Text>
        </TouchableOpacity>

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

export default PatientCareCircle;
