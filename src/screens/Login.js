import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CommanTextInput from '../components/CommonTextInput';
import MainButton from '../components/MainButton';
import Dropdown from '../components/DropDown';
import RadioButton from '../components/RadioButton';
import Country_Code from '../constants/Country_Code.json';
const styles = require("../assets/css/Style");
const Login = () => {
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [selected, setSelected] = useState(undefined);
    const options = [
        {
            key: 'Email',
            text: 'Email',
        },
        {
            key: 'Moblie',
            text: 'Moblie',
        },
    ];
    const onSelect = (item) => {
        if (selectedOption && selectedOption.key === item.key) {
            setSelectedOption(null);
        } else {
            setSelectedOption(item);
        }
    };
    return (
        <View style={styles.MainView}>
            <Text style={styles.HeadText}>Log In</Text>
            <RadioButton
                selectedOption={selectedOption}
                onSelect={onSelect}
                options={options}
            />
            {selectedOption.text === 'Email' ?
                (<>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.labelEmailTextLogin}>EMAIL</Text>
                        <CommanTextInput
                            name='Email'
                            style={styles.InputView}
                            styles={styles.textInputSyle}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.labelEmailTextLogin}>PASSWORD</Text>
                        <CommanTextInput
                            name='Password'
                            screenName={'login'}
                            style={styles.InputView}
                            styles={styles.textInputStyle}
                        />
                    </View>
                </>) :
                (<>
                    <View style={{ marginTop: 20, }}>
                        <Text style={styles.labelEmailTextLogin}>Moblie</Text>
                        <View style={styles.MobileInputContainer}>
                            <Dropdown label="Select Item" data={Country_Code.country_code} onSelect={setSelected} />
                            <CommanTextInput
                                name='Moblie No'
                                screenName={'login'}
                                style={styles.InputView1}
                                styles={styles.textInputStyle1}
                            />
                        </View>
                    </View>
                    <View style={styles.EmailInputContainer}>
                        <Text style={styles.labelEmailTextLogin}>PASSWORD</Text>
                        <CommanTextInput
                            name='Password'
                            screenName={'login'}
                            style={styles.InputView}
                            styles={styles.textInputStyle}
                        />
                    </View>
                </>)}
            <MainButton
                name='Login'
                ButtonText={styles.ButtonText}
                styleButton={styles.CommanButton}
                onPress={() => navigation.navigate('')} />
        </View>
    )
}

export default Login
