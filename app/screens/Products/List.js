import React, { useState, useEffect } from 'react'
import { FlatList, ImageBackground, StyleSheet, View } from 'react-native'
import TouchableItem from './../../components/Product/TouchableItem'
import Fetch from './../../utils/Fetch'
import Loader from './../../components/Loader'

export default function List({ navigation, route, type, nextScreen }) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const paramItem = route.params?.item;
    const createTouchableItem = item => (
        <View style={styles.itemContainer}>
            <TouchableItem item={item} onPress={() => { navigation.navigate(nextScreen, { item }) }} />
        </View>
    )

    useEffect(() => {
        const endpoint = type === 'categories'
            ? `categories`
            : `products?category_id=${paramItem.id}`

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
        <ImageBackground
            source={require('./../../../assets/img/background-category.png')}
            style={styles.imageBackground}>
            <View>
                <FlatList
                    renderItem={({ item }) => createTouchableItem(item)}
                    keyExtractor={(item) => item.id}
                    data={items} />
            </View>
        </ImageBackground >
    )

}

const styles = StyleSheet.create({
    imageBackground: {
        backgroundColor: '#fff',
        minHeight: '100%',
        resizeMode: 'contain'
    },
    itemContainer: {
        marginHorizontal: 45,
        marginVertical: 20
    }
})

