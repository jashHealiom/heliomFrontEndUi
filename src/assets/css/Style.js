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
    InputView: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        // height: 40,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderColor: "#000",

    },
    InputView1: {
        width: "80.9%",
        borderBottomWidth: 1,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 5,
        flexDirection: 'row',
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
    // dropdown: {
    //     position: 'absolute',
    //     backgroundColor: '#fff',
    //     width: '20%',
    //     shadowColor: '#000000',
    //     shadowRadius: 4,
    //     shadowOffset: { height: 4, width: 0 },
    //     shadowOpacity: 0.5,
    // },
    DropDownoverlay: {
        width: '90%',
        height: '44%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    DropDownoverlayCountry_Code: {
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
    dropdownSingleSelectCountry_Code: {
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

})