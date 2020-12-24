import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import Cart from './../../utils/Cart'

export default function CartScreen({ navigation }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // 1. Get items from storage
    // 2. Fetch to server
    // 3. Update items state.
    useEffect(() => {
        console.log(':D');
    }, [navigation])

    return (
        <View>
            <Text>Cart</Text>
            <Button
                title='Pagar'
                onPress={() => console.log(':D')}
            />
        </View>
    );
}
