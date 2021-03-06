import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CategoryList from './../screens/Products/CategoryList'
import ProductList from './../screens/Products/ProductList'
import ProductDetail from './../screens/Products/ProductDetail'
import ProductProcess from './../screens/Products/ProductProcess'

const Stack = createStackNavigator()

const screenOptions = (route) => {
    const options = {
        headerStyle: {
            backgroundColor: '#B4F2F5',
            elevation: 0,
            shadowOpacity: 0
        },
        headerTintColor: '#FF0132',
        headerTitleStyle: { }
    };

    switch (route.name) {
        case 'category-list':
            options['title'] = 'Categorias'
            break
        case 'product-list':
            options['title'] = 'Productos'
            break
        case 'product-detail':
            options['title'] = 'Detalle de Producto'
            break
        case 'product-process':
            options['title'] = 'Proceso'
            break
        default:
            options['title'] = 'Productos'
            break
    }

    return options
}

const ProductStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="category-list"
            component={CategoryList}
            options={({ route }) => screenOptions(route)} />
        <Stack.Screen
            name="product-list"
            component={ProductList}
            options={({ route }) => screenOptions(route)} />
        <Stack.Screen
            name="product-detail"
            component={ProductDetail}
            options={({ route }) => screenOptions(route)} />
        <Stack.Screen
            name="product-process"
            component={ProductProcess}
            options={({ route }) => screenOptions(route)} />
    </Stack.Navigator>
)

export default ProductStack
