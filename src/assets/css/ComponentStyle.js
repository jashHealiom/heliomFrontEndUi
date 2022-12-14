import {StyleSheet, Dimensions} from 'react-native';
import colors from './colorStyle';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  button: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  checkedButton: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#04549b',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  radioContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  radioButtonContainer: {
    width: '50%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  radioCircle: {
    height: 18,
    width: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioCheckedCircle: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: colors.Patient,
  },
  radioButtonItem: {
    marginLeft: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    height: 40,
    zIndex: 1,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  buttonText: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    // position: "absolute",
    backgroundColor: '#fff',
    width: '100%',
    height: 160,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
    marginHorizontal: 20,
  },
  overlay: {
    width: '90%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  multiSelectSearchContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: colors.Patient,
  },

  multiSelectSearchMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  multiSelectSearchIcon: {
    marginLeft: 5,
  },
  multiSelectBackIcon: {
    alignItems: 'flex-end',
    paddingRight: 6,
  },
  multiSelectSearchTextInput: {
    marginLeft: 5,
    width: '87%',
    borderTopWidth: 1,
    borderTopColor: colors.Patient,
  },
  multiSelectSearchTextInputProvider: {
    marginLeft: 5,
    width: '87%',
    borderTopWidth: 1,
    borderTopColor: colors.Provider,
  },
  selectedDropDownItemPatient: {
    flexDirection: 'row',
    borderWidth: 1,
    marginRight: 5,
    marginVertical: 3,
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.Patient,
    borderRadius: 20,
  },
  selectedDropDownItem: {
    flexDirection: 'row',
    borderWidth: 1,
    marginRight: 5,
    marginVertical: 3,
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.Provider,
    borderRadius: 20,
  },
  selectedDropDownContainer: {
    flexDirection: 'row',
    width: '96%',
    backgroundColor: '#FAFAFA',
    // marginHorizontal: 20,
    flexWrap: 'wrap',
  },
  SelectedDropDownTextPatient: {color: colors.Patient, fontSize: 18},
  SelectedDropDownText: {color: colors.Provider, fontSize: 18},
  itemStyle: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.Patient,
  },
  itemStyleProvider: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.Provider,
  },
  itemMultiSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.Patient,
  },
  ProviderItemMultiSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.Provider,
  },
  // date picker styles
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    // width: "100%",
    borderBottomWidth: 1,
    backgroundColor: '#ffffff',
    height: 40,
  },

  datePickerTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    alignSelf: 'center',
  },

  // Style for iOS ONLY...
  datePickerStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
  touchableSizeIncreaseStyle: {
    //   backgroundColor: 'black',
    padding: 10,
    // alignItems: "center",
    position: 'absolute',
    right: -8,
    bottom: -28,
  },
  // date picker styles end
});
