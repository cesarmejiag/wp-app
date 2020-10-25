import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Cart from './../screens/Cart'

const Stack = createStackNavigator();

function CartStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="cart"
                component={Cart}
                options={{ title: 'Carrito' }} />
        </Stack.Navigator>
    );
}

export default CartStack
