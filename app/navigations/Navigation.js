import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import ProductStack from '../navigations/ProductStack'
import ProfileStack from '../navigations/ProfileStack'
import CartStack from '../navigations/CartStack'
import { tabNavigator } from './../Styles'

// References:
// Navigation - https://reactnavigation.org/
// React Native Elements - https://reactnativeelements.com/

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="product-list"
                tabBarOptions={{
                    activeTintColor: tabNavigator.color,
                    activeBackgroundColor: tabNavigator.backgroundColor,
                    inactiveTintColor: tabNavigator.color,
                    inactiveBackgroundColor: tabNavigator.backgroundColor,
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)
                })}>
                <Tab.Screen
                    name="product-list"
                    component={ProductStack}
                    options={{ title: 'INICIO' }} />
                <Tab.Screen
                    name="profile"
                    component={ProfileStack}
                    options={{ title: 'MI PERFIL' }} />
                <Tab.Screen
                    name="cart"
                    component={CartStack}
                    options={{ title: 'CARRITO' }} />
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
        <Icon type="material-community" name={iconName} size={25} color={tabNavigator.iconColor} />
    )
}
