import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import ProductStack from './../navigations/ProductStack'
import ProfileStack from './../navigations/ProfileStack'
import CartStack from './../navigations/CartStack'

// References:
// Navigation - https://reactnavigation.org/
// React Native Elements - https://reactnativeelements.com/

const Tab = createBottomTabNavigator()

/**
 * Define screen options of navigation.
 * @param {any} route 
 * @param {string} color 
 */
const screenOptions = (route, color) => {
    let iconName

    switch (route.name) {
        case "product-list":
            iconName = "home-outline"
            break
        case "profile":
            iconName = "account-outline"
            break
        case "cart":
            iconName = "cart-outline"
            break
        default:
            break
    }

    return (
        <Icon type="material-community" name={iconName} size={25} color={"#3241F0"} />
    )
}

/**
 * Create Navigation component.
 * @returns {JSX}
 */
const Navigation = () => (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName="product-list"
            tabBarOptions={{
                activeTintColor: "#717171",
                activeBackgroundColor: "#ffffff",
                inactiveTintColor: "#717171",
                inactiveBackgroundColor: "#ffffff",
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color)
            })}>
            <Tab.Screen
                name="product-list"
                component={ProductStack}
                options={{ title: 'Inicio' }} />
            <Tab.Screen
                name="profile"
                component={ProfileStack}
                options={{ title: 'Mi Perfil' }} />
            <Tab.Screen
                name="cart"
                component={CartStack}
                options={{ title: 'Carrito' }} />
        </Tab.Navigator>
    </NavigationContainer>
)

export default Navigation
