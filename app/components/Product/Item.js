import React from "react"
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"

function Item(props) {
    const { data, onPress } = props
    const { id, name, main_photo_path } = data
    const handlePress = () => { onPress(id) }

    return (
        <View style={styles.view}>
            <TouchableOpacity
                onPress={handlePress}>
                <ImageBackground
                    style={styles.image}
                    source={{
                        uri: main_photo_path
                    }}>
                    <Text style={styles.name}>{name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingHorizontal: 50
    },
    image: {
        alignItems: "center",
        borderColor: "#979797",
        borderRadius: 13,
        borderWidth: 1,
        flex: 1,
        height: 265,
        justifyContent: "center",
        marginBottom: 15,
        overflow: "hidden",
        width: "100%"
    },
    name: {
        color: "#ffffff",
        fontSize: 19,
        textAlign: "center",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 2,
        textTransform: "uppercase"
    }
})

export default Item