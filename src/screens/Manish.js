import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import Login from './Login';
import SignUp from './Patient_SignUp';
import ProviderSignUp from './Provider_SignUp';
import DatePickerApp from '../components/he_DatePicker';

const options = [
    {
        key: 'Email',
        text: 'Email',
    },
    {
        key: 'Moblie',
        text: 'Moblie',
    },
];
const Manish = () => {

    return (
        <>
            <View style={styles.container}>
                {/* <Login /> */}
                {/* <SignUp /> */}
                <ProviderSignUp />
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