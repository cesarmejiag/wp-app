import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements'

export default function FormInput({ label, onChangeText }) {
    return (
        <View
            style={styles.formInput}>
            <Text style={styles.label}>{label}</Text>
            <Input
                style={styles.input}
                inputStyle={styles.inputText}
                onChangeText={onChangeText} />
        </View>
    )
}

const styles = StyleSheet.create({
    formInput: {
        marginBottom: 10
    },
    label: {
        color: "#494949",
        fontSize: 14,
        marginBottom: 10,
        textAlign: "center"
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#404040",
        textAlign: "center"
    },
    inputText: {
        textAlign: "center"
    }
});
