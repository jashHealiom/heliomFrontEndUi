import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import images from '../assets/images/images';
import HeButton from '../components/he_Button';

const styles = require('../assets/css/Style');
const Welcome = () => {
  return (
    <View style={styles.WelcomeContainer}>
      <Image style={styles.welcomeLogoImg} source={images.logo} />
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeLogoText}>Welcome to </Text>
        <Text style={styles.welcomeLogoWelcomeText}>Healiom</Text>
      </View>

      <HeButton
        name="Sign Up"
        buttonText={styles.welcomeButtonText}
        styleButton={styles.welcomeButton}
        onPress={() => ''}
      />
      <View style={styles.welcomeLoginFootercontainer}>
        <Text style={styles.welcomeLoginNotAccountText}>
          Already have an account?
        </Text>
        <Text onPress={() => ''} style={styles.welcomeLoginSignUpText}>
          {' '}
          Login
        </Text>
      </View>

      <View style={{marginTop: 15}}>
        <Text style={styles.welcomeLoginNotAccountText}>
          {/* V-{this.state.appVersionData} ({Platform.OS}) */}
        </Text>
      </View>
      <View style={[styles.welcomeSignupTextCont, {height: 120}]}>
        <Image
          style={{width: '100%', height: 190}}
          source={images.illustrationLeft}
        />
      </View>
    </View>
  );
};

export default Welcome;
