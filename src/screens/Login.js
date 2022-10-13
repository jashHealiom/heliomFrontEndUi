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
    const [Email, setEmail] = useState('')
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
                <Text style={styles.HeadText}>Log In</Text>
                <RadioButton
                    selectedOption={selectedOption}
                    onSelect={(item) => onSelect(item)}
                    options={options}
                    type={options.text}
                />
                {selectedOption.key === 'Email' ?
                    (<>
                        <View style={[styles.EmailInputContainer, {}]}>
                            <Text style={styles.labelEmailTextLogin}>EMAIL</Text>
                            <He_TextInput
                                name='Email'
                                textContentType='emailAddress'
                                screenName={'login'}
                                style={[styles.InputView, {}]}
                                styles={styles.textInputStyle}
                            />
                        </View>
                    </>
                    ) :
                    (
                        <>
                            <View style={{ marginTop: 20, }}>
                                <Text style={styles.labelEmailTextLogin}>MOBILE</Text>
                                <View style={styles.MobileInputContainer}>
                                    <Dropdown label="+1" data={Country_Code.country_code} onSelect={setSelected}
                                        ButtonStyle={styles.ButtonStyleCountry_Code}
                                        overlay={styles.DropDownoverlayCountry_Code}
                                        dropdown={styles.dropdownSingleSelectCountry_Code} />
                                    <He_TextInput
                                        name='Moblie No'
                                        textContentType='telephoneNumber'
                                        screenName={'login'}
                                        style={styles.InputView1}
                                        styles={styles.textInputStyle1}
                                    />
                                </View>
                            </View>
                        </>
                    )}
                <View style={styles.EmailInputContainer}>
                    <Text style={styles.labelEmailTextLogin}>PASSWORD</Text>
                    <He_TextInput
                        name='PASSWORD'
                        textContentType='password'
                        screenName={'login'}
                        style={styles.InputView}
                        styles={styles.textInputStyle}

                    />
                </View>
                <MainButton
                    name='Login'
                    ButtonText={styles.ButtonText}
                    styleButton={styles.CommanButton}
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



