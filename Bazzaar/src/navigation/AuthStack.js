import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from '../Pages/OnboardingScreen';
import HomeStack from '../Pages/HomeStack';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (

       <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
            name="Onboarding" 
            component={OnboardingScreen} 
            /> 
            <HomeStack/>
        </Stack.Navigator> 

  );
};

export default AuthStack;
