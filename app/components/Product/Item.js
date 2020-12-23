import React from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'

export default function Item({ item }) {
    const { name, main_photo_path } = item

    return (
        <ImageBackground
            style={styles.image}
            source={{ uri: main_photo_path }}>
            <Text style={styles.text}>{name}</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 13,
        flex: 1,
        height: 265,
        justifyContent: "center",
        overflow: "hidden",
        resizeMode: "cover",
        width: "100%",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    text: {
        backgroundColor: "rgba(244, 215, 73, .66)",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#F4D749",
        color: "#000",
        fontFamily: 'Heavitas',
        fontSize: 19,
        maxWidth: '90%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        textAlign: "center",
        textTransform: "uppercase"
    }
})
