import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import Login from './Login';
import SignUp from './PatientSignUp';
import OtpVerfication from './otpVerfication'
import ProviderSignUp from './ProviderSignUp';
import DatePickerApp from '../components/he_DatePicker';
import CreatePassword from './CreatePassword';
import ChooseSignUp from './ChooseSignUp';
import Welcome from './Welcome';
import SplashScreen from './SplashScreen';

const Manish = () => {

    return (
        <>
            <View style={styles.container}>
                {/* <Welcome /> */}
                <Login />
                {/* <SignUp /> */}
                {/* <SplashScreen /> */}
                {/* <OtpVerfication /> */}
                {/* <ChooseSignUp /> */}
                {/* <ProviderSignUp /> */}
            </View>
        </>
    )
}

export default Manish;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
        flex: 1,
    }
    // container: {
    //     flex: 1,
    //     backgroundColor: "#FAFAFA",
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // }
})