import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import images from '../assets/images/images';
import MainButton from '../components/he_Button'

const styles = require("../assets/css/Style");
const SplashScreen = () => {
    return (
        <View style={styles.SplashContainer}>
            <Image style={styles.splashScreenLogo} source={images.logo} />
            <View style={[styles.welcomeSignupTextCont, { height: 120 }]}>
                <Image
                    style={{ width: '100%', height: 190 }}
                    source={images.illustrationLeft}
                />
            </View>
        </View>
    )
}

export default SplashScreen