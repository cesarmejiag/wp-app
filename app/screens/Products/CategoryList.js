import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import List from './../../components/Product/List'
import Fetch from './../../utils/Fetch'
import Loader from './../../components/Loader'
import { useNavigation } from '@react-navigation/native'

function CategoryList() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate('product-list')
    }

    useEffect(() => {
        Fetch.get('https://floating-lake-44715.herokuapp.com/api/v1/categories')
            .then(categories => {
                setCategories(categories.data)
                setLoading(false);
            })
    }, [])

    if (loading) {
        return (<Loader isVisible={loading} text="Cargando..." />)
    }

    return (
        <View>
            <List items={categories} onPress={onPress} />
        </View>
    )
}

export default CategoryList