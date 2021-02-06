import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ImageBrowser } from 'expo-image-picker-multiple'
import { log } from 'react-native-reanimated'

export default function ImageBrowserScreen() {
    const emptyStayComponent = <Text>Empty</Text>
    const renderSelectedComponent = number => (
        <View>
            <Text>{number}</Text>
        </View>
    )

    const imagesCallback = callback => {
        console.log(':asasdads');
    }

    const onChange = callback => {
        console.log(callback);
    }

    return (
        <View style={styles.container}>
            <ImageBrowser
                max={4}
                callback={imagesCallback}
                onChange={onChange}
                renderSelectedComponent={renderSelectedComponent}
                emptyStayComponent={emptyStayComponent} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    emptyStay: {
        textAlign: 'center'
    }
})
