import React from 'react'
import {
    Dimensions,
    ImageBackground,
    StyleSheet,
    Pressable,
    View,
    Image,
} from 'react-native'
import { PADDING_WRAP_SIZE } from 'constants/config'

const { width: screenWidth } = Dimensions.get('window')

const getTileSize = columns => {
    return screenWidth / columns - PADDING_WRAP_SIZE * 2
}

const getImageIcon = () => {
    return require('@assets/checked.png')
}

const getSelectedIcon = number => {
    return (
        <View style={{ position: 'absolute', left: 5, top: 5 }}>
            <Image source={getImageIcon()} />
        </View>
    )
}

const ImageTile = ({
    item,
    index,
    selected,
    selectImage,
    selectedItemNumber,
    numColumns,
    renderSelectedComponent = () => {},
}) => {
    if (!item) return null
    
    const tileSize = getTileSize(numColumns)
    return (
        <Pressable
            style={styles.container}
            underlayColor="transparent"
            onPress={() => selectImage(index)}
        >
            <View
                style={{
                    position: 'relative',
                }}
            >
                <View>
                    <ImageBackground
                        style={{
                            opacity: selected ? 0.62 : 1,
                            width: tileSize,
                            height: tileSize,
                        }}
                        source={{ uri: item.uri }}
                    />
                    {selected && getSelectedIcon(selectedItemNumber)}
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
})

export default ImageTile
