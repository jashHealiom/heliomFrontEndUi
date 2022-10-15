import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import He_TextInput from '../components/he_TextInput';
import MainButton from '../components/he_Button';
import images from '../assets/images/images';
import He_Loader from '../components/he_Loader';
const styles = require("../assets/css/Style");
const OtpVerfication = () => {
    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');
    const [otp5, setOtp5] = useState('');
    const [otp6, setOtp6] = useState('');
    const ref_input1 = useRef();
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();
    const ref_input5 = useRef();
    const ref_input6 = useRef();

    const settingOtp = (x,index) =>{
        if(index==0){
            setOtp1(x.slice(-1))
        }if(index==1){
            setOtp2(x.slice(-1))
        }if(index==2){
            setOtp3(x.slice(-1))
        }if(index==3){
            setOtp4(x.slice(-1))
        }if(index==4){
            setOtp5(x.slice(-1))
        }if(index==5){
            setOtp6(x.slice(-1))
        }
        if(index=0){
            ref_input2.focus()
        }
    }
    return (
        <ScrollView>
            {/* <He_Loader color="#24DAC6" /> */}
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
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 20, marginTop: 10}}>
                    <He_TextInput
                    // name='Otp'
                    ref={(input)=>{ref_input1 = input;}}
                    keyboardType={'numeric'}
                    //caretHidden={true}
                    value={otp1}
                    onChangeText={(x)=>{settingOtp(x,0);}}
                    screenName={'login'}
                    style={[styles.inputView, {backgroundColor: '#ffffff', width: '10%'}]}
                    styles={{backGroundColor: '#ffffff'}}
                    />

                    <He_TextInput
                    onChangeText={(x)=>{settingOtp(x,1)}}
                    //name='Otp'
                    keyboardType={'numeric'}
                    //caretHidden={true}
                    value={otp2}
                    screenName={'login'}
                    style={[styles.inputView, {backgroundColor: '#ffffff', width: '10%'}]}
                    // styles={styles.textInputStyle}
                    onKeyPress={({ nativeEvent }) => {
                        if (nativeEvent.key === 'Backspace') {
                            ref_input1.focus();
                        }}}
                    ref={(input)=>{ref_input2 = input; console.log('this is ref', input)}}
                    />   


                    <He_TextInput
                    onChangeText={(x)=>{settingOtp(x,2)}}
                    //name='Otp'
                    value={otp3}
                    keyboardType={'numeric'}
                    //caretHidden={true}
                    screenName={'login'}
                    style={[styles.inputView, {backgroundColor: '#ffffff', width: '10%'}]}
                    // styles={styles.textInputStyle}
                    ref={(input)=>{ref_input3 = input;}}
                    />   


                    <He_TextInput
                    onChangeText={(x)=>{settingOtp(x,3)}}
                    //caretHidden={true}
                    //name='Otp'
                    value={otp4}
                    keyboardType={'numeric'}
                    screenName={'login'}
                    style={[styles.inputView, {backgroundColor: '#ffffff', width: '10%'}]}
                    // styles={styles.textInputStyle}
                    ref={(input)=>{ref_input4 = input;}}
                    />


                    <He_TextInput
                    onChangeText={(x)=>{settingOtp(x,4)}}
                    //name='Otp'
                    value={otp5}
                    keyboardType={'numeric'}
                    //caretHidden={true}
                    screenName={'login'}
                    style={[styles.inputView, {backgroundColor: '#ffffff', width: '10%'}]}
                    // styles={styles.textInputStyle}
                    ref={(input)=>{ref_input5 = input;}}
                    />   


                    <He_TextInput
                    ref={(input)=>{ref_input6 = input;}}
                    onChangeText={(x)=>{settingOtp(x,5)}}
                    // name='Otp'
                    value={otp6}
                    keyboardType={'numeric'}
                    //caretHidden={true}
                    screenName={'login'}
                    style={[styles.inputView, {backgroundColor: '#ffffff', width: '10%'}]}
                    // styles={styles.textInputStyle}
                    />             
                </View>
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
