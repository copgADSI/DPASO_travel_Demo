import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import COLORS from '../../../assets/Colors/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons'
import style from './style';

const RecommendCard = (place) => {
    console.warn(place)
    return (
        <ImageBackground style={style.rmCardImage} source={place.image}>
            <Text
                style={{
                    color: COLORS.White,
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginTop: 10,
                }}>
                {place.name}
            </Text>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                }}>
                <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="place" size={22} color={COLORS.White} />
                        <Text style={{ color: COLORS.White, marginLeft: 5 }}>
                            {place.address}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="star" size={22} color={COLORS.White} />
                        <Text style={{ color: COLORS.white, marginLeft: 5 }}>5.0</Text>
                    </View>
                </View>
                <Text style={{ color: COLORS.White, fontSize: 13 }}>
                    {place.address}
                </Text>
            </View>
        </ImageBackground>
    );
}

export default RecommendCard