import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

module.exports = StyleSheet.create({
    HeadText: {
        textAlign: "left",
        color: "black",
        fontFamily: "Rubik-Light",
        fontSize: 30,
    },
    MainView: {
        flex: 1,
        marginTop: 40,
        backgroundColor: "#FAFAFA",
        marginHorizontal: 20
    },
    textInputStyle: {
        height: 40,
        width: "100%",
        fontSize: 16,
        backgroundColor: "#fff"

    },
    textInputStyle1: {
        height: 40,
        width: "100%",
        fontSize: 16,
        backgroundColor: "#fff"

    },
    InputView: {
        borderBottomWidth: 1,
        borderRadius: 5,
        borderColor: "#000"
    },
    InputView1: {
        width: "80.9%",
        borderBottomWidth: 1,
        borderRadius: 5,
        borderColor: "#000"
    },
    TitleText: {
        textAlign: "left",
        color: "black",
        fontFamily: "Rubik-Regular",
        fontSize: 12,
    },
    CommanButton: {
        backgroundColor: "#24DAC6",
        height: 40, width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
        borderRadius: 2,
        backgroundColor: "#24DAC6",

    },
    ButtonText: {
        fontFamily: "Rubik-Regular",
        fontSize: 14,
        fontWeight: "300",
        color: "#1B1E29",
        textAlign: "center",
    },
    DropDownText: {
        width: "19%", fontSize: 20, textAlign: "center"
    },
    MobileInputContainer: {
        flexDirection: "row", width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    EmailInputContainer: {
        marginTop: 12
    },
    ButtonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        height: 40,
        zIndex: 1,
        width: '100%', borderBottomWidth: 1,
        borderBottomColor: "#000",

    },
    ButtonStyleCountry_Code: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#FAFAFA',
        height: 40,
        zIndex: 1,
        width: '20%', borderBottomWidth: 1,
        borderBottomColor: "#000",

    },
    buttonText1: {
        flex: 1,
        // textAlign: 'center',
    },
    icon: {
        marginRight: 10,
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '20%',
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
    },
    DropDownoverlay: {
        width: '90%',
        height: '50%',
        // backgroundColor: "#f2f",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    DropDownoverlayCountry_Code: {
        width: '19%',
        height: '50%',
        // backgroundColor: "#f2f",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#24DAC6"
    },

})