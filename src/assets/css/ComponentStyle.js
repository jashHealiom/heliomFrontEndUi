import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

module.exports = StyleSheet.create({
    button: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    },
    checkedButton: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#04549b'
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    radioContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    radioButtonContainer: {
        width: "50%", height: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    radiocircle: {
        height: 18,
        width: 18,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },

    radiocheckedCircle: {
        width: 13,
        height: 13,
        borderRadius: 7,
        backgroundColor: '#24DAC6',
    },
    radioButtonItem: {
        marginLeft: 8
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        height: 40,
        zIndex: 1,
        width: '100%', borderBottomWidth: 1,
        borderBottomColor: "#000",

    },
    buttonText: {
        flex: 1,
    },
    icon: {
        marginRight: 10,
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        height: 205,
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
    },
    overlay: {
        width: '90%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    multiSelectSearchContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 40, borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#24DAC6"
    },
    multiSelectSearchMainView: {
        flexDirection: "row", alignItems: "center",
    },
    multiSelectSearchIcon: {
        marginLeft: 5
    },
    multiSelectBackIcon: {
        alignItems: "flex-end", paddingRight: 6,
    },
    multiSelectSearchTextInput: {
        marginLeft: 5
    },
    selectedDropDownItem: {
        flexDirection: 'row',
        borderWidth: 1,
        marginRight: 5,
        marginVertical: 3,
        paddingHorizontal: 5,
        paddingVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#24DAC6",
        borderRadius: 20
    },
    selectedDropDownContainer: {
        flexDirection: "row",
        width: "96%",
        marginTop: 40,
        backgroundColor: "#FAFAFA",
        marginHorizontal: 20,
        flexWrap: 'wrap',
    },
    SelectedDropDownText: { color: "#24DAC6", fontSize: 18 },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#24DAC6"
    },
    itemMultiSelect: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#24DAC6"
    },

})