import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    RadioContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    RadiobuttonContainer: {
        width: "50%", height: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    Radiocircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },

    RadiocheckedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#794F9B',
    },
});

export default styles;