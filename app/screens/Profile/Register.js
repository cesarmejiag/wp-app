import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import RegisterForm from './../../components/Profile/RegisterForm'

function Register() {
    return (
        <View>
            <Image
                resizeMode="contain"
                style={styles.logo}
                source={require('./../../../assets/img/logo.png')} />
            <View style={styles.viewForm}>
                <RegisterForm />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 21,
        marginTop: 20,
        width: "100%"
    },
    viewForm: {
        marginLeft: 40,
        marginRight: 40
    }
});

export default Register;