import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'
import Icon from "react-native-vector-icons/MaterialIcons"

const SocialSignInButtons = () => {

    const onSignInGoogle = () => {

    }
    return (
        <>  
            <CustomButton text="Iniciar Sesión con Google " onPress={onSignInGoogle} bgColor="#726F62" fgColor="#FAE9EA" />
        </>
    )
}

export default SocialSignInButtons