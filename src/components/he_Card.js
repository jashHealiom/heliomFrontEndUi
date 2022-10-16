import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Card = (props) => {
    const { style } = props
    return (
        <View style={[{ width: '100%', backgroundColor: '#ffffff', paddingVertical: 15, paddingHorizontal: 12, borderRadius: 10 }, style]}>
            {props.children}
            {/* <Text>Card components</Text> */}
        </View>
    )
}

export default Card;