import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Item({ item }) {
    const { name, main_photo_path } = item

    return (
        <>
            <View
                style={styles.view}>
                <Image
                    style={styles.image}
                    source={{ uri: main_photo_path }} />
            </View>
            <Text style={styles.text}>{name}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#fff",
        borderRadius: 13,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    image: {
        height: 265,
        resizeMode: "cover",
        width: "100%",
    },
    text: {
        color: "#000",
        fontFamily: 'Heavitas',
        fontSize: 19,
        paddingHorizontal: 15,
        paddingVertical: 15,
        textAlign: "center",
        textTransform: "uppercase"
    }
})
