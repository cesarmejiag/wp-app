import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import List from './../../components/Product/List'
import Fetch from './../../utils/Fetch'
import Loader from './../../components/Loader'
import { useNavigation } from '@react-navigation/native'

function ProductList() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate('product-detail')
    }

    useEffect(() => {
        Fetch.get('https://floating-lake-44715.herokuapp.com/api/v1/products')
            .then(products => {
                setProducts(products.data)
                setLoading(false);
            })
    }, [])

    if (loading) {
        return (<Loader isVisible={loading} text="Cargando..." />)
    }

    return (
        <View>
            <List items={products} onPress={onPress} />
        </View>
    )
}

export default ProductList