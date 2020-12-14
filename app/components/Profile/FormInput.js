import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements'

function FormInput(props) {
    const { label } = props;

    return (
        <View
            style={styles.formInput}>
            <Text style={styles.label}>{label}</Text>
            <Input style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    formInput: {

    },
    label: {

    },
    input: {

    }
});

export default FormInput