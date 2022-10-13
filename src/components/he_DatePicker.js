import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
export default function App() {
    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const [selectedDate, setselectedDate] = useState("")
    function showDatePicker() {
        setDatePicker(true);
    };
    function formatDate(date) {
        var month = '' + (date.getMonth() + 1),
            day = '' + date.getDate(),
            year = date.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [month, day, year].join('/');
    }

    return (
        <SafeAreaView >
            <View style={styleSheet.MainContainer}>

                {datePicker && (
                    <DateTimePicker
                        value={date}
                        mode={'date'}
                        dateFormat={"day month year"}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={true}
                        // onChange={onDateSelected}
                        onChange={(event, selectedDate) => {
                            setselectedDate(formatDate(selectedDate))
                            setDatePicker(false)
                        }}
                        style={styleSheet.datePicker}
                    />
                )}
                <TextInput value={selectedDate}
                    onChangeText={(text) => setselectedDate(text)}
                    placeholder="DATE OF BIRTH" style={styleSheet.text}>
                </TextInput>


                {!datePicker && (
                    <View style={{ margin: 10 }}>
                        <TouchableOpacity onPress={showDatePicker} >
                            <Icon name="calendar-outline" color="#24DAC6" size={20} />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </SafeAreaView >
    );
}

const styleSheet = StyleSheet.create({

    MainContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: 'white',
        // width: "100%",
        borderBottomWidth: 1,
        backgroundColor: "#FAFAFA",
        height: 50,

    },

    text: {
        fontSize: 14, fontWeight: '400', alignSelf: 'center'
    },

    // Style for iOS ONLY...
    datePicker: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
    },

});