import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import Item from './../../components/Product/Item'
import colors from './../../utils/colors'

export default function ProductDetail({ navigation, route }) {
    const item = route.params.item
    const { description } = item
    const onPress = () => { navigation.navigate('product-process', { item }) }

    return (
        <ImageBackground
            source={require('./../../../assets/img/background-top-large.png')}
            style={styles.imageBackground}>
            <ScrollView>
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
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        backgroundColor: '#fff',
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        paddingBottom: 20,
        paddingHorizontal: 45,
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
