import React from 'react'
import PropTypes from 'prop-types'
import { Image, View } from 'react-native'

const FloatImage = ({ src, styles }) => {
    const resizeMode = 'center'
    return (
        <View
            style={{
                position: 'absolute',
                top: 40,
                right: -16,
                width: 43,
                height: 72,
                ...styles,
            }}
        >
            <Image
                style={{
                    flex: 1,
                    resizeMode,
                }}
                source={src}
            />
        </View>
    )
}

FloatImage.propTypes = {
    src: PropTypes.any,
}

export default FloatImage
