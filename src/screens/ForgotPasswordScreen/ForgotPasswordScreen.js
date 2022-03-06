import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, Button, ScrollView } from 'react-native'
import Logo from '../../../assets/images/TemporalLogo.png'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'


const ForgotPasswordScreen = () => {
    const { height } = useWindowDimensions();
    const { control, handleSubmit } = useForm()
    const navigation = useNavigation()

    const [email, setEmail] = useState()

   
    const onConfirmPressend = () => {

        navigation.navigate('ResetPassword')

    }

    const onSignInPress = () => {
        navigation.navigate('SignIn')

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Recuperar Contraseña</Text>
                <CustomInput
                    name="Email"
                    placeholder="Ingrese Email *"
                    control={control}
                />

                <CustomButton text="Enviar" onPress={onConfirmPressend} />
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

export default ForgotPasswordScreen