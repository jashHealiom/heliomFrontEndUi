import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
// const styles = require("../assets/css/ComponentStyle");
const RadioButton = ({ options, selectedOption, onSelect }) => {
    return (
        <View style={styles.RadioContainer}>
            {options.map((item) => {
                return (
                    <View key={item.key} style={styles.RadiobuttonContainer}>

                        <TouchableOpacity
                            style={styles.Radiocircle}
                            onPress={() => {
                                onSelect(item);
                            }}>
                            {selectedOption && selectedOption.key === item.key && (
                                <View style={styles.RadiocheckedCircle} />
                            )}
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 8 }}>{item.text}</Text>
                    </View>
                );
            })}
        </View>
    )
}

export default RadioButton

const styles = StyleSheet.create({
    RadioContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    RadiobuttonContainer: {
        width: "50%", height: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    Radiocircle: {
        height: 18,
        width: 18,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },

    RadiocheckedCircle: {
        width: 13,
        height: 13,
        borderRadius: 7,
        backgroundColor: '#24DAC6',
    },
});