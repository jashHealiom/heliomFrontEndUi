import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Login from './Login';

const Manish = () => {
    return (
        <>
            <View style={styles.container}>
                <Login />
            </View>
        </>
    )
}

export default Manish;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
        flex: 1,
    }

})