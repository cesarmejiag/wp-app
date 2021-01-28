import React from 'react'
import { Image, StyleSheet, Text, ScrollView, View } from 'react-native'
import CartItem from './CartItem'

export default function CartList({ items }) {
    if (items.length > 0) {
        return (
            <ScrollView style={styles.scrollView}>
                { items.map((item, index) => (
                    <CartItem key={index} cartItem={item} />
                ))}
            </ScrollView>
        )
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={[styles.contentCenter, styles.emptyView]}>
                <Image
                    style={styles.emptyImage}
                    source={require('./../../../assets/img/icon-cart.png')} />
                <Text style={styles.emptyTitle}>Tu carrito está durmiendo</Text>
                <Text style={styles.emptyText}>Añade algo para que despierte</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        height: '65%',
        marginBottom: 20,
    },
    contentCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyView: {
        paddingVertical: 20
    },
    emptyImage: {
        height: 110,
        marginBottom: 20,
        resizeMode: 'cover',
        width: 89,
    },
    emptyTitle: {
        color: '#FF0132',
        fontSize: 17,
        fontFamily: 'texgyreadventor-bold',
        letterSpacing: 1,
        marginBottom: 10,
        textTransform: 'uppercase'
    }
});
