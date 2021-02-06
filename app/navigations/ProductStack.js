import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from './../components/Header'
import List from './../screens/Products/List'
import ProductDetail from './../screens/Products/ProductDetail'
import ProductProcess from './../screens/Products/ProductProcess'
import ImageBrowser from './../screens/Products/ImageBrowserScreen'

const Stack = createStackNavigator()

export default function ProductStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                header: ({ scene, previous, navigation }) => {
                    const { options } = scene.descriptor;
                    const title =
                        options.headerTitle !== undefined
                            ? options.headerTitle
                            : options.title !== undefined
                                ? options.title
                                : scene.route.name;

                    return (
                        <Header
                            title={title}
                            leftButton={previous}
                            navigation={navigation}
                            style={options.headerStyle} />
                    )
                }
            }}>
            <Stack.Screen name="category-list">
                {props => <List {...props} type="categories" nextScreen="product-list" />}
            </Stack.Screen>
            <Stack.Screen name="product-list">
                {props => <List {...props} type="products" nextScreen="product-detail" />}
            </Stack.Screen>
            <Stack.Screen
                name="product-detail"
                component={ProductDetail} />
            <Stack.Screen
                name="product-process"
                component={ProductProcess} />
            <Stack.Screen 
                name="image-browser"
                component={ImageBrowser} />
        </Stack.Navigator>
    )
} 