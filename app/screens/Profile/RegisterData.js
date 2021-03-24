import React, {useState, useEffect} from 'react'
import {Image, ImageBackground, StyleSheet, View} from 'react-native'
import {Button} from 'react-native-elements'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import FormInput from './../../components/Profile/FormInput'
import Fetch from "../../utils/Fetch";

import globalStyles from './../../utils/styles'

export default function RegisterData({route, navigation, label, nextScreen, type}) {
    const [data, setData] = useState('');

    const validate = () => {
        if (type === 'email') {
            return RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(data);
        } else if (type === 'name') {
            return data.length >= 3;
        } else if (type === 'password') {
            return data.length >= 5;
        }
    }
    useEffect(() => {
        console.log(route.params)

    }, [])


    const handlePress = () => {

        if (type !== 'password') {
            navigation.navigate(nextScreen, {...route.params, [type]: data})
        } else {

            Fetch.post('register', {...route.params, [type]: data,c_password:data }, '')
                .then(async (response) => {
                    if (response.success) {
                        navigation.navigate('user-logged')
                    } else {
                        console.log(response)
                    }
                })
                .catch(console.log)
        }
    }

    return (
        <ImageBackground
            source={require('./../../../assets/img/background-bottom-large.png')}
            style={styles.imageBackground}>
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <Image
                        source={require('./../../../assets/img/logo-color.png')}
                        resizeMode="contain"
                        style={styles.image}/>

                    <FormInput
                        secureTextEntry={type === 'password'}
                        label={label}
                        onChangeText={setData}/>

                    <Button
                        title="Continuar"
                        disabled={!validate()}
                        buttonStyle={globalStyles.btn}
                        containerStyle={globalStyles.btnContainer}
                        titleStyle={globalStyles.btnTitle}
                        onPress={handlePress}/>
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
