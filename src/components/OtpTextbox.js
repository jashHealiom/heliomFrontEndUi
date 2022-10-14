import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

class OtpTextbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            borderColor: '#FFFFFF',
            borderBottomWidth: 0,
        };
    }
    // state = {
    //   borderColor: '#ededed',
    // };

    onFocus() {
        this.setState({
            borderColor: '#0F974F',
            borderBottomWidth: 2,
        });
    }

    onBlur() {
        this.setState({
            borderColor: '#FFFFFF',
            borderBottomWidth: 0,
        });
    }
    render() {
        const {
            label,
            style,
            keyboardType,
            maxLength,
            placeholder,
            placeholderTextColor,
            onChangeText,
            value,
            caretHidden,
            autoFocus,
            reference,
            onKeyPress,
            onFocus,
        } = this.props;

        return (
            <View style={[styles.container, style]}>
                <TextInput
                    // onFocus={() => this.onFocus()}
                    onBlur={() => this.onBlur()}
                    style={[
                        styles.inputStyle,
                        {
                            borderColor: this.state.borderColor,
                            borderBottomWidth: this.state.borderBottomWidth,
                        },
                    ]}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    onChangeText={onChangeText}
                    value={value}
                    caretHidden={caretHidden}
                    autoFocus={autoFocus}
                    onKeyPress={onKeyPress}
                    onFocus={onFocus}
                    ref={reference}
                />
            </View>
        );
    }
}

const styles = {
    container: {
        // flex: 1,
        justifyContent: 'flex-start',
        // width: '100%',
        // backgroundColor: 'black',
    },
    inputStyle: {
        height: 40,
        width: 40,
        paddingTop: 0,
        paddingBottom: 0,
        // paddingLeft: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        // marginLeft: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        // justifyContent: 'center',
        textAlign: 'center',
        // backgroundColor: 'black',
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
        fontFamily: 'overpass-regular',
    },
};

export { OtpTextbox };