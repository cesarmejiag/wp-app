import React, { useState, useEffect } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import List from './../../components/Product/List'
import Fetch from './../../utils/Fetch'
import Loader from './../../components/Loader'

export default function List({ navigaton, route }) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { id, name } = route.params.categoryData

    return (
        <View
            style={styles.view}>
            <ImageBackground
                source={require('./../../../assets/img/background-category.png')}
                style={styles.image}>
                
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

