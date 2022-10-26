import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';

const He_TextInput = props => {
  const {
    style,
    ref,
    keyboardType,
    placeholder,
    screenName,
    textContentType,
    styles,
    onChangeText,
    value,
    caretHidden,
    onKeyPress,
    icon,
    imageSrc,
  } = props;

  return (
    <View style={style}>
      <TextInput
        ref={ref}
        keyboardType={keyboardType}
        textContentType={textContentType}
        ScreenName={screenName}
        placeholder={placeholder}
        style={styles}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        placeholderTextColor="#98989C"
        onChangeText={onChangeText}
        value={value}
        caretHidden={caretHidden}
        onKeyPress={onKeyPress}
      />
      {icon ? (
        <View style={{position: 'absolute', right: 10}}>
          <Image source={imageSrc} style={{width: 25, height: 25}} />
        </View>
      ) : null}
    </View>
  );
};

export default He_TextInput;
