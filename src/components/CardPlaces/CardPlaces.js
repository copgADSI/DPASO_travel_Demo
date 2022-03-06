import React from 'react'
import { View, Text, ImageBackground,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import style from './Style'
import COLORS from '../../../assets/Colors/Colors'

const CardPlaces = ({ place }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailsScreen', place)}>
      <ImageBackground style={styles_home.cardImage} source={place.image}>
        <Text
          style={{
            color: COLORS.White,
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="place" size={20} color={COLORS.White} />
            <Text style={{ marginLeft: 5, color: COLORS.White }}>
              {place.address}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="star" size={20} color={COLORS.white} />
            <Text style={{ marginLeft: 5, color: COLORS.white }}>5.0</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default CardPlaces