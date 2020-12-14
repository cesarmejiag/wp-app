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
        resizeMode: 'contain'
    }
})

const CategoryList = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()
    const onPress = (categoryData) => {
        navigation.navigate("product-list", { categoryData })
    }

    useEffect(() => {
        Fetch.get("https://floating-lake-44715.herokuapp.com/api/v1/categories")
            .then(categories => {
                setCategories(categories.data)
                setLoading(false)
            })
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
                items={categories}
                onPress={onPress} />
            </ImageBackground>
        </View>
    )
}

export default CategoryList