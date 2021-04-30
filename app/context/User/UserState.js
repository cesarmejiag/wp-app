import React, {useReducer, useContext, useState} from 'react';
import UserReducer from './userReducer';
import UserContext from './UserContext';
import Fetch from "../../utils/Fetch";
import AsyncStorage from '@react-native-async-storage/async-storage'
import GlobalContext from '../Global/GlobalContext';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';

const KEY = 'credential';
const ANDROID_CLIENT_ID = '799749904006-a9a1e3pprvhcat6crn7931naborir1sm.apps.googleusercontent.com';
const IOS_CLIENT_ID = '799749904006-1rc41v37lav1i1l8qsl2ju0ppt2ro2g0.apps.googleusercontent.com';

const UserState = (props) => {
    const initialState = {
        currentUser: null
    };
    
    const {showAlert} = useContext(GlobalContext);
    const [state, dispatch] = useReducer(UserReducer, initialState);
    const [loadingState, showLoading] = useState(false);
    
    const initCredential = async() => {
        try {
            const json = await AsyncStorage.getItem(KEY);
            // console.log("--------------------initCredential--------------------------");
            // console.log(json);
            if (json) {
                console.log("Load db");
                console.log(JSON.parse(json));
                dispatch({
                    type: 'SET_PROFILE',
                    payload: JSON.parse(json)
                });
            }
        } catch (err) { 
            console.log('Can\'t get user credential', err);
            showAlert('Can\'t get user credential'); 
        }
    }

    const saveCredential = async (tLogin, info, navigation) => {
        try {
            info = {...info, typelogin: tLogin}
            console.log(info);
            await AsyncStorage.setItem(KEY, JSON.stringify(info));
            dispatch({
                type: 'SET_PROFILE',
                payload: info
            });
            showLoading(false);
            navigation.navigate('user-logged');
        } catch (err) { 
            showLoading(false);
            console.log('Can\'t save user credential', err); 
            showAlert('Can\'t save user credential');
        }
    }

    const clearCredential = async (navigation) => {
        try {
            showLoading(true);
            if (state.currentUser.typelogin === "FACEBOOK") {
                try {
                    await Facebook.initializeAsync('1383756651992684');
                    const auth = await Facebook.getAuthenticationCredentialAsync();
                    if (auth) {
                        try {
                            await Facebook.logOutAsync();
                        } catch (error) {
                            showAlert(`Facebook Logout Error: ${error.message}`);
                        }
                    } 
                } catch (error) {
                    alert(`Facebook init Error: ${error.message}`);
                }
            }
            else if (state.currentUser.typelogin === "GOOGLE") {
                try {
                    await Google.logOutAsync({
                        accessToken: state.currentUser.accessToken,
                        androidClientId: ANDROID_CLIENT_ID,
                        iosClientId: IOS_CLIENT_ID,
                        scopes: ['profile', 'email'],
                    })
                } catch (e) {
                    alert(`Google logout Error: ${e.message}`);
                }
            }
            await AsyncStorage.setItem(KEY, '');
            dispatch({
                type: 'SET_PROFILE',
                payload: null
            });
            showLoading(false);
            navigation.navigate('profile');
        } catch (err) { 
            showLoading(false);
            console.log('Can\'t clear user credential', err);
            showAlert('Can\'t clear user credential');
        }
    }

    const registerUser = (data, navigation) => {
        showLoading(true);
        Fetch.post('register', data, '').then(response => {
            if (response.success) {
                saveCredential('NORMAL', response, navigation);
            } else {
                console.log(response);
                showAlert(response.message);
                showLoading(false);
            }
        })
        .catch(err => {
            console.log(err);
            showAlert(err.message);
            showLoading(false);
        })
        
    };

    const loginUser = (data, navigation) => {
        showLoading(true);
        Fetch.post('login', data, '').then(response => {
            if (response.success) {
                saveCredential('NORMAL', response, navigation);
            } else {
                console.log(response);
                showAlert(response.message);
                showLoading(false);
            }
        })
        .catch(err => {
            console.log(err);
            showAlert(err.message);
            showLoading(false);
        })
       
    };

    const logoutUser = (navigation) => {
        clearCredential(navigation);
    };

    const loginFacebook = async (navigation) => {
        try {
            await Facebook.initializeAsync('1383756651992684');
            const auth = await Facebook.getAuthenticationCredentialAsync();
            if (!auth) {
                try {
                    const {
                        type,
                        token,
                        expires,
                        permissions,
                        declinedPermissions,
                    } = await Facebook.logInWithReadPermissionsAsync({
                        permissions: ['public_profile'],
                    });
                    if (type === 'success') {
                        // Facebook Graph API
                        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture,first_name,last_name`);
                        let data = await response.json();
                        saveCredential('FACEBOOK', data, navigation);
                        
                    } else {
                        // type === 'cancel'
                        showAlert(`Facebook Login Cancel`);
                    }
                    } catch ({ message }) { 
                        showAlert(`Facebook Login Error: ${message}`);
                    }
            } else {
                try {
                    await Facebook.logOutAsync();
                } catch (error) {
                    showAlert(`Facebook Logout Error: ${error.message}`);
                }
                
            }
        } catch (error) {
            alert(`Facebook init Error: ${error.message}`);
        }
        
    }

    const loginGoogle = async (navigation) => {
        // iosClientIdios CLient id => 799749904006-1rc41v37lav1i1l8qsl2ju0ppt2ro2g0.apps.googleusercontent.com
        // androidClientId => 799749904006-a9a1e3pprvhcat6crn7931naborir1sm.apps.googleusercontent.com
        try {
            const result = await Google.logInAsync({
              androidClientId: ANDROID_CLIENT_ID,
              iosClientId: IOS_CLIENT_ID,
              scopes: ['profile', 'email'],
            });
        
            console.log(result);
            if (result.type === 'success') {
                saveCredential('GOOGLE', result, navigation);
            } else {
                showAlert(`Google Login Cancel`);
            }
        } catch (e) {
            showAlert(`Google Login Error:  ${e.message}`);
        }

        // try {
        //     const res = await Google.logOutAsync({
        //         accessToken: "ya29.a0AfH6SMB2lZmNl-fy9N6_E1vZESI7dnMyw00lOCnQff7qE5hVZa0jcVIsSUwByOEkxlUz7hiKO8lhMxLH6miod87l6UgLV6Z8FTQQeV9C3fkj36jxlWcaEAdspK9bp2wop3pBXHwCCVgAyGhEdpBsxlbgPYRE",
        //         androidClientId: "799749904006-a9a1e3pprvhcat6crn7931naborir1sm.apps.googleusercontent.com",
        //         iosClientId: "799749904006-1rc41v37lav1i1l8qsl2ju0ppt2ro2g0.apps.googleusercontent.com",
        //         scopes: ['profile', 'email'],
        //     })
        //     console.log(res);
        // } catch (e) {
        //     alert(e.message);
        // }
    }

    return (
        <UserContext.Provider value={{
            currentUser: state.currentUser,
            loadingState,
            initCredential,
            registerUser,
            loginUser,
            logoutUser,
            loginFacebook,
            loginGoogle
        }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserState;