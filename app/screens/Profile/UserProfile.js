import React, {useState, useContext} from 'react'
import {View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import {Avatar, Icon} from "react-native-elements";
import UserContext from '../../context/User/UserContext';

function UserProfile({navigation}) {
    const {currentUser, logoutUser} = useContext(UserContext);
    // console.log("--------------------UserLogged--------------------------");
    // console.log(currentUser);
    let imageProfile;
    let username = 'Nombre';
    let lastname = 'Apellidos';
    let email = 'Email';
    let birthdate = 'Fecha de nacimiento';
    if (currentUser && currentUser.typelogin == "FACEBOOK") {
        imageProfile = currentUser.picture.data.url;
        username = currentUser.first_name;
        lastname = currentUser.last_name;
    } 
    else if (currentUser && currentUser.typelogin == "NORMAL") {
        imageProfile = currentUser.data.user.profile_photo_url;
        username = currentUser.data.first_name;
        lastname = currentUser.data.last_name;
        email = currentUser.data.email;
        birthdate = currentUser.data.birth_date;
    }
    else if (currentUser && currentUser.typelogin == "GOOGLE") {
        imageProfile = currentUser.user.photoUrl;
        username = currentUser.user.givenName;
        lastname = currentUser.user.familyName;
        email = currentUser.user.email;
    }
    else {
        imageProfile = 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg';
    }

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
                    <View style={styles.options}>
                        <Text style={styles.textOptions}>{username}</Text>
                        <Text style={styles.textOptions2}>{lastname}</Text>
                    </View>
                </View>
                <View style={styles.optionsContainer}>
                    <View style={styles.options}>
                        <Text style={styles.textOptions}>{email}</Text>
                    </View>
                </View>
                <View style={styles.optionsContainer}>
                    <View style={styles.options}>
                        <Text style={styles.textOptions}>{birthdate}</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    avatarContainer: {
        marginTop: 70,
        alignItems: 'center',
        marginBottom: 145,
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
        justifyContent:'flex-start',
        alignItems:'center',
        width: 400,
        borderBottomColor: '#4A4A4A',
        borderBottomWidth: 1,
    },
    textOptions: {
        color: '#4A4A4A',
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 25
    },
    textOptions2: {
        color: '#4A4A4A',
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        borderLeftColor: '#4A4A4A',
        borderLeftWidth: 1,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
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
export default UserProfile
