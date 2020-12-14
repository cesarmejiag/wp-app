import React from 'react'
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        marginTop: 15,
        paddingHorizontal: 45
    },
    text: {
        color: "#000",
        fontFamily: 'Heavitas',
        fontSize: 19,
        textAlign: "center",
        textTransform: "uppercase"
    },
    image: {
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 13,
        flex: 1,
        height: 265,
        justifyContent: "center",
        overflow: "hidden",
        width: "100%",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    }
})

const Item = (props) => {
    const { data, onPress } = props
    const { name, main_photo_path } = data
    const handlePress = () => {
        onPress(data)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handlePress}>
                <ImageBackground
                    style={styles.image}
                    source={{ uri: main_photo_path }}>
                    <Text style={styles.text}>{name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

export default Item