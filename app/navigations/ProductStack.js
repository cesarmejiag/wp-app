import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CategoryList from './../screens/Products/CategoryList'
import ProductList from './../screens/Products/ProductList'
import ProductDetail from './../screens/Products/ProductDetail'
import ProductProcess from './../screens/Products/ProductProcess'

const Stack = createStackNavigator();

function ProductStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="category-list"
                component={CategoryList}
                options={{ title: 'Categorias' }} />
            <Stack.Screen
                name="product-list"
                component={ProductList}
                options={{ title: 'Productos' }} />
            <Stack.Screen
                name="product-detail"
                component={ProductDetail}
                options={{ title: 'Detalle de Producto' }} />
            <Stack.Screen
                name="product-process"
                component={ProductProcess}
                options={{ title: 'Proceso' }} />
        </Stack.Navigator>
    );
}

export default ProductStack
