import React, {useState, useContext} from 'react'
import {View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import {Avatar, Icon} from "react-native-elements";
import UserContext from '../../context/User/UserContext';

const options = [
    {link: '1', label: 'Revisar Perfil'},
    {link: '2', label: 'Mis pedidos'},
    {link: '3', label: 'Preguntas frecuentes'},
    // {link: '', label: 'Cerrar sesion'},

]

function UserLogged({navigation}) {
    const {currentUser, logoutUser} = useContext(UserContext);
    // console.log("--------------------UserLogged--------------------------");
    // console.log(currentUser);
    const imageProfile = currentUser ? currentUser.data.user.profile_photo_url : 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg';

    const handlePress = (e) => {
        e.preventDefault();
        logoutUser(navigation);
    }
    // const imageProfile = 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg';
    return (
        <ImageBackground
            source={require('./../../../assets/img/background-top-large.png')}
            style={styles.imageBackground}>
            <ScrollView>
                <View style={styles.avatarContainer}>
                    <ImageBackground
                        source={require('./../../../assets/img/elements.png')}
                        style={styles.imageBackgroundAvatar}>
                    <View style={styles.avatar}>
                        <Avatar
                            rounded
                            size="xlarge"
                            source={{
                                uri: imageProfile,
                            }}
                        />
                    </View>
                    </ImageBackground>
                </View>


                <View style={styles.optionsContainer}>
                    {options.map(({label, link}) => ( 
                        <View key={link} style={styles.options}>
                            <Text style={styles.textOptions}>{label}</Text>
                            <Icon type="material-community" name="chevron-right" size={32} color="#000" />
                        </View>
                    ))}
                    <TouchableOpacity key="4" onPress={handlePress}> 
                        <View style={styles.options}>
                                <Text style={styles.textOptions}>Cerrar sesión</Text>
                                <Icon type="material-community" name="chevron-right" size={32} color="#000" />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    avatarContainer: {
        marginTop: 70,
        alignItems: 'center',
        marginBottom: 130,
    },
    avatar:{
        width:288,
        height: 225,
        justifyContent:'center',
        alignItems:'center',
    },
    imageBackgroundAvatar:{
        resizeMode: 'cover',
    },
    optionsContainer: {
        alignItems: 'center',
    },

    options: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: 275,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        borderBottomColor: '#4A4A4A',
        borderBottomWidth: 1,
    },
    textOptions: {
        color: '#4A4A4A',
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold'
    },
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
export default UserLogged
