import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  headText: {
    textAlign: 'left',
    color: 'black',
    fontfamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 36,
    fontSize: 30,
    color: '#1B1E29',
  },
  //signUp style
  signUpHeadText: {
    textAlign: 'left',
    color: 'black',
    fontfamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 36,
    fontSize: 30,
    marginTop: 15.5,
    color: '#1B1E29',
  },
  signUpBackArrowText: {
    fontSize: 14,
    color: '#1B1E29',
    fontWeight: '300',
    fontStyle: 'normal',
    fontFamily: 'Rubik',
    lineHeight: 17,
    marginLeft: 10,
    letterSpacing: 0.02,
  },
  signUpLoginText: {
    fontFamily: 'Rubik-Regular',
    color: '#24DAC6',
    fontSize: 14,
    marginHorizontal: 1,
  },
  textSignupStyle: {
    marginLeft: '15%',
    fontSize: 18,
    color: '#000000',
    fontFamily: 'overpass-regular',
  },
  Container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  mainView: {
    // flex: 1,
    marginTop: 40,
    backgroundColor: '#FAFAFA',
    marginHorizontal: 20,
  },
  mainLoginView: {
    // flex: 1,
    marginTop: 72,
    backgroundColor: '#FAFAFA',
    marginHorizontal: 20,
  },
  textInputStyle: {
    height: 40,
    width: '88%',
    fontSize: 16,
    paddingLeft: 0,
    backgroundColor: '#FFFFFF',
  },
  labelEmailTextLogin: {
    fontFamily: 'Rubik-Regular',
    fontWeight: '300',
    textAlign: 'left',
    color: '#1B1E29',
    fontSize: 14,
  },
  moreOptionContainer: {
    flexDirection: 'row',
    marginHorizontal: 0,
    marginTop: 15.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreOptionText: {
    //fontFamily:'Rubik',
    fontFamily: 'Rubik-Regular',
    color: '#1B1E29',
    fontSize: 14,
  },
  OptionText: {
    fontFamily: 'Rubik-Regular',
    color: '#24DAC6',
    fontSize: 14,
    marginHorizontal: 1,
  },
  loginSignInArrowImg: {
    width: 18,
    height: 8,
    marginTop: 0,
    tintColor: '#24DAC6',
  },
  textInputStyle1: {
    height: 40,
    width: '88%',
    fontSize: 16,
    paddingLeft: 5,
    backgroundColor: '#FFFFFF',
  },

  inputView1: {
    backgroundColor: '#FFFFFF',
    width: '80.9%',
    marginLeft: 2,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    borderColor: '#000',
  },
  loginImageContainer: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
    marginBottom: 30,
  },
  loginImage: {
    width: '100%',
    height: '60%',
  },
  titleText: {
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14,
    letterSpacing: 0.02,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  commanButton: {
    backgroundColor: '#24DAC6',
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    borderRadius: 2,
  },
  providerCommanButton: {
    backgroundColor: '#0086C3',
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    borderRadius: 2,
  },
  buttonText: {
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    fontWeight: '300',
    color: '#1B1E29',
    textAlign: 'center',
  },
  providerButtonText: {
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  dropDownText: {
    width: '19%',
    fontSize: 20,
    textAlign: 'center',
  },
  mobileInputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  emailInputContainer: {
    marginTop: 10,
  },

  buttonDropdownStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    height: 40,
    zIndex: 1,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  buttonStyleCountryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    height: 40,
    zIndex: 1,
    width: '18%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  buttonText1: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  dropDownoverlay: {
    width: '90%',
    height: '42.5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  dropdownOverlayCountryCode: {
    width: '17.6%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  dropdownSingleSelect: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    height: '50%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
  dropdownSingleSelectCountryCode: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    height: '23.73%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#24DAC6',
  },
  backArrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  //verfiyOtpScreen
  VerifyBackArrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrowImage: {
    width: 24,
    height: 24,
    marginTop: -3,
  },
  verifyHeadText: {
    textAlign: 'left',
    color: 'black',
    fontfamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 36,
    fontSize: 30,
    marginTop: 24,
    color: '#1B1E29',
  },
  VryPhoneText: {
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    marginTop: 16,
    // marginHorizontal: ,
  },
  verifyOtpConstainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  verifyInputView: {
    backgroundColor: '#ffffff',
    width: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: 40,
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
  },
  verifyInputContainer: {
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    marginTop: 5,
  },
  verifyRequestText: {
    color: '#24DAC6',
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
  },
  inputView: {
    backgroundColor: '#ffffff',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: 40,
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
  },
  backArrowText: {
    fontSize: 14,
    color: '#1B1E29',
    fontWeight: '300',
    fontStyle: 'normal',
    fontFamily: 'Rubik',
    lineHeight: 17,
    letterSpacing: 0.02,
  },

  passwordRequireInput: {
    flexDirection: 'row',
    marginTop: 2,
  },
  chosseSelectText: {
    marginVertical: 0,
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 8,
    color: '#1B1E29',
  },
  leftArrow1: {
    width: 24,
    height: 24,
    marginTop: -3,
  },
  textChooseTitle: {
    marginVertical: 5,
    fontFamily: 'Rubik-Light',
    fontSize: 28,
    color: '#1B1E29',
  },
  chosseSelectText: {
    marginVertical: 0,
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 8,
    color: '#1B1E29',
  },
  choosePatientContainer: {
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    width: 160,
    height: 160,
    marginTop: 25,
    borderRadius: 10,
    elevation: 3,
  },
  roleImage: {
    width: 95,
    height: 95,
    marginTop: 15,
    resizeMode: 'stretch',
  },
  chooseProviderContainer: {
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    width: 160,
    height: 160,
    marginTop: 25,
    borderRadius: 10,
    elevation: 3,
  },
  mainContainer: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrowContainerChooseSignUp: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
  },
  OtpContainer: {
    justifyContent: 'center',
  },
  ImageStyle: {
    alignSelf: 'center',
    width: 201,
    height: 201,
    justifyContent: 'center',
  },
  buttonStyle: {
    marginBottom: 20,
  },
  otpViewStyle: {
    flexDirection: 'row',
    width: '85%',
    alignSelf: 'flex-end',
  },
  otpInputStyle: {
    // width: 45,
    marginRight: 12,
    borderColor: '#999999',
    fontFamily: 'overpass-regular',
    fontSize: 13,
    fontWeight: 'bold',
    color: 'grey',
    // backgroundColor: 'black',
  },
  resendCodeTextStyle: {
    fontFamily: 'overpass-regular',
    fontWeight: '400',
    color: '#888888',
    // width: '80%',
    textAlign: 'center',
    // flex: 1,
    // flexWrap: 'wrap',
  },
  resendCodeViewStyle: {
    marginVertical: 24,
    flexDirection: 'column',
  },
  textStyle: {
    marginBottom: '0%',
    marginLeft: '15%',
    fontSize: 18,
    color: '#000000',
    fontFamily: 'overpass-regular',
  },

  //Welcome Screen
  WelcomeContainer: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeLogoImg: {
    width: 100,
    height: 100,
    marginTop: 114,
  },
  welcomeLogoText: {
    marginVertical: 0,
    fontSize: 24,
    marginTop: 26,
    fontWeight: '300',
    color: '#24DAC6',
    // lineHeight: 106.6,
    fontFamily: 'Rubik',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeLogoWelcomeText: {
    marginVertical: 0,
    fontSize: 24,
    marginBottom: 10,
    // fontWeight:300,
    color: '#24DAC6',
    //fontFamily:'Rubik',
    fontFamily: 'Rubik-Regular',
    justifyContent: 'center',
  },
  welcomeButton: {
    width: 123,
    height: 40,
    backgroundColor: '#24DAC6',
    marginVertical: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  welcomeButtonText: {
    fontSize: 16,
    letterSpacing: 0.02,
    fontWeight: '400',
    color: '#1B1E29',
    textAlign: 'center',
    fontFamily: 'Rubik-Regular',
  },
  welcomeLoginFootercontainer: {
    flexDirection: 'row',
    marginHorizontal: 0,
    marginTop: 23.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeLoginNotAccountText: {
    //fontFamily:'Rubik',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    letterSpacing: 0.02,
    color: '#1B1E29',
    fontSize: 14,
    lineHeight: 17,
  },
  welcomeLoginSignUpText: {
    fontFamily: 'Rubik-Regular',
    color: '#24DAC6',
    fontSize: 14,
    marginHorizontal: 1,
  },
  welcomeSignupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  welcomeTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 106.6,
  },
  //home Screen
  homeContainer: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    width: '100%',
  },
  homeButtonText: {
    fontSize: 14,
    letterSpacing: 0.02,
    fontWeight: '400',
    color: '#1B1E29',
    textAlign: 'center',
    fontFamily: 'Rubik-Regular',
  },
  homeButton: {
    width: '90%',
    height: 40,
    backgroundColor: '#24DAC6',
    marginBottom: 5,
    // marginVertical: 10,
    // paddingVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeLightButton: {
    width: '90%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#24DAC6',
    marginBottom: 5,
    // marginVertical: 10,
    // paddingVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeTitleText: {
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14,
    letterSpacing: 0.02,
    fontSize: 12,
    marginHorizontal: 20,
    marginTop: 120,
    textTransform: 'uppercase',
  },
  homeDetailsText: {
    color: '#1B1E29',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '300',
    width: '93%',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.02,
    marginTop: 16,
    marginHorizontal: 20,
  },
  homeLightButtonText: {
    fontSize: 14,
    letterSpacing: 0.02,
    fontWeight: '400',
    color: '#1B1E29',
    textAlign: 'center',
    fontFamily: 'Rubik-Regular',
  },
  SplashContainer: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  splashScreenLogo: {
    width: 100,
    height: 100,
    marginTop: 250,
  },

  mobileMainContainer: {
    marginTop: 10,
  },
});
