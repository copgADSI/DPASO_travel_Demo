import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import COLORS from '../../../assets/Colors/Colors'

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {}
      ]}>
      <Text style={[
        styles.text,
        styles[`text_${type}`],
        fgColor ? { color: fgColor } : {}
      ]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: COLORS.ButtonPrimary,
  },
  container_SECONDARY:{
    borderColor:COLORS.ButtonPrimary,
    borderWidth:2,
  },
  container_TERTIARY: {

  },
  text_PRIMARY: {
    fontWeight: 'bold',
    color: 'white'

  },
  text_SECONDARY:{
    color: COLORS.ButtonPrimary
  },
  text_TERTIARY: {
    color: COLORS.ButtonPrimary

  }
})

export default CustomButton