import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, Button, ScrollView, ImageBackground, StatusBar } from 'react-native'
import Logo from '../../../assets/images/TemporalLogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { useForm, Controller } from 'react-hook-form'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify';
import COLORS from '../../../assets/Colors/Colors'
import Icon from "react-native-vector-icons/MaterialIcons"

const SignUpScreen = () => {
    const { height } = useWindowDimensions();
    const { control, handleSubmit, watch } = useForm()
    const pwd = watch('')
    const navigation = useNavigation()
    const EMAIL_REGEX =
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const [email, setEmail] = useState()
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [phone, setPhone] = useState('')

    const onRegisterPress = () => {
        navigation.navigate('ConfirmEmail')
    }
    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }
    const onTermsOfUsePressed = () => {


    }

    const onPrivacyPressed = () => {

    }
    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor={COLORS.Primary} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
                    <Text style={styles.title}>Regístrate para Continuar</Text>
                    <CustomInput
                        name="Email"
                        placeholder="Ingrese Email *"
                        control={control}
                        rules={{
                            required: 'Email es Requerido *',
                            pattern: { value: EMAIL_REGEX, message: 'Email es Inválido' },
                        }}
                    />
                    <CustomInput
                        name="Password"
                        placeholder="Ingrese Contraseña *"
                        control={control}
                        secureTextEntry
                        rules={{
                            required: 'Contraseña es Requerida',
                            minLength: {
                                value: 8,
                                message: 'La contraseña debe ser por lo menos de 8 carácteres',
                            },
                        }}
                    />
                    <CustomInput
                        name="password-repeat"
                        control={control}
                        placeholder="Repeat Password"
                        secureTextEntry
                        rules={{
                            validate: value => value === pwd || 'Las Contraseñas no Coinciden',
                        }}
                    />
                    <CustomInput
                        name="Phone"
                        placeholder="Ingrese Teléfono *"
                        control={control}
                        rules={{
                            require: 'Email es Requerido *',
                            minLength: {
                                value: 11,
                                message: "Debe Ingresar un Número de Teléfono Válido"
                            }
                        }}
                    />

                    <CustomButton text="Regístrate" onPress={handleSubmit(onRegisterPress)} />
                    <SocialSignInButtons />
                    <CustomButton text="Iniciar Sesión" onPress={onSignInPress} type="TERTIARY" />

                    <Text style={styles.text}>
                        Al registrarse aceptas los {' '}
                        <Text style={styles.link} onPress={onTermsOfUsePressed}> {' '}
                            terminos de uso
                        </Text> y {' '}
                        <Text style={styles.link} onPress={onPrivacyPressed}>
                            privacidad
                        </Text>
                    </Text>


                </View>
            </ScrollView>
        </View>

    )

}
const styles = StyleSheet.create({
    root: {
        marginTop: 80,
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 2,
        maxWidth: 300,
        maxHeight: 200
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        margin: 10,
    },
    text: {
        color: 'white',
        marginVertical: 10
    },
    link: {
        color: '#FDB075'
    }
})

export default SignUpScreen