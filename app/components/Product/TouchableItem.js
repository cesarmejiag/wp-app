import React from 'react'
import { TouchableOpacity } from 'react-native'
import Item from './Item'

export default function TouchableItem({ item, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}>
            <Item item={item} />
        </TouchableOpacity>
    )
}