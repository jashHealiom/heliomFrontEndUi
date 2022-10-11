import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import MainButton from '../components/MainButton'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#E5E5E5", justifyContent: "space-evenly", alignItems: "center", }}>
            <MainButton name='Jash' onPress={() => navigation.navigate('jashScreen')} />
            <MainButton name='Manish' onPress={() => navigation.navigate('ManishScreen')} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
