import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CommanTextInput from '../components/CommonTextInput';
import MainButton from '../components/MainButton';
import Dropdown from '../components/DropDown';
import ArrayData from '../constants/ArrayData.json';
import language from '../constants/language.json';
import Country_Code from '../constants/Country_Code.json';

const styles = require("../assets/css/Style");
const SignUp = () => {
    const [selected, setSelected] = useState(undefined);
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.MainView}>
                    <Text style={styles.HeadText}>SignUp</Text>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.TitleText}>LANGUAGE</Text>
                        <Dropdown label="Select Item" data={language.language} onSelect={setSelected} />
                    </View>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.TitleText}>EMAIL</Text>
                        <CommanTextInput
                            name='Email'
                            SCreenName={'login'}
                            style={styles.InputView}
                            styles={styles.textInputSyle}
                        />
                    </View>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.TitleText}>LEGAL FIRST NAME</Text>
                        <CommanTextInput
                            name='LEGAL FIRST NAME'
                            screenName={'login'}
                            style={styles.InputView}
                            styles={styles.textInputStyle}
                        />
                    </View>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.TitleText}>MIDDLE NAME</Text>
                        <CommanTextInput
                            name='MIDDLE NAME'
                            screenName={'login'}
                            style={styles.InputView}
                            styles={styles.textInputStyle}
                        />
                    </View>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.TitleText}>LAST NAME</Text>
                        <CommanTextInput
                            name='LAST NAME'
                            screenName={'login'}
                            style={styles.InputView}
                            styles={styles.textInputStyle}
                        />
                    </View>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.TitleText}>NICK NAME</Text>
                        <CommanTextInput
                            name='NICK NAME'
                            screenName={'login'}
                            style={styles.InputView}
                            styles={styles.textInputStyle}
                        />
                    </View>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.TitleText}>GENDER</Text>
                        <Dropdown label="Select Item" data={ArrayData.gender} onSelect={setSelected} />
                    </View>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.TitleText}>MOBILE</Text>
                        <Dropdown label="Select Item" data={Country_Code.country_code} onSelect={setSelected} />
                    </View>
                    <MainButton
                        name='Signup'
                        ButtonText={styles.ButtonText}
                        styleButton={styles.CommanButton}
                        onPress={() => navigation.navigate('')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp
