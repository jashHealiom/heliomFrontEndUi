import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import He_TextInput from '../components/he_TextInput';
import MainButton from '../components/he_Button';
import Dropdown from '../components/he_DropDown';
import MultiSelect from '../components/he_multiSelect';
import ArrayData from '../constants/ArrayData.json';
import language from '../constants/language.json';
import Country_Code from '../constants/Country_Code.json';

const styles = require("../assets/css/Style");
const SignUp = () => {
    const [selected, setSelected] = useState([]);
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.MainView}>
                    <Text style={styles.HeadText}>SignUp</Text>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.TitleText}>LANGUAGE</Text>
                        <MultiSelect label="Select Item" data={language.language} onSelect={setSelected}
                            ButtonStyle={styles.ButtonStyle}
                            overlay={styles.DropDownoverlay}
                        />
                    </View>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.TitleText}>EMAIL</Text>
                        <He_TextInput
                            name='Email'
                            SCreenName={'login'}
                            style={styles.InputView}
                            styles={styles.textInputSyle}
                        />
                    </View>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.TitleText}>LEGAL FIRST NAME</Text>
                        <He_TextInput
                            name='LEGAL FIRST NAME'
                            screenName={'login'}
                            style={styles.InputView}
                            styles={styles.textInputStyle}
                        />
                    </View>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.TitleText}>MIDDLE NAME</Text>
                        <He_TextInput
                            name='MIDDLE NAME'
                            screenName={'login'}
                            style={styles.InputView}
                            styles={styles.textInputStyle}
                        />
                    </View>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.TitleText}>LAST NAME</Text>
                        <He_TextInput
                            name='LAST NAME'
                            screenName={'login'}
                            style={styles.InputView}
                            styles={styles.textInputStyle}
                        />
                    </View>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.TitleText}>NICK NAME</Text>
                        <He_TextInput
                            name='NICK NAME'
                            screenName={'login'}
                            style={styles.InputView}
                            styles={styles.textInputStyle}
                        />
                    </View>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.TitleText}>GENDER</Text>
                        <Dropdown label="Select Item" data={ArrayData.gender} onSelect={setSelected} ButtonStyle={styles.ButtonStyle} overlay={styles.DropDownoverlay} />
                    </View>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.TitleText}>MOBLIE</Text>
                        <View style={styles.MobileInputContainer}>
                            <Dropdown label="+1" data={Country_Code.country_code} onSelect={setSelected}
                                ButtonStyle={styles.ButtonStyleCountry_Code}
                                overlay={styles.DropDownoverlayCountry_Code} />
                            <He_TextInput
                                name='Moblie No'
                                screenName={'login'}
                                style={styles.InputView1}
                                styles={styles.textInputStyle1}
                            />
                        </View>
                    </View>
                    <MainButton
                        name='Signup'
                        ButtonText={styles.ButtonText}
                        styleButton={styles.CommanButton}
                        onPress={() => console.log("Done")}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp
