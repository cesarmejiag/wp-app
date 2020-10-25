import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'

function RegisterForm() {
    return (
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo Electrónico"
                style={styles.inputForm} />
            <Input
                placeholder="Contraseña"
                style={styles.inputForm}
                password={true}
                secureTextEntry={true} />
            <Input
                placeholder="Repetir Contraseña"
                style={styles.inputForm}
                password={true}
                secureTextEntry={true} />
            <Button
                title="Unirse"
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.buttonStyles} />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        marginTop: 30
    },
    inputForm: {
        marginTop: 20,
        width: "100%"
    },  
    buttonContainer: {
        marginTop: 20,
        width: "95%"
    },
    buttonStyles: {
        backgroundColor: "#9B9B9B"
    }
})

export default RegisterForm