import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import Item from './../../components/Product/Item'
import colors from './../../utils/colors'

export default function ProductDetail({ navigation, route }) {
    const item = route.params.item
    const { id, description } = item
    const onPress = () => {
        navigation.navigate('product-process', { id })
    }

    return (
        <ScrollView>
            <ImageBackground
                source={require('./../../../assets/img/background-category.png')}
                style={styles.imageBackground}>
                <View style={styles.container}>
                    <View style={styles.itemContainer}>
                        <Item item={item} />
                    </View>
                    <Text style={styles.title}>Caracteristicas</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Button
                        title="Activar"
                        buttonStyle={{ backgroundColor: colors.ctaBgButton, borderRadius: 8, width: 170 }}
                        titleStyle={{ color: colors.ctaColorButton, textTransform: 'uppercase' }}
                        containerStyle={{ alignItems: 'center' }}
                        onPress={onPress} />
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        backgroundColor: '#fff',
        minHeight: '100%',
        resizeMode: 'contain'
    },
    container: {
        marginHorizontal: 45,
        marginVertical: 20
    },
    itemContainer: {
        marginVertical: 20
    },
    title: {
        color: "#3A3A3A",
        fontFamily: 'texgyreadventor-bold',
        fontSize: 19,
        textTransform: "uppercase"
    },
    description: {
        color: "#3A3A3A",
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 15,
        lineHeight: 20,
        marginBottom: 40
    }
})
