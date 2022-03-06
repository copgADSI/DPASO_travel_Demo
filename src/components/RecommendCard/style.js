import { Dimensions, StyleSheet } from "react-native";
const {width} = Dimensions.get('screen');

const style = StyleSheet.create({
    rmCardImage:{
        width: width - 40,
        height: 200,
        marginRight: 20,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
    }
})

export default style;