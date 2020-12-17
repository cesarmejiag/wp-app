import React, { useState } from 'react'
import { Image, StyleSheet, ScrollView, View } from 'react-native'
import { Button } from 'react-native-elements'
import FormInput from './../../components/Profile/FormInput'
import Fetch from './../../utils/Fetch'

export default function RegisterPassword({ navigation, route }) {
    const { mail, name } = route.params
    const [pass, setPass] = useState('')
    const createUser = () => {
        Fetch.post('https://floating-lake-44715.herokuapp.com/api/v1/users', {
            name: 'César Mejía',
            email: 'cesarmejiaguzman@gmail.com',
            password: 'p4ssw0rd123',
            extras: {
                first_name: "César",
                last_name: "Mejía"
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => { console.log(err) });
    }

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
            <FormInput label="Elije una contraseña" onChangeText={setPass} />
            <Button
                title="Continuar"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnStyle}
                titleStyle={styles.btnTitle}
                onPress={createUser} />
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
