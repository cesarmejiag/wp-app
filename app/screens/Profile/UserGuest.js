import React from 'react'
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

function UserGuest() {
    const navigation = useNavigation();

    return (
        <ScrollView centerContent={true} style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
            <Image
                source={require('./../../../assets/img/isotype.png')}
                resizeMode="contain"
                style={styles.image} />
            <Text style={styles.title}>Imprimiendo recuerdos</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis consequat tristique. Aenean sed neque ac felis dignissim dapibus. Fusce dolor ipsum, pretium sit amet risus nec, posuere sagittis quam. Nam ullamcorper ullamcorper cursus. Donec ut suscipit nisi.</Text>
            <View style={styles.viewButton}>
                <Button
                    title="Crea tu perfil"
                    buttonStyle={styles.button}
                    containerStyle={styles.buttonContainer}
                    onPress={() => { navigation.navigate('login') }} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        marginLeft: 30,
        marginRight: 30
    },
    scrollViewContainer: {
        alignItems: "center",
        flex: 1
    },
    image: {
        height: 73,
        marginBottom: 30,
        width: 85
    },
    title: {
        fontSize: 19,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center"
    },
    description: {
        marginBottom: 20,
        textAlign: "center"
    },
    viewButton: {
        alignItems: "center",
        flex: 1
    },
    button: {
        backgroundColor: "#9B9B9B"
    },
    buttonContainer: {
        width: "70%"
    }
});

export default UserGuest