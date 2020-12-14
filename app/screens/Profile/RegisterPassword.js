import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import FormInput from './../../components/Profile/FormInput'

function RegisterPassword() {
    return (
        <View>
            <Image
                source={require('./../../../assets/img/logo-color.png')}
                resizeMode="contain"
                style={styles.image} />
            <FormInput label="Elije una contraseña" />
            <Button
                title="Continuar" />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        
    },
    button: {
        
    }
})

export default RegisterPassword