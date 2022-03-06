import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../../../assets/Colors/Colors'
import styles_Categories from '../HomeScreen/ListCategories/styles'
import icon_styles from '../HomeScreen/ListCategories/stylesIcon'

const HeaderContainer = () => {
    const categoryIcons = [
        <Icon name='hamburger' size={30} color={COLORS.ButtonPrimary} />,
        <FontAwesome5 name='hotdog' size={30} color={COLORS.ButtonPrimary} />,
        <FontAwesome5 name='mug-hot' size={30} color={COLORS.ButtonPrimary} />,
        <FontAwesome5 name='beer' size={30} color={COLORS.ButtonPrimary} />,
        <MaterialIcons name='local-restaurant' size={30} color={COLORS.ButtonPrimary} />,
    ]
    return (
        <View style={styles_Categories.categoryContainer}>
            {categoryIcons.map((icon, index) => (
                <Text key={index} style={icon_styles.iconContainer} > {icon} </Text>
            ))}
        </View>
    )
}

export default HeaderContainer

const styles = StyleSheet.create({})