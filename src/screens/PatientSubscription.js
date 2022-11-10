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
import HeButton from '../components/HeButton';
import {HeCard} from '../components/HeCard';
/* End Components */

/* Start Redux Functions */

/* End Redux Functions */
const styles = require('../assets/css/Style');
const PatientSubscription = props => {
  const {
    headContainer,
    settingsTitleText,
    settingsTitleContainer,
    backArrowImageSettings,
    mainCardContainer,
    homeTextStyle,
    subscriptionTitleText,
    subscriptionCardTitle,
    subscriptionCardDollarText,
    subscriptionCardText,
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
        <Text style={[settingsTitleText, {}]}>Patient Member Plans</Text>
        <Text style={subscriptionTitleText}>
          The following plans provide access and referral support to specialist
          care. Healiom is NOT health insurance.
        </Text>
        <HeCard
          style={[
            mainCardContainer,
            {backgroundColor: '#FFFFFF', width: '100%'},
          ]}>
          <View style={{marginVertical: 5}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={subscriptionCardTitle}>Partner Plan Member</Text>
              <Text style={subscriptionCardDollarText}>$0/mo</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexGrow: 0,
              }}>
              <Text style={subscriptionCardText}>
                Applicable as per your insurance health plan coverage. Click
                here to see Healiom's partners.
              </Text>
            </View>
            <HeButton
              name="Current Plan"
              buttonText={styles.buttonText}
              styleButton={styles.subscriptionCardButton}
            />
            <Text style={subscriptionCardText}>
              Note:Auto approved for Patient Members with a Healiom partnered
              health plan.
            </Text>
          </View>
        </HeCard>
        <HeCard
          style={[
            mainCardContainer,
            {backgroundColor: '#FFFFFF', width: '100%'},
          ]}>
          <View style={{marginVertical: 5}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={subscriptionCardTitle}>Partner Plan Member</Text>
              <Text style={subscriptionCardDollarText}>$0/mo</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexGrow: 0,
              }}>
              <Text style={subscriptionCardText}>
                Applicable as per your insurance health plan coverage. Click
                here to see Healiom's partners.
              </Text>
            </View>
            <HeButton
              name="Select"
              buttonText={styles.buttonText}
              styleButton={styles.subscriptionCardButtonSelect}
            />
            <Text style={subscriptionCardText}>
              Note:Auto approved for Patient Members with a Healiom partnered
              health plan.
            </Text>
          </View>
        </HeCard>
        <HeCard
          style={[
            mainCardContainer,
            {backgroundColor: '#FFFFFF', width: '100%'},
          ]}>
          <View style={{marginVertical: 5}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={subscriptionCardTitle}>Partner Plan Member</Text>
              <Text style={subscriptionCardDollarText}>$0/mo</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexGrow: 0,
              }}>
              <Text style={subscriptionCardText}>
                Applicable as per your insurance health plan coverage. Click
                here to see Healiom's partners.
              </Text>
            </View>
            <HeButton
              name="Select"
              buttonText={styles.buttonText}
              styleButton={styles.subscriptionCardButtonSelect}
            />
            <Text style={subscriptionCardText}>
              Note:Auto approved for Patient Members with a Healiom partnered
              health plan.
            </Text>
          </View>
        </HeCard>
        <HeCard
          style={[
            mainCardContainer,
            {backgroundColor: '#FFFFFF', width: '100%'},
          ]}>
          <View style={{marginVertical: 5}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={subscriptionCardTitle}>Partner Plan Member</Text>
              <Text style={subscriptionCardDollarText}>$0/mo</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexGrow: 0,
              }}>
              <Text style={subscriptionCardText}>
                Applicable as per your insurance health plan coverage. Click
                here to see Healiom's partners.
              </Text>
            </View>
            <HeButton
              name="Select"
              buttonText={styles.buttonText}
              styleButton={styles.subscriptionCardButtonSelect}
            />
            <Text style={subscriptionCardText}>
              Note:Auto approved for Patient Members with a Healiom partnered
              health plan.
            </Text>
          </View>
        </HeCard>
      </ScrollView>
    </View>
  );

  /* Final JSX End */
};

export default PatientSubscription;
