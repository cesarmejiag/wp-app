import React from 'react'
import {
    SafeAreaView,
    FlatList
} from 'react-native'
import Item from './Item'

const List = (props) => {
    const { items, onPress } = props

    return (
        <SafeAreaView>
            <FlatList
                renderItem={({ item }) => <Item data={item} onPress={onPress} />}
                keyExtractor={(item) => item.id}
                data={items} />
        </SafeAreaView>
    )
}

export default List