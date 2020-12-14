import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import { Button } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProductProcess = ({ route }) => {
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
        <View>
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
                onPress={onPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 19,
        textAlign: 'center'
    },
    stepsList: {

    },
    step: {
        width: 185
    },
    stepTitle: {
        textAlign: 'center'
    },
    stepDesc: {
        textAlign: 'center'
    }
})

export default ProductProcess
