import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
const styles = require("../assets/css/ComponentStyle");
export default RadioButton = ({ options, selectedOption, onSelect }) => {
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
                        <Text style={styles.RadioButtonItem}>{item.text}</Text>
                    </View>
                );
            })}
        </View>
    )
}


