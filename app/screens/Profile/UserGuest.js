import React from 'react'
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default UserGuest = () => {
    const navigation = useNavigation();

    return (
        <ScrollView
            centerContent={true}
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContainer}>
            <Image
                source={require('./../../../assets/img/logo-color.png')}
                resizeMode="contain"
                style={styles.image} />
            <View style={styles.viewButton}>
                <Button
                    title="Crear Cuenta"
                    buttonStyle={styles.button}
                    containerStyle={styles.buttonContainer}
                    titleStyle={styles.buttonText}
                    onPress={() => { navigation.navigate('register-mail') }} />
                <Button
                    title="Conectarse"
                    buttonStyle={styles.button}
                    containerStyle={styles.buttonContainer}
                    titleStyle={styles.buttonText}
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
        height: 118,
        marginBottom: 55,
        marginTop: 20,
        width: 210
    },
    viewButton: {
        alignItems: "center",
        flex: 1
    },
    button: {
        backgroundColor: "#3241F0",
    },
    buttonText: {
        color: "#FFFFFF",
        textAlign: "center",
        textTransform: "uppercase",
        width: "100%"
    },
    buttonContainer: {
        marginBottom: 25,
        width: "70%"
    }
});
