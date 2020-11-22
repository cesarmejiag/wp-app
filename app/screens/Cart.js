import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Cart() {
    const getItems = async () => {
        try {
            const items = await AsyncStorage.getItem('product');
            console.log(items);
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <View>
            <Text>Cart</Text>
            <Button 
                title='Traer Valor'
                onPress={getItems}
            />
        </View>
    );
}

export default Cart;