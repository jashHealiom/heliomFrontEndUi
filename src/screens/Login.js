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
    const [selectedOption, setSelectedOption] = useState('Email');
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
    useEffect(() => {
        onSelect(options[0])
    }, [])
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
                                name='Email'
                                value={userEmail}
                                onChangeText={(text) => setuserEmail(text)}
                                textContentType='emailAddress'
                                screenName={'login'}
                                style={[styles.inputView, {}]}
                                styles={styles.textInputStyle}
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
                                        name='Moblie No'
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
                        name='PASSWORD'
                        value={userPassword}
                        onChangeText={(text) => setuserPassword(text)}
                        textContentType='password'
                        screenName={'login'}
                        style={styles.inputView}
                        styles={styles.textInputStyle}

                    />
                </View>
                <MainButton
                    name='Login'
                    buttonText={styles.buttonText}
                    styleButton={styles.commanButton}
                    onPress={() => navigation.navigate(console.log("Login"))} />


            </View>
            <View
                style={{
                    flexGrow: 1,
                    alignItems: "flex-end",
                    justifyContent: "center",
                    paddingVertical: 16,
                    flexDirection: "row",
                    marginBottom: 30,
                }}
            >
                <Image
                    style={{ width: "100%", height: "60%" }}
                    source={images.illustrationLeft}
                />
            </View>
        </KeyboardAvoidingView>

    )
}

export default Login



