import React from 'react'
import { View,Text } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../../../../assets/Colors/Colors'
import styles_Categories from "./styles"
import icon_styles from './stylesIcon'

const ListCategories = () => {
    const categoryIcons = [
        <Icon name='sports-soccer'  size={30} color={COLORS.ButtonPrimary} />,
        <Icon name='restaurant' size={30} color={COLORS.ButtonPrimary} />,
        <Icon name='hotel' size={30} color={COLORS.ButtonPrimary} />,
        <Icon name='park' size={30} color={COLORS.ButtonPrimary} />,
        <Icon name='place' size={30} color={COLORS.ButtonPrimary} />,
    ]
    return (
        <View style={styles_Categories.categoryContainer}>
            {categoryIcons.map((icon, index) => (
                <Text key={index}  style={icon_styles.iconContainer} > {icon} </Text>
            ))}
        </View>
    );
};

export default ListCategories