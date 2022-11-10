import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import images from '../assets/images/images';
import { VitalBox } from '../components/he_VitalBox';

const styles = require('../assets/css/Style');

const CallScreen = ({ navigation }) => {
    const [mute, setMute] = useState(false);
    const [videoOn, setVideoOn] = useState(true);
    return (
        <View style={{ flex: 1, height: '100%', width: '100%', backgroundColor: '#E5E5E5' }}>
            {/* <Text>Hi this is the call screen</Text> */}
            <View style={{ flex: 0.96 }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 20, marginTop: 20 }}>
                        <Image style={{ height: 50, width: 50, borderRadius: 50 }} source={require('../assets/images/signup/ash_photo.png')} />
                        <Text style={{ paddingTop: 12, paddingLeft: 8, fontSize: 18, color: 'white', fontFamily: 'Rubik' }}>Dr Paddy B</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ backgroundColor: 'black', height: 144, width: 104, position: 'absolute', right: 20, top: 82 }} activeOpacity={0.7} onPress={() => { console.log('Invert your and other persons video') }}>

                </TouchableOpacity>
                <View style={{ position: 'absolute', width: '100%', bottom: 20, left: 20 }}>
                    <VitalBox
                        title={'HEART RATE'}
                        iconSource={require('../assets/images/signup/ic_heart_beat.png')}
                        metric={'bmp'}
                        value={'92'}
                    />
                    <VitalBox
                        title={'RESPIRATION'}
                        iconSource={require('../assets/images/signup/ic_activity.png')}
                        metric={'rpm'}
                        value={'98'}
                    />
                    <VitalBox
                        title={'STRESS'}
                        iconSource={require('../assets/images/signup/ic_smiley_shaded.png')}
                        // metric={'bmp'}
                        value={'Low'}
                    />
                </View>
            </View>
            <View style={{ backgroundColor: '#ffffff', flexDirection: 'row', flex: 0.04, justifyContent: 'space-around', paddingTop: 10 }}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => console.log('End Call')}>
                    <Image style={{ height: 30, width: 30 }} source={require('../assets/images/signup/ic_phone_call.png')} />
                </TouchableOpacity>
                {!mute ? <TouchableOpacity activeOpacity={0.7} onPress={() => setMute(!mute)}>
                    <Image style={{ height: 30, width: 30 }} source={require('../assets/images/signup/ic_microphone.png')} />
                </TouchableOpacity>
                    : <TouchableOpacity activeOpacity={0.7} onPress={() => setMute(!mute)} style={{ backgroundColor: 'red' }}>
                        <Image style={{ height: 30, width: 30 }} source={require('../assets/images/signup/ic_microphone.png')} />
                    </TouchableOpacity>}
                {videoOn ? <TouchableOpacity activeOpacity={0.7} onPress={() => console.log('End Call')}>
                    <Image style={{ height: 30, width: 30 }} source={require('../assets/images/signup/ic_video_camera.png')} />
                </TouchableOpacity> :
                    <TouchableOpacity activeOpacity={0.7} onPress={() => console.log('End Call')} style={{ backgroundColor: 'red' }}>
                        <Image style={{ height: 30, width: 30 }} source={require('../assets/images/signup/ic_video_camera.png')} />
                    </TouchableOpacity>}
                <TouchableOpacity activeOpacity={0.7} onPress={() => console.log('End Call')}>
                    <Image style={{ height: 30, width: 30 }} source={require('../assets/images/signup/ic_phone_call.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CallScreen;
