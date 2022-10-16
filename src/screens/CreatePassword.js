import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import He_TextInput from '../components/he_TextInput';
import MainButton from '../components/he_Button';
import images from '../assets/images/images';

const styles = require("../assets/css/Style");
const CreatePassword = () => {
    const [selected, setSelected] = useState([]);
    const [userPassword, setuserPassword] = useState('')
    const [userConfirmPassword, setuserConfirmPassword] = useState('')


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
                <Text style={styles.headText}>Create a password</Text>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>Password</Text>
                    <He_TextInput
                        placeholder='PASSWORD'
                        value={userPassword}
                        onChangeText={(text) => setuserPassword(text)}
                        screenName={'SignUp'}
                        style={styles.inputView}
                        styles={styles.textInputStyle}
                    />
                </View>
                <View style={styles.emailInputContainer}>
                    <Text style={styles.titleText}>Confirm Password</Text>
                    <He_TextInput
                        placeholder='CONFIRM PASSWORD'
                        value={userConfirmPassword}
                        onChangeText={(text) => setuserConfirmPassword(text)}
                        screenName={'SignUp'}
                        style={styles.inputView}
                        styles={styles.textInputStyle}

                    />
                </View>
                <View style={styles.passwordRequireInput}>
                    <Text>{'\u2022'}</Text>
                    <Text style={[styles.loginNotAccountText, { marginHorizontal: 7 }]}>
                        At least 8 characters
                    </Text>
                </View>

                <View style={styles.passwordRequireInput}>
                    <Text>{'\u2022'}</Text>
                    <Text style={[styles.loginNotAccountText, { marginHorizontal: 7 }]}>
                        At least 1 uppercase
                    </Text>
                </View>

                <View style={styles.passwordRequireInput}>
                    <Text>{'\u2022'}</Text>
                    <Text style={[styles.loginNotAccountText, { marginHorizontal: 7 }]}>
                        At least 1 special characters. The allowed special characters are
                        {' ~ ! @ # $ % ^ * - _ = + [ { ] } / ; : , . ?'}
                    </Text>
                </View>
                <MainButton
                    name='Create account'
                    buttonText={styles.buttonText}
                    styleButton={styles.commanButton}
                    onPress={() => console.log("Done")}
                />
            </View>
        </ScrollView>
    )
}

export default CreatePassword
