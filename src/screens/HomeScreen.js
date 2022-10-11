import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import MainButton from '../components/MainButton'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#E5E5E5", justifyContent: "space-evenly", alignItems: "center", }}>
            <MainButton name='Jash'
                ButtonText={styles.ButtonText}
                styleButton={styles.Button}
                onPress={() => navigation.navigate('jashScreen')} />
            <MainButton name='Manish'
                ButtonText={styles.ButtonText}
                styleButton={styles.Button}
                onPress={() => navigation.navigate('ManishScreen')} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    Button: {
        backgroundColor: "#24DAC6",
        height: 40, width: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    ButtonText: {
        fontSize: 20,
        fontWeight: '600'
    }
})
