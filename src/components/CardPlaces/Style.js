import { Dimensions, StyleSheet } from "react-native";
const {width} = Dimensions.get("screen")
const style = StyleSheet.create({
    cardImage:{
        height:220,
        width: width / 2,
    }
})
export default style