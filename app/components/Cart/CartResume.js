import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import Formatter from './../../utils/Formatter'

export default function CartResume({ items }) {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let tempTotal = 0
        items.forEach(item => {
            tempTotal += item.quantity * item.item['unit_price'];
        })

        setTotal(tempTotal);
    }, [items])

    return (
        <View style={styles.resume}>
            <View style={styles.concept}>
                <Text>Sub-total</Text>
                <Text>{Formatter.currency(total)}</Text>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.concept}>
                <Text>Añadir un código de descuento</Text>
                <Text>{Formatter.currency(0)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    resume: {
        marginBottom: 30,
    },
    concept: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    divider: {
        backgroundColor: '#494949'
    },
})
