import React, { useState, useEffect } from 'react'
import { FlatList, ImageBackground, StyleSheet, View } from 'react-native'
import Item from './../../components/Product/Item'
import Fetch from './../../utils/Fetch'
import Loader from './../../components/Loader'

export default function List({ navigation, route, type, nextScreen }) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const paramItem = route.params?.item;
    const onPress = item => {
        navigation.navigate(nextScreen, { item })
    }

    useEffect(() => {
        const endpoint = type === 'categories'
            ? `categories`
            : `products?page_size=15&page=1&category_id=${paramItem.id}`

        Fetch.get(endpoint)
            .then(response => {
                setItems(response.data)
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
                <FlatList
                    renderItem={({ item }) => <Item item={item} onPress={onPress} />}
                    keyExtractor={(item) => item.id}
                    data={items} />
            </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#ffffff'
    },
    image: {
        minHeight: '100%',
        resizeMode: 'contain'
    }
})

