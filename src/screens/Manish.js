import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';

import PatientEnableFaceID from './PatientEnableFaceID';
import PatientEnableTouchID from './PatientEnableTouchID';
import ProviderEnableTouchId from './ProviderEnableTouchId';
import ProviderEnableFaceId from './ProviderEnableFaceId';
import HeProgressiveBar from '../components/HeProgressiveBar';
const Manish = () => {
  return (
    <>
      <View style={styles.container}>
        {/* <PatientEnableFaceID /> */}
        {/* <PatientEnableTouchID /> */}
        {/* <ProviderEnableTouchId /> */}
        {/* <ProviderEnableFaceId /> */}
        <HeProgressiveBar />
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
