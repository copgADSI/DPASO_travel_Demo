import {
  StyleSheet
} from 'react-native'
import COLORS from '../../../assets/Colors/Colors'

const styles = StyleSheet.create({
  container: {

  },
  header: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  container_food_image: {
    marginTop: 64,
    borderRadius: 45,
    width: "100%",
    alignItems: "center",

  },
  container_food_detail: {
    position: "absolute",
    bottom: 0,
    height: 50,
    width: 200,
    backgroundColor: COLORS.White,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  }
})

export default styles