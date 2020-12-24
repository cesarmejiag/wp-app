import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CartScreen from './../screens/Cart/CartScreen'

const Stack = createStackNavigator();

function CartStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'Heavitas',
                    textTransform: 'uppercase'
                }
            }}>
            <Stack.Screen
                name="cart"
                component={CartScreen}
                options={{ title: 'Carrito' }} />
        </Stack.Navigator>
    );
}

export default CartStack
