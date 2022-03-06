import { Dimensions, StyleSheet } from "react-native";
import COLORS from "../../../assets/Colors/Colors";
const {width} = Dimensions.get("screen")

const styles_home = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.White
    },
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.ButtonPrimary
    },
    containerSecond: {
        backgroundColor: COLORS.ButtonPrimary,
        height: 120,
        paddingHorizontal: 20,
    },
    headerTitle: {
        color: COLORS.White,
        fontWeight: 'bold',
        fontSize: 23,
    },
    inputContainer: {
        height: 60,
        width: '100%',
        backgroundColor: COLORS.White,
        borderRadius: 10,
        position: 'absolute',
        top: 90,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        elevation: 12
    },  
    cardImage: {
        height: 220,
        width: width / 2,
        marginRight: 20,
        padding: 10,
        overflow: 'hidden',
        borderRadius: 10,
      },
});

export default styles_home