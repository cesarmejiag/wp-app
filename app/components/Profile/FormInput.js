import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Input} from 'react-native-elements'

export default function FormInput({label, onChangeText, secureTextEntry}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
            <Input
                secureTextEntry={secureTextEntry}
                containerStyle={styles.inputContainer}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.input}
                onChangeText={onChangeText}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 60
    },
    text: {
        color: '#494949',
        fontFamily: 'texgyreadventor-bold',
        fontSize: 14,
        letterSpacing: 1.4,
        marginBottom: 10,
        textAlign: 'center'
    },
    inputContainer: {
        alignItems: 'baseline'
    },
    inputContainerStyle: {},
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#404040",
        textAlign: "center"
    },
})
