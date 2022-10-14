import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import He_TextInput from '../components/he_TextInput';
import MainButton from '../components/he_Button';
import images from '../assets/images/images';

const styles = require("../assets/css/Style");
const OtpVerfication = () => {
    const [selected, setSelected] = useState([]);
    return (

        <ScrollView>
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
                    {/* <Text style={styles.titleText}>Phone number Verification</Text> */}
                    <He_TextInput
                        name='Phone number Verification'
                        screenName={'SignUp'}
                        style={styles.inputView}
                        styles={styles.textInputStyle}
                    />
                </View>
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
        </ScrollView>
    )
}

export default OtpVerfication
