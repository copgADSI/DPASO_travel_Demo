import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  TextInput,
  ImageBackground
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import React from 'react'
import Tabs from '../../Navigation/Tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import HeaderContainer from './HeaderContainer';
import styles_home from '../HomeScreen/styles';
import COLORS from '../../../assets/Colors/Colors';
import { getFoodByPlacestId } from '../../demo_places/places';

const LetterRestaurantScreen = ({ navigation, route }) => {
  const foods = route.params
  const RenderFoodList = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}>

        <View style={styles.container_food_image}>
          {Object.values(foods.letter).map((food, index) => (
            <View style={{
              marginTop: 22,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Image source={food.food_image} style={{ borderRadius: 35, width: "90%" }} />
              <View style={styles.container_food_detail}>
                <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
                  {food.food_name}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
                  $ {food.food_price}
                </Text>
              </View>
            </View>

          ))}



        </View>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={COLORS.ButtonPrimary} />

      <ScrollView showsVerticalScrollIndicator={false} >
        
        <View style={styles_home.containerSecond}>
          
          <View>
        
            <View style={styles.header}>
              <Icon
                name="arrow-back-ios"
                size={24}
                color={COLORS.White}
                onPress={navigation.goBack}

              />
             
            </View>
            <Text style={styles_home.headerTitle} >Nuestra Carta</Text>
            <Text style={styles_home.headerTitle} >  </Text>
            <View style={styles_home.inputContainer}>
              <Icon name='search' size={28} />
              <TextInput placeholder='Buscar...' style={{ color: 'gray', width: '100%' }} />
            </View>
          </View>
        </View>
        <HeaderContainer />
        <RenderFoodList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default LetterRestaurantScreen