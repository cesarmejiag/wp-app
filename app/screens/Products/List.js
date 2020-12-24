import React, { useState, useEffect } from 'react'
import { ImageBackground, StyleSheet, View, ScrollView } from 'react-native'
import TouchableItem from './../../components/Product/TouchableItem'
import Fetch from './../../utils/Fetch'
import Loader from './../../components/Loader'

export default function List({ navigation, route, type, nextScreen }) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const paramItem = route.params?.item;

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
            source={require('./../../../assets/img/background-top-large.png')}
            style={styles.imageBackground}>
            <ScrollView>
                <View style={styles.container}>
                    {items.map((item, id) => (
                        <View style={styles.itemContainer}>
                            <TouchableItem
                                key={id}
                                item={item}
                                onPress={() => { navigation.navigate(nextScreen, { item }) }} />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </ImageBackground >
    )

}

const styles = StyleSheet.create({
    imageBackground: {
        backgroundColor: '#fff',
        flex: 1,
        resizeMode: 'cover'
    },
    container: {
        paddingBottom: 20,
        paddingHorizontal: 45,
    },
    itemContainer: {
        marginVertical: 20
    }
})

