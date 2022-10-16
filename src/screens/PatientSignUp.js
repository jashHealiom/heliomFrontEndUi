import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import He_TextInput from '../components/he_TextInput';
import MainButton from '../components/he_Button';
import Dropdown from '../components/he_DropDown';
import MultiSelect from '../components/he_multiSelect';
import DatePickerApp from '../components/he_DatePicker';
import Icon from 'react-native-vector-icons/Ionicons';
//Import constants
import ArrayData from '../constants/ArrayData.json';
import language from '../constants/language.json';
import Country_Code from '../constants/Country_Code.json';
import images from '../assets/images/images';

const styles = require("../assets/css/Style");
const SignUp = () => {
    //states
    const [selected, setSelected] = useState([]);
    const [userEmail, setuserEmail] = useState('')
    const [userFirstName, setuserFirstName] = useState('')
    const [userMiddleName, setuserMiddleName] = useState('')
    const [userLastName, setuserLastName] = useState('')
    const [userNickName, setuserNickName] = useState('')
    const [userMoblieNo, setuserMoblieNo] = useState('')
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const mobileRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return (
        <ScrollView>
            <View style={styles.mainView}>
                <View style={styles.backArrowContainer}>
                    <TouchableOpacity onPress={() => console.log("Back")}>
                        <Image
                            style={styles.backArrowImage}
                            source={images.leftArrow1}
                        ></Image>
                    </TouchableOpacity>
                    <Text style={styles.backArrowText}>Already a member?
                        <Text style={styles.loginSignUpText} >
                            {' '}
                             Login
                        </Text>
                    </Text>
                </View>
                <Text style={styles.signUpHeadText}>SignUp</Text>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>LANGUAGE</Text>
                    <MultiSelect label="Select Item" data={language.language}
                        onSelect={(item) => setSelected(item)}
                        buttonStyle={styles.buttonDropdownStyle}
                        overlay={styles.dropDownoverlay}
                    />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>EMAIL</Text>
                    <He_TextInput
                        icon={emailRegex.test(userEmail) ? true : false}
                        imageSrc={images.check}
                        placeholder='Email'
                        value={userEmail}
                        keyboardType={"email-address"}
                        onChangeText={(text) => setuserEmail(text)}
                        textContentType='emailAddress'
                        screenName={'signUp'}
                        style={[styles.inputView, {}]}
                        styles={styles.textInputStyle}

                    />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>LEGAL FIRST NAME</Text>
                    <He_TextInput
                        icon={userFirstName.length > 0 ? true : false}
                        imageSrc={images.check}
                        placeholder='LEGAL FIRST NAME'
                        value={userFirstName}
                        onChangeText={(text) => setuserFirstName(text)}
                        screenName={'signUp'}
                        style={styles.inputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>MIDDLE NAME</Text>
                    <He_TextInput
                        icon={userMiddleName.length > 0 ? true : false}
                        imageSrc={images.check}
                        placeholder='MIDDLE NAME'
                        screenName={'signUp'}
                        value={userMiddleName}
                        onChangeText={(text) => setuserMiddleName(text)}
                        style={styles.inputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>LAST NAME</Text>
                    <He_TextInput
                        icon={userLastName.length > 0 ? true : false}
                        imageSrc={images.check}
                        placeholder='LAST NAME'
                        screenName={'signUp'}
                        value={userLastName}
                        onChangeText={(text) => setuserLastName(text)}
                        style={styles.inputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>NICK NAME</Text>
                    <He_TextInput
                        icon={userNickName.length > 0 ? true : false}
                        imageSrc={images.check}
                        placeholder='NICK NAME'
                        screenName={'signUp'}
                        value={userNickName}
                        onChangeText={(text) => setuserNickName(text)}
                        style={styles.inputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>GENDER</Text>
                    <Dropdown label="Select Item"
                        data={ArrayData.gender}
                        onSelect={setSelected}
                        buttonStyle={styles.buttonDropdownStyle}
                        overlay={styles.dropDownoverlay}
                        dropdown={styles.dropdownSingleSelect}
                    />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>DATE OF BIRTH</Text>
                    <DatePickerApp />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>MOBLIE</Text>
                    <View style={styles.mobileInputContainer}>
                        <Dropdown label="+1" data={Country_Code.country_code} onSelect={setSelected}
                            buttonStyle={styles.buttonStyleCountryCode}
                            overlay={styles.dropdownOverlayCountryCode}
                            dropdown={styles.dropdownSingleSelectCountryCode} />
                        <He_TextInput
                            icon={mobileRegex.test(userMoblieNo) ? true : false}
                            imageSrc={images.check}
                            placeholder='Moblie No'
                            screenName={'signUp'}
                            value={userMoblieNo}
                            keyboardType={"numeric"}
                            onChangeText={(text) => setuserMoblieNo(text)}
                            style={styles.inputView1}
                            styles={styles.textInputStyle1}
                        />
                    </View>
                </View>
                <MainButton
                    name='Signup'
                    buttonText={styles.buttonText}
                    styleButton={styles.commanButton}
                    onPress={() => console.log("Done")}
                />
            </View>
        </ScrollView>
    )
}

export default SignUp