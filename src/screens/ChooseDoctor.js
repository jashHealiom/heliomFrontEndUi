import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import images from '../assets/images/images';
import { VitalBox } from '../components/he_VitalBox';
import Card from '../components/he_Card';
import { StarRating } from '../components/he_StarRating';
import { SpecialistCard } from '../components/HeSpecialistCard';

const styles = require('../assets/css/Style');

const ChooseDoctor = ({ navigation }) => {
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
                <Text style={{ fontSize: 22, paddingLeft: 8, marginBottom: 3, fontWeight: '400', fontFamily: 'Rubrik', color: 'black' }}>Choose a Specialist</Text>
            </View>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 18, paddingTop: 10, fontFamily: 'Rubik', textAlign: 'justify', letterSpacing: 1 }}>
                    Hey, I've found and sorted the most relevant specialists to care for you. Please review and select with whom you would like to video with.
                </Text>
            </View>
            <View>
                {/* render this in the flatlist */}
                {/* <Card style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,

                    elevation: 2,
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Image style={{ height: 80, width: 80, borderRadius: 50, }} source={require('../assets/images/signup/ash_photo.png')} />
                        <View style={{ marginLeft: 10, width: '78%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontFamily: 'Rubik', fontSize: 20, color: 'black', marginBottom: 5 }}>
                                    Dr. Molk Hess
                                </Text>
                                <Text style={{ color: '#00A896', fontSize: 18, fontFamily: 'Rubik', fontWeight: '300', marginRight: 15, marginTop: 2 }}>
                                    1 Min
                                </Text>
                            </View>
                            <Text style={{ fontFamily: 'Rubik', color: 'black', fontSize: 16 }}>
                                CARDIOLOGIST
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 8 }}>
                        <Text style={{
                            fontSize: 15, fontFamily: 'Rubik', color: 'black'
                        }}>Boston, MA, USA</Text>
                        <Text style={{
                            fontSize: 18, color: '#00A896'
                        }}>|</Text>
                        <Text style={{
                            fontSize: 15, fontFamily: 'Rubik', color: 'black'
                        }}>English, Mandarin</Text>
                        <Text style={{
                            fontSize: 18, color: '#00A896'
                        }}>|</Text>
                        <Text style={{
                            fontSize: 15, fontFamily: 'Rubik', color: 'black'
                        }}> 15 Years</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, paddingHorizontal: 5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            {items.map((item, index) => (
                                <StarRating
                                    style={{ marginRight: 3 }}
                                    // onPress={() => setRating(index)}
                                    ratedIndex={3} //add the data value from api or update onPress in state
                                    index={index}
                                />
                            ))}
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 4, fontFamily: 'Rubik', color: 'black' }}>4.25/5.0 (375)</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 4, fontFamily: 'Rubik', color: 'black' }}>$60/hr</Text>
                        </View>
                    </View>
                </Card> */}
                {/* render this in the flatlist */}
                {[[], [], []].map(() => (
                    <SpecialistCard
                        name={'Dr Ash Damle'}
                        waitTime={'2 Min'}
                        docType={'Doctor'}
                        location={'Mumbai'}
                        languages={'English/Hindi'}
                        yearsOfExperience={'20 years'}
                        ratedIndex={3}
                        rating={'4/5 (2000)'}
                        ratePerHour={'$20/hr'}
                        onPress={() => navigation.navigate('SpecialistDetails')}
                        source={require('../assets/images/signup/ash_photo.png')}
                    />
                ))}
            </View>
        </View>
    );
};

export default ChooseDoctor;
