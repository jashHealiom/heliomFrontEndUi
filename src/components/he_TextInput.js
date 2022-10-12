import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CommanTextInput = (props) => {
    // screen type
    // image
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
            {/* {props.screenName == 'login' ?(<View>
                <Text>AGFDJHAGDJKJAS</Text>
                //login icon
            </View>): //tick icon } */}
        </View>
    )
}

export default CommanTextInput
