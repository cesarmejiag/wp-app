import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import ProductStack from '../navigations/ProductStack'
import ProfileStack from '../navigations/ProfileStack'
import CartStack from '../navigations/CartStack'

// References:
// Navigation - https://reactnavigation.org/
// React Native Elements - https://reactnativeelements.com/

const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="product-list"
                tabBarOptions={{
                    activeTintColor: "#717171",
                    activeBackgroundColor: "#D8D8D8",
                    inactiveTintColor: "#717171",
                    inactiveBackgroundColor: "#BABABA"
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
                    options={{ title: 'Mi perfil' }} />
                <Tab.Screen
                    name="cart"
                    component={CartStack}
                    options={{ title: 'Carrito' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function screenOptions(route, color) {
    let iconName;

    switch (route.name) {
        case "product-list":
            iconName = "home-outline";
            break;
        case "profile":
            iconName = "account-outline";
            break;
        case "cart":
            iconName = "cart-outline";
            break;
        default:
            break;
    }

    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    )
}

export default Navigation;
