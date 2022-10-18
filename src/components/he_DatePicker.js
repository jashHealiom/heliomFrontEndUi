import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
const DatePickerApp = props => {
  const {onChange, selectedDate, onPress, value, datePicker} = props;
  const {
    datePickerContainer,
    datePickerStyle,
    datePickerTextStyle,
    touchableSizeIncreaseStyle,
  } = styleSheet;
  //   const [datePicker, setDatePicker] = useState(false);
  //   const [date, setDate] = useState(new Date());
  //   const [selectedDate, setselectedDate] = useState('');
  //   const showDatePicker = () => {
  //     setDatePicker(true);
  //   };
  //   const formatDate = date => {
  //     var month = '' + (date.getMonth() + 1),
  //       day = '' + date.getDate(),
  //       year = date.getFullYear();
  //     if (month.length < 2) month = '0' + month;
  //     if (day.length < 2) day = '0' + day;

  //     return [month, day, year].join('/');
  //   };

  return (
    // <SafeAreaView>
    <View style={datePickerContainer}>
      {datePicker && (
        <DateTimePicker
          value={value}
          mode={'date'}
          dateFormat={'day month year'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          //   onChange={(event, selectedDate) => {
          //     setselectedDate(formatDate(selectedDate));
          //     setDatePicker(false);
          //   }}
          style={datePickerStyle}
        />
      )}
      <TextInput
        value={selectedDate}
        // onChangeText={text => setselectedDate(text)}
        placeholder="MM/DD/YYYY"
        style={datePickerTextStyle}
        editable={false}></TextInput>

      {/* {!false && ( */}
      <View style={{margin: 10}}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.7}
          style={touchableSizeIncreaseStyle}>
          <Icon name="calendar-outline" color="#24DAC6" size={20} />
        </TouchableOpacity>
      </View>
      {/* //   )} */}
    </View>
    // </SafeAreaView>
  );
};

const styleSheet = StyleSheet.create({
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    // width: "100%",
    borderBottomWidth: 1,
    backgroundColor: '#FAFAFA',
    height: 50,
  },

  datePickerTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    alignSelf: 'center',
    color: 'black',
  },

  // Style for iOS ONLY...
  datePickerStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
  touchableSizeIncreaseStyle: {
    //   backgroundColor: 'black',
    padding: 10,
    position: 'absolute',
    right: -8,
    bottom: -28,
  },
});

export default DatePickerApp;
