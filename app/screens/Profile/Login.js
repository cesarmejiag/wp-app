import React from 'react'
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

function Login() {
    return (
        <ScrollView>
            <Image
                resizeMode="contain"
                source={require('./../../../assets/img/logo.png')}
                style={styles.logo} />
            <View style={styles.viewContainer}>
                <Text>Login Form</Text>
                <CreateAccount />
            </View>
            <Divider style={styles.divider} />
            <Text>Social Login</Text>
        </ScrollView>
    )
}

function CreateAccount() {
    const navigation = useNavigation();

    return (
        <Text style={styles.textRegister}>
            ¿Aún no tienes una cuenta?{" "}
            <Text 
                style={styles.buttonRegister}
                onPress={() => { navigation.navigate('register') }}>Registrate</Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 20,
        width: "100%"
    },
    viewContainer: {
        marginLeft: 40,
        marginRight: 40
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    buttonRegister: {
        color: "#717171",
        fontWeight: "bold"
    },
    divider: {
        margin: 40
    }
});

export default Login