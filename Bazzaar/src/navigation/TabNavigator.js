/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


import HomeScreen from '../Pages/HomeScreen'; 
import OnboardingScreen from '../Pages/OnboardingScreen'; 
import CartScreen from '../Pages/CartScreen';
import FavoriteScreen from '../Pages/FavoriteScreen';
import RoupaDetailsScreen from '../Pages/RoupaDetailsScreen';

import AppScreen from '../navigation/AppStack'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Font from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
/*     <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      /> */
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RoupaDetails"
        component={RoupaDetailsScreen}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#0e105cab'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#f9ccbaff',
      }}>
{/*       <Tab.Screen
        name="Inicio"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#0e105cab',
          },
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      /> */}
      <Tab.Screen
        name="Inicio"
        component={OnboardingScreen}
        onPress={() => navigation.navigate('HomeStack')}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#0e105cab',
          },
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={24} />
          ),
        })}
      />
      <Tab.Screen
        name="Compras"
        component={HomeStack}
        options={{
          /* tabBarBadge: 3, */
          tabBarBadgeStyle: {backgroundColor: '#f9ccbaff'},
          tabBarIcon: ({color, size}) => (
            <Font name="shopping-bag" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={CartScreen}
        options={{
          /* tabBarBadge: 3, */
          tabBarBadgeStyle: {backgroundColor: '#f9ccbaff'},
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cart-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="heart-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'RoupaDetails' ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
