import React from 'react';


import {createStackNavigator} from '@react-navigation/stack'; 
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';

import OnboardingScreen from '../Pages/OnboardingScreen'
import ProfileScreen from '../Pages/ProfileScreen';
import CategoryScreen from '../Pages/CategoryScreen';
import PagamentosScreen from '../Pages/PagamentosScreen';
import SettingsScreen from '../Pages/SettingsScreen';
import CardScreen from '../Pages/CardScreen';

import LinearGradient from 'react-native-linear-gradient';

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (

    <LinearGradient 
        style={{
        height: '100%', 
        width: '100%', 
        }}

        start={{x:0,y:1}}
        end={{x:1,y:0}}
          locations={[.5,1,1.5]}
        colors={['#d5a5c5','#f9ccba','#94d7ee']}>
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />} 
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#0e105cab',
        drawerActiveTintColor: '#f9ccbaff',
        drawerInactiveTintColor: '#000000',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Poppins-Medium',
          fontSize: 15,
        },
      }}>

{/* <Drawer.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          drawerIcon: ({color}) => (
        <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />   */}
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Categorias"
        component={CategoryScreen}
        options={{
          drawerIcon: ({color}) => (
            <Material name="category" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pagamentos"
        component={PagamentosScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="cart-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cartões"
        component={CardScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="card-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Configurações"
        component={SettingsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
    </LinearGradient>
  );
};



export default AuthStack;


