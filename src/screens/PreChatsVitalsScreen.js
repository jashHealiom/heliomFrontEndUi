import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import images from '../assets/images/images';
import {VitalBox} from '../components/he_VitalBox';

const styles = require('../assets/css/Style');

const PreChatsVitalsScreen = ({navigation}) => {
  const [mute, setMute] = useState(false);
  const [videoOn, setVideoOn] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#E5E5E5',
      }}>
      {/* <Text>Hi this is the call screen</Text> */}
      <View style={{flex: 0.96}}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: '#FFFFFF',
            width: 40,
            borderRadius: 8,
            height: 40,
            // alignContent: 'center',
            // justifyContent: 'center',
            marginTop: 10,
            marginLeft: 12,
          }}
          onPress={() => navigation.goBack()}>
          <Image
            style={{height: 40, width: 40, borderRadius: 50}}
            source={require('../assets/images/signup/left_arrow1.png')}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontFamily: 'Rubik',
              color: '#6D707D',
              fontSize: 16,
              marginHorizontal: 20,
              marginTop: 15,
            }}>
            Dr. Molk Hess will join in 3 min. Be sure to have your video & audio
            on.
          </Text>
        </View>
        <View
          style={{position: 'absolute', width: '100%', bottom: 20, left: 20}}>
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
      <View
        style={{
          backgroundColor: '#ffffff',
          flexDirection: 'row',
          flex: 0.04,
          justifyContent: 'space-around',
          paddingTop: 10,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => console.log('End Call')}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../assets/images/signup/ic_phone_call.png')}
          />
        </TouchableOpacity>
        {!mute ? (
          <TouchableOpacity activeOpacity={0.7} onPress={() => setMute(!mute)}>
            <Image
              style={{height: 30, width: 30}}
              source={require('../assets/images/signup/ic_microphone.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setMute(!mute)}
            style={{backgroundColor: 'red'}}>
            <Image
              style={{height: 30, width: 30}}
              source={require('../assets/images/signup/ic_microphone.png')}
            />
          </TouchableOpacity>
        )}
        {videoOn ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => console.log('End Call')}>
            <Image
              style={{height: 30, width: 30}}
              source={require('../assets/images/signup/ic_video_camera.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => console.log('End Call')}
            style={{backgroundColor: 'red'}}>
            <Image
              style={{height: 30, width: 30}}
              source={require('../assets/images/signup/ic_video_camera.png')}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => console.log('End Call')}>
          <Image
            style={{height: 28, width: 28}}
            source={require('../assets/images/signup/ic_arrows_clockwise_black.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreChatsVitalsScreen;
