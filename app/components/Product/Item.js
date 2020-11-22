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
    const { name, main_photo_path } = data
    const handlePress = () => {
        onPress(data)
    }

    return (
        <View style={styles.itemBoundries}>
            <TouchableOpacity
                onPress={handlePress}>
                <ImageBackground
                    style={styles.itemWrapper}
                    source={{
                        uri: main_photo_path
                    }}>
                    <Text style={styles.itemText}>{name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemBoundries: {
        paddingHorizontal: 50
    },
    itemText: {
        color: "#000",
        fontFamily: 'Heavitas',
        fontSize: 19,
        textAlign: "center",
        textTransform: "uppercase"
    },
    itemWrapper: {
        alignItems: "center",
        borderColor: "#fff",
        borderRadius: 13,
        borderWidth: 1,
        flex: 1,
        height: 265,
        justifyContent: "center",
        marginBottom: 15,
        overflow: "hidden",
        width: "100%"
    }
})

export default Item