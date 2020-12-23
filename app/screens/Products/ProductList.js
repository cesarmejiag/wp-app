import React, { useState, useEffect } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import List from './../../components/Product/List'
import Fetch from './../../utils/Fetch'
import Loader from './../../components/Loader'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#ffffff'
    },
    image: {
        minHeight: '100%',
        resizeMode: 'contain'
    }
})

const ProductList = ({ route }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { id, name } = route.params.categoryData
    const navigation = useNavigation()

    const onPress = (productData) => {
        navigation.navigate('product-detail', { productData })
    }

    useEffect(() => {
        Fetch.get(`products?page_size=15&page=1&category_id=${id}`)
            .then(response => {
                setProducts(response.data)
                setLoading(false)
            })
            .catch(console.log)
    }, [])

    if (loading) {
        return (<Loader isVisible={loading} text="Cargando..." />)
    }

    return (
        <View
            style={styles.view}>
            <ImageBackground
                source={require('./../../../assets/img/background-category.png')}
                style={styles.image}>
                <List
                    items={products}
                    onPress={onPress} />
            </ImageBackground>
        </View>
    )
}

export default ProductList