import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import He_TextInput from '../components/he_TextInput';
import MainButton from '../components/he_Button';
import images from '../assets/images/images';
import He_Loader from '../components/he_Loader';
const styles = require("../assets/css/Style");
const OtpVerfication = () => {

    return (
        <ScrollView>
            <He_Loader color="#24DAC6" />
            <View style={styles.MainView}>
                <View style={styles.backArrowContainer}>
                    <TouchableOpacity onPress={() => console.log("Back")}>
                        <Image
                            style={styles.backArrowImage}
                            source={images.leftArrow1}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <Text style={styles.headText}>Verify Phone</Text>
                <Text
                // style={styles.titleVryPhoneText}
                >
                    A 6 digit code was sent to
                </Text>
                <View style={styles.emailInputContainer}>
                    <View>
                        <Text style={{
                            textAlign: "left",
                            color: "black",
                            fontFamily: "Rubik-Regular",
                            fontSize: 16,
                            marginTop: 5,
                        }}>
                            Didn’t receive code?{' '}
                            <Text
                                style={{
                                    color: "#24DAC6",
                                    fontFamily: "Rubik-Regular",
                                    fontSize: 14,
                                }}
                                onPress={() => this.reSendOtpFun()}
                            >
                                {' '}
                                Request again.
                            </Text>
                        </Text>
                    </View>
                    <MainButton
                        name='Verify and continue'
                        buttonText={styles.buttonText}
                        styleButton={styles.commanButton}
                        onPress={() => console.log("Done")}
                    />
                </View>
            </View>
        </ScrollView >
    )
}

export default OtpVerfication
