import React, {useReducer, useContext} from 'react';
import UserReducer from './userReducer';
import UserContext from './UserContext';
import Fetch from "../../utils/Fetch";
import AsyncStorage from '@react-native-async-storage/async-storage'
import GlobalContext from '../Global/GlobalContext';

const KEY = 'credential';

const UserState = (props) => {
    const initialState = {
        currentUser: null
    };
    
    const {showAlert} = useContext(GlobalContext);
    const [state, dispatch] = useReducer(UserReducer, initialState);
    
    const initCredential = async() => {
        try {
            const json = await AsyncStorage.getItem(KEY);
            // console.log("--------------------initCredential--------------------------");
            // console.log(json);
            if (json) {
                // console.log("json");
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

    const saveCredential = async (info, navigation) => {
        try {
            await AsyncStorage.setItem(KEY, JSON.stringify(info));
            dispatch({
                type: 'SET_PROFILE',
                payload: info
            });
            navigation.navigate('user-logged');
        } catch (err) { 
            console.log('Can\'t save user credential', err); 
            showAlert('Can\'t save user credential');
        }
    }

    const clearCredential = async (navigation) => {
        try {
            await AsyncStorage.setItem(KEY, '');
            dispatch({
                type: 'SET_PROFILE',
                payload: null
            });
            navigation.navigate('profile');
        } catch (err) { 
            console.log('Can\'t clear user credential', err);
            showAlert('Can\'t clear user credential');
        }
    }

    const registerUser = (data, navigation) => {
        Fetch.post('register', data, '').then(response => {
            if (response.success) {
                saveCredential(response, navigation);
            } else {
                console.log(response);
                showAlert(response.message);
            }
        })
        .catch(console.log)
        
    };

    const loginUser = (data, navigation) => {
        Fetch.post('login', data, '').then(response => {
            if (response.success) {
                saveCredential(response, navigation);
            } else {
                console.log(response);
                showAlert(response.message);
            }
        })
        .catch(console.log)
       
    };

    const logoutUser = (navigation) => {
        clearCredential(navigation);
    };

    return (
        <UserContext.Provider value={{
            currentUser: state.currentUser,
            initCredential,
            registerUser,
            loginUser,
            logoutUser
        }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserState;