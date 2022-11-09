import {View, Text, StyleSheet, StatusBar, Animated} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';

const Progress = ({step, steps, height}) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <View
          onLayout={e => {
            const newWidth = e.nativeEvent.layout.width;
            setWidth(newWidth);
          }}
          style={{
            height: 7,
            borderWidth: 0.2,
            borderColor: '#ccc',
            width: '100%',
            backgroundColor: '#EAEAEA',
            borderRadius: height,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}>
          <Animated.View
            style={{
              height: 5,
              width: '100%',
              borderRadius: height,
              backgroundColor: '#24DAC6',
              position: 'absolute',

              // left: 0,
              // top: 0,
              transform: [
                {
                  translateX: animatedValue,
                },
              ],
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Menlo',
            fontSize: 12,
            fontWeight: '900',
            marginLeft: 3,
          }}>
          {step}%
        </Text>
      </View>
    </>
  );
};
const HeProgressiveBar = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 10) % (100 + 10));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Progress step={68} steps={100} height={10} />
    </View>
  );
};

export default HeProgressiveBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});
