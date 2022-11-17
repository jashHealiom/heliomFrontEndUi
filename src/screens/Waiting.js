import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import He_TextInput from '../components/he_TextInput';
import HeButton from '../components/HeButton';
import images from '../assets/images/images';
import colors from '../assets/css/colorStyle';

const styles = require('../assets/css/Style');
const Waiting = () => {
  return (
    <ScrollView style={{marginHorizontal: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={{paddingTop: 3, color: 'black'}}
              source={require('../assets/images/signup/arrow_left.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              paddingLeft: 8,
              marginBottom: 3,
              fontWeight: '400',
              fontFamily: 'Rubrik',
              color: 'black',
            }}>
            Confirm Visit
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            'emergency';
          }}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 8,
            borderRadius: 50,
            borderColor: colors.Patient,
            borderWidth: 1,
            height: 30,
          }}>
          <Text style={{color: colors.Patient, fontSize: 15}}>EMERGENCY</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 15,
          fontFamily: 'Rubik',
          marginTop: 10,
          marginBottom: 5,
        }}>
        Dr. Molk Hess will join in 3 min. Be sure to have your video & audio on.
      </Text>
      {/* render video here */}
      <View style={{height: 500, backgroundColor: '#1B1E29'}}>
        <Image
          style={{position: 'absolute', right: 15, top: 12}}
          source={require('../assets/images/signup/ic_add_user.png')}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            position: 'absolute',
            bottom: 8,
            width: '100%',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              'do something';
            }}
            style={{
              paddingBottom: 10,
              // backgroundColor: 'white',
              paddingHorizontal: 15,
              paddingTop: 5,
            }}>
            <Image
              source={require('../assets/images/signup/ic_user_activity.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              'do something';
            }}
            style={{
              paddingBottom: 10,
              // backgroundColor: 'white',
              paddingHorizontal: 15,
              paddingTop: 5,
            }}>
            <Image
              source={require('../assets/images/signup/ic_microphone_zoom.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              'do something';
            }}
            style={{
              paddingBottom: 10,
              // backgroundColor: 'white',
              paddingHorizontal: 15,
              paddingTop: 5,
            }}>
            <Image
              source={require('../assets/images/signup/ic_video_camera_slash.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              'do something';
            }}
            style={{
              paddingBottom: 10,
              // backgroundColor: 'white',
              paddingHorizontal: 15,
              paddingTop: 5,
            }}>
            <Image
              source={require('../assets/images/signup/ic_arrows_clockwise.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* end of video render */}
      <HeButton
        name="Join the video call"
        buttonText={styles.buttonText}
        styleButton={styles.commanButton}
        onPress={() => console.log('Navigate to videoCall')}
      />

      <TouchableOpacity
        // style={{marginTop: 5}}
        activeOpacity={0.7}
        onPress={() => {
          'bruh';
        }}>
        <Text style={{fontFamily: 'Rubik', fontSize: 14, top: -15}}>
          Trouble shooting?
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Waiting;
