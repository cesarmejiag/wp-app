import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import FormInput from './../../components/Profile/FormInput'

function RegisterMail() {
    return (
        <View>
            <Image
                source={require('./../../../assets/img/logo-color.png')}
                resizeMode="contain"
                style={styles.image} />
            <FormInput label="¿Cuál es tu mail?" />
            <Button
                title="Continuar" />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        
    }
})

export default RegisterMail