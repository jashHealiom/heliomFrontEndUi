import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import He_TextInput from '../components/he_TextInput';
import MainButton from '../components/he_Button';
import images from "../assets/images/images";
import Dropdown from '../components/he_DropDown';
import RadioButton from '../components/he_RadioButton';
import Country_Code from '../constants/Country_Code.json';
const styles = require("../assets/css/Style");
const Login = () => {
    const [selectedOption, setSelectedOption] = useState({ "key": "Email", "text": "EMAIL" });
    const [selected, setSelected] = useState(undefined);
    const [userEmail, setuserEmail] = useState('')
    const [userPassword, setuserPassword] = useState('')
    const [userMoblieNo, setuserMoblieNo] = useState("")

    const options = [
        {
            key: 'Email',
            text: 'EMAIL',
        },
        {
            key: 'Moblie',
            text: 'MOBLIE',
        },
    ];
    const onSelect = (item) => {
        if (selectedOption && selectedOption.key === item.key) {
            setSelectedOption(null);
        } else {
            setSelectedOption(item);
        }
    };
    // useEffect(() => {
    //     onSelect(options[0])
    // }, [])
    return (
        <KeyboardAvoidingView enabled={true} style={styles.Container}>
            <View style={styles.MainView}>
                <Text style={styles.headText}>Log In</Text>
                <RadioButton
                    selectedOption={selectedOption}
                    onSelect={(item) => onSelect(item)}
                    options={options}
                    type={options.text}
                />
                {selectedOption.key === 'Email' ?
                    (<>
                        <View style={[styles.emailInputContainer, {}]}>
                            <Text style={styles.labelEmailTextLogin}>EMAIL</Text>
                            <He_TextInput
                                icon={true}
                                placeholder='Email'
                                value={userEmail}
                                onChangeText={(text) => setuserEmail(text)}
                                textContentType='emailAddress'
                                screenName={'login'}
                                style={[styles.inputView, {}]}
                                styles={styles.textInputStyle}
                                imageSrc={images.faceId}
                            />
                        </View>
                    </>
                    ) :
                    (
                        <>
                            <View style={{ marginTop: 20, }}>
                                <Text style={styles.labelEmailTextLogin}>MOBILE</Text>
                                <View style={styles.mobileInputContainer}>
                                    <Dropdown label="+1" data={Country_Code.country_code} onSelect={setSelected}
                                        buttonStyle={styles.buttonStyleCountryCode}
                                        overlay={styles.dropdownOverlayCountryCode}
                                        dropdown={styles.dropdownSingleSelectCountryCode} />
                                    <He_TextInput
                                        icon={true}
                                        placeholder='Moblie No'
                                        value={userMoblieNo}
                                        onChangeText={(text) => setuserMoblieNo(text)}
                                        textContentType='telephoneNumber'
                                        screenName={'login'}
                                        style={styles.inputView1}
                                        styles={styles.textInputStyle1}
                                    />
                                </View>
                            </View>
                        </>
                    )}
                <View style={styles.emailInputContainer}>
                    <Text style={styles.labelEmailTextLogin}>PASSWORD</Text>
                    <He_TextInput
                        icon={true}
                        placeholder='Password'
                        value={userPassword}
                        onChangeText={(text) => setuserPassword(text)}
                        textContentType='password'
                        screenName={'login'}
                        style={styles.inputView}
                        styles={styles.textInputStyle}
                        imageSrc={images.eye_opened}
                    />
                </View>
                <MainButton
                    name='Login'
                    buttonText={styles.buttonText}
                    styleButton={styles.commanButton}
                    onPress={() => navigation.navigate(console.log("Login"))} />
            </View>
            <View style={styles.moreOptionContainer}>
                <Text style={styles.moreOptionText}>No account yet?</Text>
                <Text onPress={() => ''} style={styles.OptionText}>
                    {" "}
                    Sign up now{" "}
                </Text>
                <Image
                    style={styles.loginSignInArrowImg}
                    source={images.arrowRight}
                />
            </View>
            <View style={styles.moreOptionContainer}>
                <Text style={styles.moreOptionText}>Forgot Password?</Text>
                <Text
                    onPress={() => ''}
                    style={styles.OptionText}
                >
                    {" "}
                    Click here{" "}
                </Text>
                <Image
                    style={styles.loginSignInArrowImg}
                    source={images.arrowRight}
                />
            </View>
            <View
                style={
                    styles.loginImageContainer
                }
            >
                <Image
                    style={styles.loginImage}
                    source={images.illustrationLeft}
                />
            </View>
        </KeyboardAvoidingView>

    )
}

export default Login



