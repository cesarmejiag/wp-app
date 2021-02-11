import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Divider, Icon } from 'react-native-elements'
import Formatter from './../../utils/Formatter'

export default function CartItem({ item, onAddToCart, onRemoveFromCart }) {
    const { product_image, product_name, price, quantity } = item;

    const add = () => onAddToCart(item)
    const subtract = () => onRemoveFromCart(item)

    return (
        <View>
            <View style={styles.product}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={{ height: 90, resizeMode: 'cover', width: 90 }}
                        source={{ uri: product_image }} />
                </View>
                <View style={{ paddingLeft: 10, width: '45%' }}>
                    <Text>{product_name}</Text>
                </View>
                <View style={{ width: '25%' }}>
                    <Text style={{ textAlign: 'right' }}>{Formatter.currency(price)}</Text>
                </View>
            </View>
            <Divider style={styles.divider} />

            <View style={[styles.row, styles.edit]}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon type="material-community" name="pencil" size={20} color="#3241F0" />
                    <Text style={{ paddingLeft: 5 }}>Editar</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon type="material-community" name="plus" size={20} onPress={add} color="#fff" containerStyle={{ backgroundColor: '#3241F0', borderRadius: 50, }} />
                    <Text style={{ marginHorizontal: 10 }}>{quantity}</Text>
                    <Icon type="material-community" name="minus" size={20} onPress={subtract} color="#fff" containerStyle={{ backgroundColor: '#3241F0', borderRadius: 50, }} />
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
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 20
    },
    imageWrapper: {
        backgroundColor: '#fff',
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
        elevation: 3,
    },

    row: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 8
    },
    edit: {

    },
    gift: {
        marginTop: 5
    },
    divider: {
        backgroundColor: '#494949'
    }
})
