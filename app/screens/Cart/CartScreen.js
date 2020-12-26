import React, { useState, useEffect } from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Divider } from 'react-native-elements'
import Cart from './../../utils/Cart'
import CartItem from './../../components/Cart/CartItem'
import colors from './../../utils/colors'

export default function CartScreen({ navigation }) {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // 1. Get items from storage
    // 2. Fetch to server
    // 3. Update items state.
    const showItems = () => {
        Cart.get()
            .then(cis => { setCartItems(cis) })
            .catch(err => { console.log(err) })
    }

    useEffect(() => {
        showItems()
    })

    return (
        <View style={styles.cartScreen}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.list}>
                    {cartItems.map((ci, index) => {
                        return (
                            <CartItem key={index} cartItem={ci} />
                        )
                    })}
                </View>
            </ScrollView>
            <ImageBackground
                source={require('./../../../assets/img/background-bottom-small.png')}
                style={styles.imageBackground}>
                <View style={styles.resume}>
                    <View style={styles.concept}>
                        <Text>Sub-total</Text>
                        <Text>$ 0.0</Text>
                    </View>
                    <Divider style={styles.divider} />
                    <View style={styles.concept}>
                        <Text>Añadir un código de descuento</Text>
                        <Text>$ 0.0</Text>
                    </View>
                </View>
            </ImageBackground>
            <Button
                title="Pagar"
                buttonStyle={{ backgroundColor: colors.ctaBgButton, borderRadius: 8, width: 170 }}
                titleStyle={{ color: colors.ctaColorButton, textTransform: 'uppercase' }}
                containerStyle={{ alignItems: 'center' }}
                onPress={showItems} />
        </View>
    );
}

const styles = StyleSheet.create({
    cartScreen: {
        backgroundColor: "#fff",
        flex: 1,
        paddingBottom: 20,
        paddingHorizontal: 30,
    },
    scrollView: {
        height: '60%',
        overflow: 'scroll',
    },
    imageBackground: {
        height: '15%',
        resizeMode: 'cover'
    },
    concept: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    divider: {
        backgroundColor: '#494949'
    },
});
