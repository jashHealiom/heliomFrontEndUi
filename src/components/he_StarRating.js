import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const StarRating = (props) => {
    const { style } = props
    return (
        <View style={[{ width: '100%' }, style]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
            </View>
        </View>
    )
}

export default StarRating;