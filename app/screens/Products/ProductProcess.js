import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import colors from './../../utils/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function ProductProcess({ route }) {
    const onPress = async () => {
        try {
            const { id } = route.params.id

            // Retrieve cart products.
            let productsStr = await AsyncStorage.getItem('cart-products')
            let products

            if (!productsStr) {
                products = []
            } else {
                products = JSON.parse(productsStr)
            }

            products.push(id)
            AsyncStorage.setItem('cart-products', JSON.stringify(products))

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ImageBackground
            source={require('./../../../assets/img/background-top-small.png')}
            style={styles.imageBackground}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Proceso</Text>
                    <View style={styles.stepsList}>
                        <View style={styles.step}>
                            <Text style={styles.stepTitle}>1. Selecciona tus fotos</Text>
                            <Text style={styles.stepDesc}>Selecciona 13 fotos para tu álbum</Text>
                        </View>
                        <View style={styles.step}>
                            <Text style={styles.stepTitle}>2. Auto relleno</Text>
                            <Text style={styles.stepDesc}>Nuestra App acomoda tus fotos de la mejor manera</Text>
                        </View>
                        <View style={styles.step}>
                            <Text style={styles.stepTitle}>3. Personaliza</Text>
                            <Text style={styles.stepDesc}>Puedes recortar y acomodar tus fotos para que luzcan mejor</Text>
                        </View>
                    </View>

                    <Button
                        title='Continuar'
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
        resizeMode: 'cover'
    },
    container: {
        paddingBottom: 20,
        paddingHorizontal: 45,
    },
    title: {
        color: "#3A3A3A",
        fontFamily: 'texgyreadventor-bold',
        fontSize: 19,
        marginBottom: 30,
        textAlign: "center"
    },
    stepsList: {
        alignItems: "center"
    },
    step: {
        marginBottom: 30,
        width: 220
    },
    stepTitle: {
        color: "#000",
        fontFamily: 'texgyreadventor-bold',
        fontSize: 15,
        textAlign: 'center'
    },
    stepDesc: {
        color: "#000",
        fontFamily: 'AvenirLTStd-Book',
        fontSize: 14,
        textAlign: 'center'
    }
})
