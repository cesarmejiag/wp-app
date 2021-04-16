import React from 'react'
import { ImageBackground, StyleSheet, View, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from 'react-native-elements'
import globalStyles from './../../utils/styles'

export default function UserGuest({ navigation }) {
    // console.log("--------------------UserGuest--------------------------");
    return (
        <ImageBackground
            source={require('./../../../assets/img/background-bottom-large.png')}
            style={styles.imageBackground}>
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <Image
                        source={require('./../../../assets/img/logo-color.png')}
                        resizeMode="contain"
                        style={styles.image} />

                    <Button
                        title="Crear Cuenta"
                        buttonStyle={globalStyles.btn}
                        containerStyle={globalStyles.btnContainer}
                        titleStyle={globalStyles.btnTitle}
                        onPress={() => { navigation.navigate('register-mail') }} />
                    <Button
                        title="Conectarse"
                        buttonStyle={globalStyles.btn}
                        containerStyle={globalStyles.btnContainer}
                        titleStyle={globalStyles.btnTitle}
                        onPress={() => { navigation.navigate('login') }} />
                </View>
            </KeyboardAwareScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        backgroundColor: '#fff',
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        alignItems: 'center',
        paddingBottom: 20,
        paddingHorizontal: 45,
    },
    image: {
        height: 60,
        marginBottom: 75,
        resizeMode: 'cover',
        width: 130
    }
});
