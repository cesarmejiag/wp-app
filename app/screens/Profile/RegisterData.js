import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormInput from './../../components/Profile/FormInput'
import globalStyles from './../../utils/styles'

export default function RegisterData({ navigation }) {
    const [data, setData] = useState('');

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

                    <FormInput 
                        label="¿Cuál es tu mail?" 
                        onChangeText={setData} />

                    <Button
                        title="Continuar"
                        buttonStyle={globalStyles.btn}
                        containerStyle={globalStyles.btnContainer}
                        titleStyle={globalStyles.btnTitle}
                        onPress={() => console.log('change view')} />
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
})