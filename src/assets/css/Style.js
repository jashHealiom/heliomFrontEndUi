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
        marginTop: 60,
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
    },
    EmailInputContainer: {
        marginTop: 12
    }
})