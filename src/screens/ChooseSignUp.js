import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from '../assets/images/images';


const styles = require("../assets/css/Style");

const ChooseSignUp = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View
                style={styles.backArrowContainerChooseSignUp}>
                <TouchableOpacity onPress={() => console.log("Back")}>
                    <Image style={styles.leftArrow1} source={images.leftArrow1}></Image>
                </TouchableOpacity>
            </View>
            <Text style={styles.textChooseTitle}>Choose your role</Text>

            <TouchableOpacity
                style={styles.choosePatientContainer}
                onPress={() => console.log("Patient")}
            >
                <Image
                    style={styles.roleImage}
                    source={images.roleChoosePatient}
                />
                <Text style={styles.chosseSelectText}>
                    I'm a Patient or{'\n'}Care Circle Member
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.chooseProviderContainer}
                onPress={() => console.log("Provider")}
            >
                <Image
                    style={styles.roleImage}
                    source={images.roleChooseProvider}
                />
                <Text style={styles.chosseSelectText}>I'm a Provider</Text>
            </TouchableOpacity>

            <View
                style={{
                    flexGrow: 1,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    paddingVertical: 16,
                    flexDirection: 'row',
                    marginBottom: 30,
                }}
            >
                <Image
                    style={{ width: '100%', height: '95%', }}
                    source={images.illustrationLeft}
                />
            </View>
        </View >
    )
}

export default ChooseSignUp