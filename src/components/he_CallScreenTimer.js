import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const CallScreenTimer = props => {
  const [time, setTime] = useState(59);
  const timerRef = useRef(time);
  const {style} = props;
//   const timerSetting = val => {
//     if (val != 0) {
//       setTimeout(() => {
//         setTimer(val - 1);
//         timerSetting(val - 1);
//       }, 1000);
//     }
//   };
//   useEffect(() => {
//     timerSetting(time);
//   });
  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <View
      style={[
        {
          maxWidth: '40%',
          backgroundColor: '#ffffff',
          paddingVertical: 5,
          paddingHorizontal: 8,
          borderRadius: 50,
          borderColor: '#0086C3',
          borderWidth: 1,
        },
        style,
      ]}>
      <View style={{alignItems: 'center'}}>
        <Text style={{color:'#0086C3', fontSize: 12}}>VIDEO STARTS IN 00:{time.toString().length == 1 ? <Text>0{time}</Text>: <Text>{time}</Text>}</Text>
      </View>
    </View>
  );
};

export default CallScreenTimer;
