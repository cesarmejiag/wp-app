import React, { useState } from 'react'
import { Image, StyleSheet, ScrollView, View } from 'react-native'
import { Button } from 'react-native-elements'
import FormInput from './../../components/Profile/FormInput'

export default function RegisterMail({ navigation }) {
    const [mail, setMail] = useState('')

    return (
        <ScrollView
            contentContainerStyle={styles.view}>
            <View
                style={styles.imageContainer}>
                <Image
                    source={require('./../../../assets/img/logo-color.png')}
                    resizeMode="contain"
                    style={styles.image} />
            </View>
            <FormInput label="¿Cuál es tu mail?" onChangeText={setMail} />
            <Button
                title="Continuar"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnStyle}
                titleStyle={styles.btnTitle}
                onPress={() => navigation.navigate('register-name', { mail })} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        paddingHorizontal: 50,
        paddingBottom: 50,
    },
    imageContainer: {
        alignItems: "center"
    },
    image: {
        height: 118,
        marginBottom: 35,
        marginTop: 20,
        width: 210
    },
    btnStyle: {
        backgroundColor: "#3241F0",
    },
    btnTitle: {
        textTransform: "uppercase"
    },
    btnContainer: {
        marginTop: 60
    }
})
