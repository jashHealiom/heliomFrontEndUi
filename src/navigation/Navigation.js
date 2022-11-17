import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Jash from '../screens/Jash';
import Manish from '../screens/Manish';
import SignUp from '../screens/PatientSignUp';
import ProviderSignUp from '../screens/ProviderSignUp';
import CallScreen from '../screens/CallScreen';
import ChooseDoctor from '../screens/ChooseDoctor';
import SpecialistDetails from '../screens/SpecialistDetails';
import Waiting from '../screens/Waiting';
import PreChatsVitalsScreen from '../screens/PreChatsVitalsScreen';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="callScreen"
          component={CallScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PreChatsVitalsScreen"
          component={PreChatsVitalsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="chooseDoctor"
          component={ChooseDoctor}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Waiting"
          component={Waiting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SpecialistDetails"
          component={SpecialistDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="jashScreen"
          component={Jash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManishScreen"
          component={Manish}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProviderSignUp"
          component={ProviderSignUp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
