import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, Button, ScrollView } from 'react-native'
import Logo from '../../../assets/images/TemporalLogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

const ResetPasswordScreen = () => {
    const { height } = useWindowDimensions();
    const { control, handleSubmit } = useForm()
    const navigation = useNavigation()
    const [password, setPassowrd] = useState()
    const [rePassword, setRePassowrd] = useState()


    const onConfirmPressed = () => {

    }

    const onSignInPress = () => {
        navigation.navigate('SignIn')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Nueva Contraseña</Text>
                <CustomInput
                    name="Password"
                    placeholder="Nueva Contraseña *"
                    control={control}
                />
                <CustomInput
                    name="RePassword"
                    placeholder="Confirmar Contraseña *"
                    control={control}
                />
                <CustomButton text="Actualizar" onPress={onConfirmPressed} />
                <CustomButton text="Iniciar Sesión" onPress={onSignInPress} type="TERTIARY" />
            </View>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    root: {
        marginTop: 112,
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
        color: '#051C10',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10
    },
    link: {
        color: '#FDB075'
    }
})

export default ResetPasswordScreen