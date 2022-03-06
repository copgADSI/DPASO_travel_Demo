import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen'
import SignInScreen from '../screens/SignInScreen/SignInScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen/ResetPasswordScreen'
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen'
import HomeScreen from '../screens/HomeScreen/index'
import DetailsScreen from '../screens/HomeScreen/DetailsScreen/DetailsScreen'
import GeolocationScreen from '../screens/GeolocationScreen/GeolocationScreen'
import LetterRestaurantScreen from '../screens/LetterRestarantScreen/LetterRestaurantScreen'


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator()
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='SignIn' component={SignInScreen} />
                <Stack.Screen name='SignUp' component={SignUpScreen} />
                <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
                <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
                <Stack.Screen name='ResetPassword' component={ResetPasswordScreen} />
                <Stack.Screen name='Details' component={DetailsScreen} />
                <Stack.Screen name='LetterRestaurant' component={LetterRestaurantScreen} />
                <Stack.Screen name='Geolocation' component={GeolocationScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation