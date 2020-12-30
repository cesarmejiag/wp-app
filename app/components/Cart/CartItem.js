import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import Formatter from './../../utils/Formatter'

export default function CartItem({ cartItem }) {
    const { item, quantity } = cartItem
    const { name, sale_price, main_photo_path } = item

    return (
        <View>
            <View style={styles.product}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        source={{ uri: main_photo_path }} />
                </View>
                <View style={styles.desc}>
                    <Text>{name}</Text>
                </View>
                <View style={styles.price}>
                    <Text>{Formatter.currency(sale_price)}</Text>
                </View>
            </View>
            <Divider style={styles.divider} />

            <View style={[styles.row, styles.edit]}>
                <Text>Editar</Text>
                <View>
                    <Text>{quantity}</Text>
                </View>
            </View>
            <Divider style={styles.divider} />

            <View style={[styles.row, styles.gift]}>
                <Text>¿Es un regalo?... Esconde el precio</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    product: {
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: 13,
        paddingHorizontal: 5,
        paddingVertical: 20
    },
    imageWrapper: {
        borderRadius: 13,
        height: 90,
        width: 90,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.34,
        shadowRadius: 3,
        elevation: 2,
    },
    image: {
        height: 90,
        width: 90
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    edit: {

    },
    gift: {

    },
    divider: {
        backgroundColor: '#494949'
    }
})
