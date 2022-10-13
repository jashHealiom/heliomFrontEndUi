import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react';
import images from "../assets/images/images";
import Icon from 'react-native-vector-icons/Ionicons';

const He_TextInput = (props) => {
    // screen type
    // image
    return (
        <View style={props.style}>
            <TextInput
                textContentType={props.textContentType}
                ScreenName={props.screenName}
                placeholder={props.name}
                style={props.styles}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                placeholderTextColor="#98989C"
                onChangeText={props.onChangeText}
                value={props.value}
            />
            {/* {props.ScreenName == 'login' ? <Text>Hello</Text> : null} */}
            {props.textContentType == 'emailAddress' ? (<View >
                <Image
                    // style={styles.eyeClosedImg}
                    source={images.faceIdIc}
                ></Image>
            </View>) : props.textContentType == 'password' ? (<View >
                <Image
                    // style={styles.eyeClosedImg}
                    source={images.eyeClosed}
                ></Image>
            </View>) : null}
        </View>
    )
}

export default He_TextInput
