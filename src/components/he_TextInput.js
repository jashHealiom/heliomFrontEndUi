import { View, Text, TextInput, Image } from 'react-native'
import React from 'react';
import images from "../assets/images/images";
import Icon from 'react-native-vector-icons/Ionicons';

const He_TextInput = (props) => {
    return (
        <View style={props.style}>
            <TextInput
                ref={props.ref}
                keyboardType={props.keyboardType}
                textContentType={props.textContentType}
                ScreenName={props.screenName}
                placeholder={props.name}
                style={props.styles}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                placeholderTextColor="#98989C"
                onChangeText={props.onChangeText}
                value={props.value}
                caretHidden={props.caretHidden}
                onKeyPress={props.onKeyPress}
            />
            {props.textContentType == 'emailAddress' ? (<View >
                <Image
                    source={images.faceIdIc}
                ></Image>
            </View>) : props.textContentType == 'password' ? (<View >
                <Image
                    source={images.eyeClosed}
                ></Image>
            </View>) : null}
        </View>
    )
}

export default He_TextInput
