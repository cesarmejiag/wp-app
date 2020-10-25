import React from "react"
import {
    SafeAreaView,
    SectionList,
    StyleSheet,
    Text
} from "react-native"
import Item from "./Item"

function List(props) {
    const { items, onPress } = props

    return (
        <SafeAreaView>
            <SectionList
                renderItem={({ item }) => <Item data={item} onPress={onPress} />}
                keyExtractor={(item) => item.id}
                sections={[{ title: 'Productos', data: items }]}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.title}>{title}</Text>
                )} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "#000000",
        fontSize: 19,
        marginTop: 40,
        marginBottom: 25,
        textAlign: "center",
        textTransform: "uppercase"
    }
})

export default List