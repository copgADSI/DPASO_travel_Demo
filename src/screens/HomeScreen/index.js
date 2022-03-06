import { View, Text, StatusBar, ScrollView, TextInput, FlatList, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles_home from './styles'
import COLORS from '../../../assets/Colors/Colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ListCategories from './ListCategories/ListCategories'
import style_places from './ListCategories/stylePlaces'
import PLACES from '../../demo_places/places'
import RecommendCard from '../../components/RecommendCard/RecommendCard'
const { width } = Dimensions.get("screen")


const index = ({ navigation }) => {
  const [filterData, setFilterData] = useState()
  const [search, setSearch] = useState()
  const filterPlace = (text) => {

    if (text) {
      const newData = PLACES.filter((place) => {
        const placeData = place.name ? place.name.toUpperCase() :
          ''.toUpperCase()
        const textData = text.toUpperCase()
        return placeData.indexOf(textData) > -1
      });
      
      setFilterData(newData);
      setSearch(text)
    }else{
      setFilterData(PLACES)
      setSearch(text)
    }
  }
  const Card = ({ place }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', place)}>
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
              <Icon name="star" size={20} color={COLORS.White} />
              <Text style={{ marginLeft: 5, color: COLORS.White }}>5.0</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  const RecommendedCard_ = ({ place }) => {
    return (
      <ImageBackground style={style_places.rmCardImage} source={place.image}>
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
                {place.location}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="star" size={22} color={COLORS.white} />
              <Text style={{ color: COLORS.White, marginLeft: 5 }}>5.0</Text>
            </View>
          </View>
          <Text style={{ color: COLORS.White, fontSize: 13 }}>
            {place.details}
          </Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <SafeAreaView style={styles_home.container}>
      <StatusBar translucent={false} backgroundColor={COLORS.ButtonPrimary} />
      <View style={styles_home.header}>
        <Icon name='sort' size={28} color={COLORS.White} />
        <Icon name='notifications-none' size={28} color={COLORS.White} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles_home.containerSecond}>
          <View>
            <Text style={styles_home.headerTitle} >Explora Lugares</Text>
            <Text style={styles_home.headerTitle}>Maravillosos!</Text>
            <View style={styles_home.inputContainer}>
              <Icon name='search' size={28} />
              <TextInput onChangeText={(text) => filterPlace(text)} placeholder='Buscar...' style={{ color: 'gray', width: "100%" }} />
            </View>
          </View>
        </View>
        <ListCategories />
        <Text style={style_places.sectionTitle}>Lugares</Text>
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filterData}
            renderItem={({ item }) => <Card place={item} />}
          />
          <Text style={style_places.sectionTitle}>Recomendados</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={PLACES}
            renderItem={({ item }) => <RecommendedCard_ place={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}




export default index