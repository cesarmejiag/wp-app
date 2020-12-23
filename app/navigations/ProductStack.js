import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from './../components/Header'
import List from './../screens/Products/List'
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
        headerTitleStyle: {}
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
            component={ProductDetail}
            options={({ route }) => screenOptions(route)} />
        <Stack.Screen
            name="product-process"
            component={ProductProcess}
            options={({ route }) => screenOptions(route)} />
    </Stack.Navigator>
)

export default ProductStack
