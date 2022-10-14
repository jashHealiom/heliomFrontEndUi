import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

module.exports = StyleSheet.create({
    headText: {
        textAlign: "left",
        color: "black",
        fontFamily: "Rubik-Light",
        fontSize: 30,
    },
    Container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
    },
    MainView: {
        // flex: 1,
        marginTop: 40,
        backgroundColor: "#FAFAFA",
        marginHorizontal: 20
    },
    textInputStyle: {
        height: 40,
        width: "88%",
        fontSize: 16,
        paddingLeft: 0,
        backgroundColor: "#fff"

    },
    textInputStyle1: {
        height: 40,
        width: "88%",
        fontSize: 16,
        paddingLeft: 5,
        backgroundColor: "#fff"

    },
    inputView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        // height: 40,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderColor: "#000",

    },
    inputView1: {
        width: "80.9%",
        borderBottomWidth: 1,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 5,
        flexDirection: 'row',
        borderColor: "#000"
    },
    titleText: {
        textAlign: "left",
        color: "black",
        fontFamily: "Rubik-Regular",
        fontSize: 12,
    },
    commanButton: {
        backgroundColor: "#24DAC6",
        height: 40, width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
        borderRadius: 2,
    },
    providerCommanButton: {
        backgroundColor: "#0086C3",
        height: 40, width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
        borderRadius: 2,
    },
    buttonText: {
        fontFamily: "Rubik-Regular",
        fontSize: 14,
        fontWeight: "300",
        color: "#1B1E29",
        textAlign: "center",
    },
    providerButtonText: {
        fontFamily: "Rubik-Regular",
        fontSize: 14,
        fontWeight: "300",
        color: "#FFFFFF",
        textAlign: "center",
    },
    dropDownText: {
        width: "19%", fontSize: 20, textAlign: "center"
    },
    mobileInputContainer: {
        flexDirection: "row", width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    emailInputContainer: {
        marginTop: 10
    },
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        height: 40,
        zIndex: 1,
        width: '100%', borderBottomWidth: 1,
        borderBottomColor: "#000",

    },
    buttonStyleCountryCode: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        // backgroundColor: '#FAFAFA',
        height: 40,
        zIndex: 1,
        width: '19%', borderBottomWidth: 1,
        borderBottomColor: "#000",

    },
    buttonText1: {
        flex: 1,
    },
    icon: {
        marginRight: 10,
    },
    dropDownoverlay: {
        width: '90%',
        height: '44%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    dropdownOverlayCountryCode: {
        width: '19%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    dropdownSingleSelect: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        height: 150,
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
    },
    dropdownSingleSelectCountryCode: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        height: 120,
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
    },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#24DAC6"
    },
    backArrowContainer: {
        flexDirection: "row", alignItems: "center"
    },
    backArrowImage: {
        width: 29,
        height: 24,
        marginTop: -3,
    },
    backArrowText: {
        fontSize: 14, color: "#1B1E29"
    },
    passwordRequireInput: {
        flexDirection: "row",
        marginTop: 2,
    },
    chosseSelectText: {
        marginVertical: 0,
        fontFamily: "Rubik-Regular",
        fontSize: 14,
        textAlign: "center",
        alignItems: "center",
        marginTop: 8,
        color: "#1B1E29",
    },
    leftArrow1: {
        width: 24,
        height: 24,
        marginTop: -3,
    },
    textChooseTitle: {
        marginVertical: 5,
        fontFamily: "Rubik-Light",
        fontSize: 28,
        color: "#1B1E29",
    },
    chosseSelectText: {
        marginVertical: 0,
        fontFamily: "Rubik-Regular",
        fontSize: 14,
        textAlign: "center",
        alignItems: "center",
        marginTop: 8,
        color: "#1B1E29",
    },
    choosePatientContainer: {
        backgroundColor: "#FAFAFA",
        alignItems: "center",
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
        resizeMode: "stretch",
    },
    chooseProviderContainer: {
        backgroundColor: "#FAFAFA",
        alignItems: "center",
        width: 160,
        height: 160,
        marginTop: 25,
        borderRadius: 10,
        elevation: 3,
    },
    mainContainer: {
        backgroundColor: "#FAFAFA",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    backArrowContainerChooseSignUp: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 10
    },
    OtpContainer: {
        justifyContent: "center",
    },
    ImageStyle: {
        alignSelf: "center",
        width: 201,
        height: 201,
        justifyContent: "center",
    },
    buttonStyle: {
        marginBottom: 20,
    },
    otpViewStyle: {
        flexDirection: "row",
        width: "85%",
        alignSelf: "flex-end",
    },
    otpInputStyle: {
        // width: 45,
        marginRight: 12,
        borderColor: "#999999",
        fontFamily: "overpass-regular",
        fontSize: 13,
        fontWeight: "bold",
        color: "grey",
        // backgroundColor: 'black',
    },
    resendCodeTextStyle: {
        fontFamily: "overpass-regular",
        fontWeight: "400",
        color: "#888888",
        // width: '80%',
        textAlign: "center",
        // flex: 1,
        // flexWrap: 'wrap',
    },
    resendCodeViewStyle: {
        marginVertical: 24,
        flexDirection: "column",
    },
    textStyle: {
        marginBottom: "0%",
        marginLeft: "15%",
        fontSize: 18,
        color: "#000000",
        fontFamily: "overpass-regular",
    },
    textSignupStyle: {
        marginLeft: "15%",
        fontSize: 18,
        color: "#000000",
        fontFamily: "overpass-regular",
    },
})