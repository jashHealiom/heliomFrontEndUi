import {StyleSheet, Dimensions} from 'react-native';
import colors from './colorStyle';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  headText: {
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Rubik',
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
    fontFamily: 'Rubik',
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
    color: colors.Patient,
    fontSize: 14,
    marginHorizontal: 1,
  },
  ProvideersignUpLoginText: {
    fontFamily: 'Rubik-Regular',
    color: colors.Provider,
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
    marginTop: 10,
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
    color: colors.Patient,
    fontSize: 14,
    marginHorizontal: 1,
  },
  loginSignInArrowImg: {
    width: 18,
    height: 8,
    marginTop: 0,
    tintColor: colors.Patient,
  },
  FaceTouchIdText: {
    textAlign: 'left',
    color: '#1B1E29',
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    marginTop: 30,
  },
  FaceTouchIdMaybeLaterText: {
    textAlign: 'center',
    color: colors.Patient,
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    marginTop: 10,
    // marginHorizontal: 28,
    marginVertical: 10,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },
  FaceTouchIdMaybeLaterTextProvider: {
    textAlign: 'center',
    color: colors.Provider,
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    marginTop: 10,
    // marginHorizontal: 28,
    marginVertical: 10,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
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
    backgroundColor: colors.Patient,
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 2,
  },
  providerCommanButton: {
    // backgroundColor: colors.Provider,
    backgroundColor: colors.Provider,
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
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
    marginTop: 12,
  },

  buttonDropdownStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 40,
    // zIndex: 1,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  FaceTouchIdArrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 20,
  },
  itemStyle: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.Patient,
  },

  buttonText1: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#FAFAFA',
    width: '100%',
    height: 250,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
    marginHorizontal: 20,
  },
  dropDownoverlay: {
    width: '100%',
    // height: 145,
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 20,
  },
  dropDownoverlayMultiSelect: {
    width: '100%',
    // height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#FAFAFA",
    // marginHorizontal: 20,
  },
  dropdownOverlayCountryCode: {
    width: '17%',
    // height:100 ,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  dropdownOverlayCountry: {
    width: '100%',
    // height:100 ,
    // flex: 1,
    // flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 20,
  },
  multiSelectSearchContainerProvider: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    height: 40,
    borderWidth: 1,
    borderColor: colors.Provider,
  },
  multiSelectPatientSubmitButton: {
    height: 40,
    width: '100%',
    marginTop: 3,
    backgroundColor: colors.Patient,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  multiSelectProviderSubmitButton: {
    height: 40,
    width: '100%',
    borderRadius: 15,
    backgroundColor: colors.Provider,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  dropdownSingleSelect: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    height: 155,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
  dropdownSingleSelectCountryCode: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    height: 91,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
  dropdownSingleSelectCountry: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    height: 152,
    marginHorizontal: 20,
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
    borderColor: colors.Patient,
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
    fontFamily: 'Rubik',
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
    color: colors.Patient,
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
  },
  verifyProviderRequestText: {
    color: colors.Provider,
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
    marginTop: 15,
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
  buttonStyleCountryCode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    height: 40,
    // zIndex: 1,
    width: '18%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  genderDropDownButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    height: 40,
    zIndex: 1,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    // marginBottom: 8,
    // height: 40,
    // borderBottomWidth:1,
    // marginTop: 0,
    // flexDirection: "row",
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
    color: colors.Patient,
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
    color: colors.Patient,
    //fontFamily:'Rubik',
    fontFamily: 'Rubik-Regular',
    justifyContent: 'center',
  },
  welcomeButton: {
    width: 123,
    height: 40,
    backgroundColor: colors.Patient,
    // backgroundColor: colors.Patient,
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
    color: colors.Patient,
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
    backgroundColor: colors.Patient,
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
    borderColor: colors.Patient,
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
  errorText: {
    textAlign: 'left',
    color: '#FF3333',
    fontFamily: 'Rubik-Regular',
    fontSize: 12,
    marginTop: 5,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    marginTop: 10.5,
    alignItems: 'center',
  },
});
