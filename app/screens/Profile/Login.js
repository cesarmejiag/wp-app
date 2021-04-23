import React, {useContext, useState} from 'react'
import { StyleSheet, ScrollView, View, Text, Image, ImageBackground, TouchableOpacity  } from 'react-native'
import Loader from '../../components/Loader'
import { Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import FormInput from '../../components/Profile/FormInput'
import UserContext from '../../context/User/UserContext';
import globalStyles from './../../utils/styles'

function Login({ navigation }) {
    const {loginUser, loadingState, loginFacebook, loginGoogle} = useContext(UserContext);
    const [data, setData] = useState({email:'', password:''});

    const handleChangeEmail = e => {
        setData({...data, email:e})
    };
    const handleChangePassword = e => {
        setData({...data, password:e})
    };

    const handlePress = (e) => {
        e.preventDefault();
        loginUser(data, navigation);
    }

    const handlePressFacebook = (e) => {
        e.preventDefault();
        loginFacebook(navigation);
    }

    const handlePressGoogle = (e) => {
        e.preventDefault();
        loginGoogle(navigation);
    }

    return (
        <>
            <ImageBackground 
            source={require('../../../assets/img/background-bottom-large.png')}
            style={styles.imageBackground}>
                <ScrollView>
                    <Image
                        resizeMode="contain"
                        source={require('./../../../assets/img/logo.png')}
                        style={styles.logo} />
                    <View style={styles.viewContainer}>
                        <Text style={styles.titleForm}>Acceso</Text>
                        <FormInput
                                secureTextEntry={false}
                                label={'Correo'}
                                onChangeText={handleChangeEmail}/>                
                        <FormInput
                                secureTextEntry={true}
                                label={'Contraseña'}
                                onChangeText={handleChangePassword}/>
                        <Button
                                buttonStyle={globalStyles.btn}
                                containerStyle={globalStyles.btnContainer}
                                titleStyle={globalStyles.btnTitle}
                                title="Acceder"
                                onPress={handlePress}/>
                        <TouchableOpacity style={styles.marginButton} onPress={handlePressFacebook}>
                            <View style={styles.btnFacebook}>
                                <Icon type="material-community" name="facebook" size={25} color="#FFF" />
                                <Text style={styles.btnTitleFacebook}>Acceder con Facebook</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePressGoogle}>
                            <View style={styles.btnGoogle}>
                                <Icon type="material-community" name="google" size={25} color="#FFF" />
                                <Text style={styles.btnTitleGoogle}>Acceder con Google</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
            <Loader isVisible={loadingState} text="Cargando..." />
        </>
    )
}

function CreateAccount() {
    const navigation = useNavigation();

    return (
        <Text style={styles.textRegister}>
            ¿Aún no tienes una cuenta?{" "}
            <Text
                style={styles.buttonRegister}
                onPress={() => { navigation.navigate('register-mail') }}>Registrate</Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        backgroundColor: '#fff',
        flex: 1,
        resizeMode: 'cover',
    },
    logo: {
        marginTop: 20,
        width: "100%"
    },
    viewContainer: {
        marginTop: 50,
        marginLeft: 40,
        marginRight: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    buttonRegister: {
        color: "#717171",
        fontWeight: "bold"
    },
    divider: {
        margin: 40
    },
    titleForm: {
        marginBottom: 40,
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'texgyreadventor-bold',
        textTransform: 'uppercase',
    },


    btnFacebook: {
        backgroundColor: "#4064ac",
        borderRadius: 8,
        height: 36,
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    btnTitleFacebook: {
        color: "#FFFFFF",
        fontFamily: 'texgyreadventor-bold',
        fontSize: 14,
        letterSpacing: 1.4,
        lineHeight: 18,
        textTransform: 'uppercase',
        marginLeft: 10
    },


    btnGoogle: {
        backgroundColor: "#da3d29",
        borderRadius: 8,
        height: 36,
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    btnTitleGoogle: {
        color: "#FFFFFF",
        fontFamily: 'texgyreadventor-bold',
        fontSize: 14,
        letterSpacing: 1.4,
        lineHeight: 18,
        textTransform: 'uppercase',
        marginLeft: 20
    },

    marginButton: {
        marginBottom: 20
    }
});

export default Login