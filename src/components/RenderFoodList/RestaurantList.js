import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const FoodList = () => {
    
    const RenderFoodList = ({item}) => (
        <TouchableOpacity
            style={styles.container}
        >
            <View>
                <Image
                    source={item.image}
                    resizeMode="cover"
                    
                    style={{

                        width: "100%",
                        height: 200,
                        borderRadius: 4,
                    }}
                />
            </View>
        </TouchableOpacity>
    )
}



export default RenderFoodList

const styles = StyleSheet.create({

    container: {
        marginBottom: 22,
        padding: 20
    }
})