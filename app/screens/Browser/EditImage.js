import React from 'react'
import globalStyles from 'utils/styles'
import { StyleSheet, Image, Button } from 'react-native'

function EditImage({ route, navigation }) {

    const { uri } = route.params;
    return(
        <>
            <Image style={styles.image} source={{ uri: uri, crop: {left: 10, top: 50, width: 20, height: 40} }} />
            <Button
                    title="Cortar"
                    buttonStyle={globalStyles.btn}
                    containerStyle={globalStyles.btnContainer}
                    titleStyle={globalStyles.btnTitle}
                />
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },

});

export default EditImage