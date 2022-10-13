import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import He_TextInput from '../components/he_TextInput';
import MainButton from '../components/he_Button';
import Dropdown from '../components/he_DropDown';
import MultiSelect from '../components/he_multiSelect';
import DatePickerApp from '../components/he_DatePicker';
import ArrayData from '../constants/ArrayData.json';
import language from '../constants/language.json';
import Country_Code from '../constants/Country_Code.json';

const styles = require("../assets/css/Style");
const ProviderSignUp = () => {
    const [selected, setSelected] = useState([]);
    return (

        <ScrollView>
            <View style={styles.MainView}>
                <Text style={styles.HeadText}>SignUp</Text>
                <View style={styles.EmailInputContainer}>
                    <Text style={styles.TitleText}>LANGUAGE</Text>
                    <MultiSelect label="Select Item" data={language.language} onSelect={(item) => setSelected(item)}
                        ButtonStyle={styles.ButtonStyle}
                        overlay={styles.DropDownoverlay}
                    />
                </View>
                <View style={styles.EmailInputContainer}>
                    <Text style={styles.TitleText}>EMAIL</Text>
                    <He_TextInput
                        name='Email'
                        SCreenName={'SignUp'}
                        style={styles.InputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.EmailInputContainer}>
                    <Text style={styles.TitleText}>LEGAL FIRST NAME</Text>
                    <He_TextInput
                        name='LEGAL FIRST NAME'
                        screenName={'SignUp'}
                        style={styles.InputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.EmailInputContainer}>
                    <Text style={styles.TitleText}>MIDDLE NAME</Text>
                    <He_TextInput
                        name='MIDDLE NAME'
                        screenName={'SignUp'}
                        style={styles.InputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.EmailInputContainer}>
                    <Text style={styles.TitleText}>LAST NAME</Text>
                    <He_TextInput
                        name='LAST NAME'
                        screenName={'SignUp'}
                        style={styles.InputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.EmailInputContainer}>
                    <Text style={styles.TitleText}>NICK NAME</Text>
                    <He_TextInput
                        name='NICK NAME'
                        screenName={'SignUp'}
                        style={styles.InputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.EmailInputContainer}>
                    <Text style={styles.TitleText}>GENDER</Text>
                    <Dropdown label="Select Item"
                        data={ArrayData.gender}
                        onSelect={setSelected}
                        ButtonStyle={styles.ButtonStyle}
                        overlay={styles.DropDownoverlay}
                        dropdown={styles.dropdownSingleSelect} />
                </View>
                <View style={styles.EmailInputContainer}>
                    <Text style={styles.TitleText}>NPI/Medical license identification number</Text>
                    <He_TextInput
                        name='11-Digit No.'
                        screenName={'SignUp'}
                        style={styles.InputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.EmailInputContainer}>
                    <Text style={styles.TitleText}>MOBLIE</Text>
                    <View style={styles.MobileInputContainer}>
                        <Dropdown label="+1" data={Country_Code.country_code} onSelect={setSelected}
                            ButtonStyle={styles.ButtonStyleCountry_Code}
                            overlay={styles.DropDownoverlayCountry_Code}
                            dropdown={styles.dropdownSingleSelectCountry_Code} />
                        <He_TextInput
                            name='Moblie No'
                            screenName={'SignUp'}
                            style={styles.InputView1}
                            styles={styles.textInputStyle1}
                        />
                    </View>
                </View>
                <MainButton
                    name='Next'
                    ButtonText={styles.Provider_ButtonText}
                    styleButton={styles.Provider_CommanButton}
                    onPress={() => console.log("Done")}
                />
            </View>
        </ScrollView>
    )
}

export default ProviderSignUp
