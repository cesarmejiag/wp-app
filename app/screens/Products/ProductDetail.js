import React from 'react'
import {
    ImageBackground,
    StyleSheet,
    ScrollView,
    View,
    Text
} from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

function ProductDetail({ route }) {
    const { name, description, main_photo_path } = route.params.productData
    const navigation = useNavigation()

    return (
        <ScrollView style={styles.view}>
            <ImageBackground
                style={styles.image}
                source={{
                    uri: main_photo_path
                }}>
                <Text style={styles.name}>{name}</Text>
            </ImageBackground>
            <Text style={styles.title}>Caracteristicas</Text>
            <Text style={styles.description}>{description}</Text>
            <View>
                <Button
                    title="Crear"
                    buttonStyle={styles.button}
                    onPress={() => {
                        navigation.navigate('product-process')
                    }} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingHorizontal: 50
    },
    image: {
        alignItems: "center",
        borderColor: "#979797",
        borderRadius: 13,
        borderWidth: 1,
        flex: 1,
        height: 265,
        justifyContent: "center",
        marginBottom: 15,
        marginTop: 40,
        overflow: "hidden",
        width: "100%"
    },
    name: {
        color: "#ffffff",
        fontSize: 19,
        textAlign: "center",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
        textTransform: "uppercase"
    },
    title: {
        fontSize: 19,
        textTransform: "uppercase"
    },
    description: {
        fontSize: 15,
        marginBottom: 20
    },
    button: {
        backgroundColor: "#9B9B9B",
        marginBottom: 40
    }
})

export default ProductDetail

