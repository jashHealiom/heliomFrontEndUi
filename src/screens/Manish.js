import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';

import PatientEnableFaceID from './PatientEnableFaceID';
import PatientEnableTouchID from './PatientEnableTouchID';
import ProviderEnableTouchId from './ProviderEnableTouchId';
import ProviderEnableFaceId from './ProviderEnableFaceId';
import HeProgressiveBar from '../components/HeProgressiveBar';
import ClinicalInformationSettings from './ClinicalInformationSettings';
import PatientAddRxDelivery from './PatientAddRxDelivery';
import PatientAddExistingProvider from './PatientAddExistingProvider';
import PatientAddPreviousFacility from './PatientAddPreviousFacility';
import PatientCareCircle from './PatientCareCircle';
import PatientProfilePaymentInput from './PatientProfilePaymentInput';
import PatientSubscription from './PatientSubscription';
const Manish = () => {
  return (
    <>
      <View style={styles.container}>
        {/* <PatientProfilePaymentInput /> */}
        {/* <PatientCareCircle /> */}
        {/* <PatientEnableFaceID /> */}
        {/* <PatientEnableTouchID /> */}
        {/* <ProviderEnableTouchId /> */}
        {/* <ProviderEnableFaceId /> */}
        {/* <HeProgressiveBar /> */}
        {/* <ClinicalInformationSettings /> */}
        {/* <PatientAddRxDelivery /> */}
        {/* <PatientAddExistingProvider /> */}
        {/* <PatientAddPreviousFacility /> */}
        {/* <PatientSubscription /> */}
      </View>
    </>
  );
};

export default Manish;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
  },
  // container: {
  //     flex: 1,
  //     backgroundColor: "#FAFAFA",
  //     justifyContent: 'center',
  //     alignItems: 'center'
  // }
});
