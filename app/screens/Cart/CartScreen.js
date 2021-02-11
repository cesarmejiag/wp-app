import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import CartList from './../../components/Cart/CartList'
import CartResume from './../../components/Cart/CartResume'
import globalStyles from './../../utils/styles'
import useCart from './../../hooks/useCart';

export default function CartScreen({ navigation }) {
    const { cartItems, cartTotal, addToCart, removeFromCart } = useCart();

    return (
        <ImageBackground
            source={require('./../../../assets/img/background-bottom-small.png')}
            style={styles.imageBackground}>
            <View style={styles.container}>
                <CartList
                    items={cartItems}
                    onAddToCart={addToCart}
                    onRemoveFromCart={removeFromCart} />
                <CartResume
                    subTotal={cartTotal} />
                <Button
                    title="Pagar"
                    buttonStyle={globalStyles.btn}
                    containerStyle={globalStyles.btnContainer}
                    titleStyle={globalStyles.btnTitle}
                    onPress={() => { }} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        backgroundColor: '#fff',
        flex: 1
    },
    container: {
        paddingVertical: 20,
        paddingHorizontal: 30,
    }
})
