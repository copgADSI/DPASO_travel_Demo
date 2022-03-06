import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { View, Text, Image, StyleSheet, useWindowDimensions, Button, ScrollView, TextInput, ImageBackground, StatusBar } from 'react-native'
import Logo from '../../../assets/images/TemporalLogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import COLORS from '../../../assets/Colors/Colors'

const SignInScreen = () => {
    const { control, handleSubmit, formState: { errors } } = useForm()
    const navigation = useNavigation()
    const { height } = useWindowDimensions();
    const onSignInPressed = (data) => {
        navigation.navigate('Home')
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword')
    }


    const onSignUpPress = () => {
        navigation.navigate('SignUp')
    }

    return (
        <View style={{ flex: 1,backgroundColor:COLORS.Primary}}>
             <StatusBar translucent backgroundColor={COLORS.ButtonPrimary} />
           {/*  <ImageBackground
                style={{ flex: 1 }}
                source={require('../../../assets/images/mainLogo.jpg')}
            > */}

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.root}>
                        <Image style={styles.logo} source={require('../../../assets/images/DPASO_LOGO.png')} />
                        <CustomInput
                            name="Email"
                            placeholder="Ingrese Email"
                            control={control}
                            rules={{ required: 'Email es requerido' }}
                        />
                        <CustomInput
                            name="Password"
                            placeholder="Ingrese Contraseña"
                            control={control}
                            secureTextEntry
                            rules={{
                                required: 'Contraseña es Requerida',
                                minLength: {
                                    value: 3,
                                    message: 'La Contraseña debe ser de 3 caráteres por lo menos',
                                },
                            }}
                        />
                        <CustomButton text="Iniciar Sesión" onPress={handleSubmit(onSignInPressed)} />
                        <SocialSignInButtons />
                        <CustomButton text="Olvidé mi Contraseña " onPress={onForgotPasswordPressed} type="TERTIARY" />
                        <CustomButton text="No Tengo una Cuenta " onPress={onSignUpPress} type="TERTIARY" />
                    </View>
                </ScrollView>
           {/*  </ImageBackground> */}

        </View>
    )

}
const styles = StyleSheet.create({
    root: {
        marginTop: 62,
        marginLeft:12,
        marginRight:12,
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        marginBottom:2,
        width: 402,
        maxWidth: 300,
        maxHeight: 200
    }
})

export default SignInScreen