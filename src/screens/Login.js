import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CommanTextInput from '../components/CommonTextInput';
import MainButton from '../components/MainButton';

const Login = () => {
    return (
        <View style={styles.MainView}>
            <Text style={styles.loginHeadText}>Log In</Text>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.labelEmailTextLogin}>EMAIL</Text>
                <CommanTextInput
                    name='Email'
                    style={styles.InputView}
                    styles={styles.textInputSyle} />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.labelEmailTextLogin}>PASSWORD</Text>
                <CommanTextInput
                    name='Password'
                    screenName={'login'}
                    style={styles.InputView}
                    styles={styles.textInputStyle} />
            </View>
            <MainButton
                name='Login'
                ButtonText={styles.ButtonText}
                styleButton={styles.Button}
                onPress={() => navigation.navigate('')} />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    loginHeadText: {
        textAlign: "left",
        color: "black",
        fontFamily: "Rubik-Light",
        fontSize: 30,
    },
    MainView: {
        flex: 1,
        marginTop: 60,
        backgroundColor: "#FAFAFA",
        // justifyContent: "space-evenly",
        marginHorizontal: 20
    },
    textInputStyle: {
        height: 40,
        width: "100%",
        fontSize: 16,
        backgroundColor: "#fff"

    },
    InputView: {
        borderBottomWidth: 1,
        borderRadius: 5,
        borderColor: "#000"
    },
    labelEmailTextLogin: {
        textAlign: "left",
        color: "black",
        fontFamily: "Rubik-Regular",
        fontSize: 12,
    },
    Button: {
        backgroundColor: "#24DAC6",
        height: 40, width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
        borderRadius: 2,
        backgroundColor: "#24DAC6",

    },
    ButtonText: {
        fontFamily: "Rubik-Regular",
        fontSize: 14,
        fontWeight: "300",
        color: "#1B1E29",
        textAlign: "center",
    }
})