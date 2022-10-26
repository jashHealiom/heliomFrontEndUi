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
      <Text
        style={{
          fontFamily: 'Menlo',
          fontSize: 12,
          fontWeight: '900',
          marginBottom: 10,
        }}>
        {step}/{steps}
      </Text>
      <View
        onLayout={e => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          height,
          backgroundColor: '#EAEAEA',
          borderRadius: height,
          overflow: 'hidden',
        }}>
        <Animated.View
          style={{
            height,
            width: '100%',
            borderRadius: height,
            backgroundColor: '#24DAC6',
            position: 'absolute',
            left: 0,
            top: 0,
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          }}
        />
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
      <Progress step={index} steps={100} height={10} />
    </View>
  );
};

export default HeProgressiveBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
});
