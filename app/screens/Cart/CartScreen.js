import React, { useState, useEffect } from 'react'
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import Cart from './../../utils/Cart'
import CartList from './../../components/Cart/CartList'
import CartResume from './../../components/Cart/CartResume'
import globalStyles from './../../utils/styles'
import { useIsFocused } from '@react-navigation/native'

export default function CartScreen({ navigation }) {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const getItems = () => {
        Cart.get()
            .then(cis => { setCartItems(cis) })
            .catch(err => { console.log(err) })
    }

    const clearCart = () => {
        Cart.clear()
            .then();
        getItems();
    }

    useEffect(() => {
        // 1. Get items from storage
        // 2. Fetch to server
        // 3. Update items state.
        getItems()
    }, [useIsFocused()])

    return (
        <ImageBackground
            source={require('./../../../assets/img/background-bottom-small.png')}
            style={styles.imageBackground}>
            <View style={styles.container}>
                <CartList items={cartItems} />
                <CartResume items={cartItems} />
                <Button
                    title="Pagar"
                    buttonStyle={globalStyles.btn}
                    containerStyle={globalStyles.btnContainer}
                    titleStyle={globalStyles.btnTitle}
                    onPress={clearCart} />
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
