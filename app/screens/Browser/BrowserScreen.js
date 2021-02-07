import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageBrowser from './ImageBrowser'
import { Button } from 'react-native-elements'
import globalStyles from '../../utils/styles'
import { PADDING_WRAP_SIZE } from '../../constants/config'

const BrowserScreen = ({ navigation }) => {
    const emptyStayComponent = <Text>Empty</Text>

    const [resources, setResources] = useState([])

    const imagesCallback = assetsInfo => {
        assetsInfo.then(response => {
            if (response) {
                setResources(response)
            }
        })
    }

    const onChange = (count, callback) => callback()

    const handlePress = () => {
        // TODO: Implementar lógica de negocio
        // - navigation.navigate('product-process')
        console.log('resources::', resources.length)
    }

    return (
        <View style={styles.container}>
            <ImageBrowser
                customStyles={styles.browser}
                max={10}
                callback={imagesCallback}
                onChange={onChange}
                emptyStayComponent={emptyStayComponent}
            />
            <Button
                title="Continuar"
                buttonStyle={globalStyles.btn}
                containerStyle={globalStyles.btnContainer}
                titleStyle={globalStyles.btnTitle}
                onPress={handlePress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 12,
        paddingVertical: PADDING_WRAP_SIZE,
    },
    browser: {
        marginBottom: 24,
    },
    emptyStay: {
        textAlign: 'center',
    },
})

export default BrowserScreen
