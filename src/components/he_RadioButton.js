import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
const styles = require("../assets/css/ComponentStyle");
export default RadioButton = ({ options, selectedOption, onSelect }) => {
    return (
        <View style={styles.radioContainer}>
            {options.map((item) => {
                return (
                    <View key={item.key} style={styles.radioButtonContainer}>

                        <TouchableOpacity
                            style={styles.radiocircle}
                            onPress={() => {
                                onSelect(item);
                            }}>
                            {selectedOption && selectedOption.key === item.key && (
                                <View style={styles.radiocheckedCircle} />
                            )}
                        </TouchableOpacity>
                        <Text style={styles.radioButtonItem}>{item.text}</Text>
                    </View>
                );
            })}
        </View>
    )
}


