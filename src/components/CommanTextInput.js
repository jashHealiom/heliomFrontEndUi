import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CommanTextInput = (props) => {
    return (
        <View style={props.style}>
            <TextInput
                placeholder={props.name}
                style={props.styles}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                placeholderTextColor="#98989C"
                onChangeText={props.onChangeText}
                value={props.value}
            />
        </View>
    )
}

export default CommanTextInput
const styles = StyleSheet.create({


})