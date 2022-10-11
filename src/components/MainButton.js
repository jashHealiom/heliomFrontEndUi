import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const MainButton = (props) => {

    return (
        <View style={{}}>
            <TouchableOpacity style={props.styleButton} onPress={props.onPress} >
                <Text style={props.ButtonText}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainButton

