/* import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import DetailsScreen from '../HomeScreen/DetailsScreen/DetailsScreen';
import Plate from './Plate';
import COLORS from '../../../assets/Colors/Colors';

const Tab = createMaterialBottomTabNavigator();

const LetterRestaurantScreen = () => {
  return (
    <Tab.Navigator
      activeColor={COLORS.White}
      barStyle={{ backgroundColor: COLORS.ButtonPrimary }}
    >
      <Tab.Screen
        name="Feed"
        component={Plate}
        options={{
          tabBarLabel: 'Carta',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Geolocalizar',
          tabBarIcon: ({ color }) => (
            <Entypo name="location" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default LetterRestaurantScreen */