import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import Login from './Login';
import SignUp from './SignUp';
import RadioButton from '../components/RadioButton';
import Dropdown from '../components/DropDown';

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
    // const [selectedOption, setSelectedOption] = React.useState(null);
    // const onSelect = (item) => {
    //     if (selectedOption && selectedOption.key === item.key) {
    //         setSelectedOption(null);
    //     } else {
    //         setSelectedOption(item);
    //     }
    // };

    return (
        <>
            <View style={styles.container}>
                <Login />
                {/* <SignUp /> */}
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