import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import He_TextInput from '../components/he_TextInput';
import MainButton from '../components/he_Button';
import Dropdown from '../components/he_DropDown';
import MultiSelect from '../components/he_multiSelect';
import He_Loader from '../components/he_Loader';
import ArrayData from '../constants/ArrayData.json';
import language from '../constants/language.json';
import Country_Code from '../constants/Country_Code.json';
import images from '../assets/images/images';

const styles = require("../assets/css/Style");
const ProviderSignUp = () => {
    const [selected, setSelected] = useState([]);
    const [userEmail, setuserEmail] = useState('')
    const [userFirstName, setuserFirstName] = useState('')
    const [userMiddleName, setuserMiddleName] = useState('')
    const [userLastName, setuserLastName] = useState('')
    const [userNickName, setuserNickName] = useState('')
    const [userMoblieNo, setuserMoblieNo] = useState('')
    return (

        <ScrollView>
            <He_Loader color="#0086C3" />
            <View style={styles.MainView}>
                <View style={styles.backArrowContainer}>
                    <TouchableOpacity onPress={() => console.log("Back")}>
                        <Image
                            style={styles.backArrowImage}
                            source={images.leftArrow1}
                        ></Image>
                    </TouchableOpacity>
                    <Text style={styles.backArrowText}>Already a member? Log in</Text>
                </View>
                <Text style={styles.headText}>SignUp</Text>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>LANGUAGE</Text>
                    <MultiSelect label="Select Item" data={language.language} onSelect={(item) => setSelected(item)}
                        buttonStyle={styles.buttonStyle}
                        overlay={styles.dropDownoverlay}
                    />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>EMAIL</Text>
                    <He_TextInput
                        placeholder='Email'
                        value={userEmail}
                        onChangeText={(text) => setuserEmail(text)}
                        SCreenName={'SignUp'}
                        style={styles.inputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>LEGAL FIRST NAME</Text>
                    <He_TextInput
                        placeholder='LEGAL FIRST NAME'
                        value={userFirstName}
                        onChangeText={(text) => setuserFirstName(text)}
                        screenName={'SignUp'}
                        style={styles.inputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>MIDDLE NAME</Text>
                    <He_TextInput
                        placeholder='MIDDLE NAME'
                        value={userMiddleName}
                        onChangeText={(text) => setuserMiddleName(text)}
                        screenName={'SignUp'}
                        style={styles.inputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>LAST NAME</Text>
                    <He_TextInput
                        placeholder='LAST NAME'
                        value={userLastName}
                        onChangeText={(text) => setuserLastName(text)}
                        screenName={'SignUp'}
                        style={styles.inputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>NICK NAME</Text>
                    <He_TextInput
                        placeholder='NICK NAME'
                        value={userNickName}
                        onChangeText={(text) => setuserNickName(text)}
                        screenName={'SignUp'}
                        style={styles.inputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>GENDER</Text>
                    <Dropdown label="Select Item"
                        data={ArrayData.gender}
                        onSelect={setSelected}
                        buttonStyle={styles.buttonStyle}
                        overlay={styles.dropDownoverlay}
                        dropdown={styles.dropdownSingleSelect} />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>NPI/Medical license identification number</Text>
                    <He_TextInput
                        placeholder='11-Digit No.'
                        screenName={'SignUp'}
                        style={styles.inputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>MOBLIE</Text>
                    <View style={styles.mobileInputContainer}>
                        <Dropdown label="+1" data={Country_Code.country_code} onSelect={setSelected}
                            buttonStyle={styles.buttonStyleCountryCode}
                            overlay={styles.dropdownOverlayCountryCode}
                            dropdown={styles.dropdownSingleSelectCountryCode} />
                        <He_TextInput
                            placeholder='Moblie No'
                            value={userMoblieNo}
                            onChangeText={(text) => setuserMoblieNo(text)}
                            screenName={'SignUp'}
                            style={styles.inputView1}
                            styles={styles.textInputStyle1}
                        />
                    </View>
                </View>
                <MainButton
                    name='Next'
                    buttonText={styles.providerButtonText}
                    styleButton={styles.providerCommanButton}
                    onPress={() => console.log("Done")}
                />
            </View>
        </ScrollView >
    )
}

export default ProviderSignUp
