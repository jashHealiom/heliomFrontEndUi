import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import He_TextInput from '../components/he_TextInput';
import HeButton from '../components/he_Button';
import Dropdown from '../components/he_DropDown';
import MultiSelect from '../components/he_multiSelect';
import He_Loader from '../components/he_Loader';
import country from '../constants/country.json';
import images from '../assets/images/images';

const styles = require('../assets/css/Style');
const componentStyles = require('../assets/css/ComponentStyle');

const ProviderIdentification = () => {
  const {itemStyle} = componentStyles;
  const [userMedicalLicense, setuserMedicalLicense] = useState('');
  const [userSocialSecurity, setuserSocialSecurity] = useState('');
  const [userCAHQNumber, setuserCAHQNumber] = useState('');

  const [countryCode, setContryCode] = useState('Country');
  const [countryCodevisible, setCountryCodeVisible] = useState(false);
  const toggleCountryCodeDropdown = () => {
    if (countryCodevisible) {
      setCountryCodeVisible(false);
    } else {
      setCountryCodeVisible(true);
    }
  };
  return (
    <ScrollView>
      {/* <He_Loader color="#0086C3" /> */}
      <View style={styles.mainView}>
        <View style={styles.backArrowContainer}>
          <TouchableOpacity onPress={() => console.log('Back')}>
            <Image
              style={styles.backArrowImage}
              source={images.leftArrow1}></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.signUpHeadText}>Provider Identification</Text>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>COUNTRY</Text>
          {/* <Dropdown
            label="Please Select"
            data={country.country}
            buttonStyle={styles.buttonDropdownStyle}
            overlay={styles.dropDownoverlay}
            dropdown={styles.dropdownSingleSelect}
          /> */}
          <Dropdown
            // ref={el => {
            //   console.log('agdhkashdjasj', el.getBoundingClientRect());
            // }}
            // visible={countryCodevisible}
            label={countryCode}
            onPress={() => toggleCountryCodeDropdown()}
            // data={Country_Code.country_code}
            // onSelect={setSelected}
            buttonStyle={styles.buttonDropdownStyle}
            // overlay={}
            // dropdown={}
          />
          {/* dropdown */}
          <Modal visible={countryCodevisible} transparent animationType="none">
            <View style={styles.dropdownOverlayCountry}>
              <FlatList
                style={[
                  styles.dropdownSingleSelectCountryCode,
                  {
                    zIndex: 1,
                    top: 176,
                  },
                ]}
                data={country.country}
                scrollEnabled={true}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={itemStyle}
                    onPress={() => {
                      setContryCode(item.item);
                      toggleCountryCodeDropdown();
                    }}>
                    <Text>{item.item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </Modal>
          {/* dropdown */}
        </View>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>
            {' '}
            NPI/Medical license identification number
          </Text>
          <He_TextInput
            placeholder="LAST NAME"
            value={userMedicalLicense}
            onChangeText={text => setuserMedicalLicense(text)}
            screenName={'SignUp'}
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
        </View>
        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>
            Social Security Number (SSN) or EIN (?)
          </Text>
          <He_TextInput
            placeholder="MIDDLE NAME"
            value={userSocialSecurity}
            onChangeText={text => setuserSocialSecurity(text)}
            screenName={'SignUp'}
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
        </View>

        <View style={styles.emailInputContainer}>
          <Text style={styles.titleText}>CAHQ Number (Optional)</Text>
          <He_TextInput
            placeholder="11-Digit No."
            screenName={'SignUp'}
            style={styles.inputView}
            styles={styles.textInputStyle}
          />
        </View>
        <HeButton
          name="Next"
          buttonText={styles.providerButtonText}
          styleButton={styles.providerCommanButton}
          onPress={() => console.log('Done')}
        />
      </View>
    </ScrollView>
  );
};

export default ProviderIdentification;
