import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import List from './../../components/Product/List'
import Fetch from './../../utils/Fetch'
import Loader from './../../components/Loader'
import { useNavigation } from '@react-navigation/native'

function ProductList({ route }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { id, name } = route.params.categoryData
    const navigation = useNavigation()

    const onPress = (productData) => {
        navigation.navigate('product-detail', { productData })
    }

    useEffect(() => {
        Fetch.get(`https://floating-lake-44715.herokuapp.com/api/v1/products?page_size=15&page=1&category_id=${id}`)
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
            <List title={name} items={products} onPress={onPress} />
        </View>
    )
}

export default ProductList