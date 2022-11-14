import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import images from '../assets/images/images';
import { VitalBox } from '../components/he_VitalBox';
import Card from '../components/he_Card';
import { StarRating } from '../components/he_StarRating';
import { SpecialistCard } from '../components/HeSpecialistCard';
import HeButton from '../components/HeButton';

const styles = require('../assets/css/Style');

const SpecialistDetails = ({ navigation }) => {
    const [mute, setMute] = useState(false);
    const [videoOn, setVideoOn] = useState(true);
    let items = ['', '', '', '', '']; // add with star component
    const [rating, setRating] = useState(0); // rating component

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 20 }}>
            <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => { navigation.goBack() }}>
                    <Image style={{ paddingTop: 3, color: 'black' }} source={require('../assets/images/signup/arrow_left.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 22, paddingLeft: 8, marginBottom: 3, fontWeight: '400', fontFamily: 'Rubrik', color: 'black' }}>Specialist Details</Text>
            </View>
            <View style={{ marginBottom: 10, height: 220, width: '100%', backgroundColor: 'black', marginTop: 15, borderRadius: 8 }}>
            </View>
            {/* <View>
                {[[], [], []].map(() => (
                    <SpecialistCard
                        name={''}
                        waitTime={'2 Min'}
                        docType={'Doctor'}
                        location={'Mumbai'}
                        languages={'English/Hindi'}
                        yearsOfExperience={'20 years'}
                        ratedIndex={3}
                        rating={'4/5 (2000)'}
                        ratePerHour={'$20/hr'}
                        onPress={navigation.navigate('SpecialistDetails')}
                    />
                ))}
            </View> */}
            {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}> */}
            {/* <Image style={{ height: 65, width: 65, borderRadius: 50, }} source={require('../assets/images/signup/ash_photo.png')} /> */}
            <View style={{ marginBottom: 20 }}>
                <View style={{ width: '100%', marginTop: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Rubik', fontSize: 20, color: 'black', marginBottom: 5 }}>
                            {'Dr Ash Damle'}
                        </Text>
                        <Text style={{ color: '#00A896', fontSize: 18, fontFamily: 'Rubik', fontWeight: '300', marginTop: 2 }}>
                            {'Available'}
                        </Text>
                    </View>
                    <Text style={{ fontFamily: 'Rubik', color: 'black', fontSize: 16 }}>
                        {'Doctor'}
                    </Text>
                </View>
                {/* </View> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                    <Text style={{
                        fontSize: 15, fontFamily: 'Rubik', color: 'black'
                    }}>{'Mumbai'}</Text>
                    <Text style={{
                        fontSize: 18, color: '#00A896'
                    }}>|</Text>
                    <Text style={{
                        fontSize: 15, fontFamily: 'Rubik', color: 'black'
                    }}>{'English/Hindi'}</Text>
                    <Text style={{
                        fontSize: 18, color: '#00A896'
                    }}>|</Text>
                    <Text style={{
                        fontSize: 15, fontFamily: 'Rubik', color: 'black'
                    }}>{'20 years'}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        {[[], [], [], [], []].map((item, index) => (
                            <StarRating
                                style={{ marginRight: 3, marginTop: 4 }}
                                // onPress={() => setRating(index)}
                                ratedIndex={3} //add the data value from api or update onPress in state
                                index={index}
                            />
                        ))}
                        <Text style={{ fontSize: 18, marginLeft: 30, marginTop: 4, fontFamily: 'Rubik', color: 'black' }}>{'4/5 (2000)'}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 4, fontFamily: 'Rubik', color: 'black' }}>{'$20/hr'}</Text>
                    </View>
                </View>
            </View>
            <Text>Here will be a tab bar navigation and there are 2 screens 1.Description, 2. Reviews</Text>

            <Card style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Image source={require('../assets/images/signup/ash_photo.png')} style={{ height: 40, width: 40, borderRadius: 50, }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '91%', marginLeft: 12 }}>
                            <View>
                                <Text>Patient 1</Text>
                                <Text>Patient 1</Text>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    {[[], [], [], [], []].map((item, index) => <StarRating index={index} ratedIndex={3} style={{ paddingLeft: 4 }} starStyle={{ height: 18, width: 18 }} />)}
                                </View>
                                <Text>4.25/5.0 (375)</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Card>

            <HeButton
                name="Talk Now"
                buttonText={styles.buttonText}
                styleButton={styles.commanButton}
                onPress={() => console.log('Navigate to video preview screen')}
            />
        </View>
    );
};

export default SpecialistDetails;
