import React, {useState, useEffect, useContext} from 'react'
import {Image, ImageBackground, StyleSheet, View} from 'react-native'
import {Button} from 'react-native-elements'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import FormInput from './../../components/Profile/FormInput'

import globalStyles from './../../utils/styles'
import UserContext from '../../context/User/UserContext';

export default function RegisterData({route, navigation, label, nextScreen, type}) {
    const {currentUser, registerUser} = useContext(UserContext);
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
            registerUser({...route.params, [type]: data,c_password:data }, navigation);
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
