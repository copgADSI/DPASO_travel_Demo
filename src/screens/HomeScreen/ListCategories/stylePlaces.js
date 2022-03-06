import { Dimensions, StyleSheet } from "react-native";
const {width} = Dimensions.get('screen');

const style_places = StyleSheet.create({
    sectionTitle: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
     rmCardImage:{
        width: width - 40,
        height: 200,
        marginRight: 20,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
    }
})

export default style_places