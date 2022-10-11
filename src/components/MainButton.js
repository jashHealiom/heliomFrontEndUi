import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const MainButton = (props) => {

    return (
        <View style={{}}>
            <TouchableOpacity style={styles.Button} onPress={props.onPress} >
                <Text style={styles.Text}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainButton

const styles = StyleSheet.create({
    Button: {
        backgroundColor: "#24DAC6",
        height: 40, width: 100,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,

    },
    Text: {
        fontSize: 20,
        fontWeight: '800'
    }
})