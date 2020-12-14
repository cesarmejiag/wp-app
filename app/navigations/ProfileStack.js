import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from './../screens/Profile/Profile'
import Login from './../screens/Profile/Login'
import RegisterMail from './../screens/Profile/RegisterMail'
import RegisterName from './../screens/Profile/RegisterName'
import RegisterPassword from './../screens/Profile/RegisterPassword'

const Stack = createStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="profile"
                component={Profile}
                options={{ title: 'Mi perfil' }} />
            <Stack.Screen
                name="register-mail"
                component={RegisterMail}
                options={{ title: 'Registro' }} />
            <Stack.Screen
                name="register-name"
                component={RegisterName}
                options={{ title: 'Registro' }} />
            <Stack.Screen
                name="register-password"
                component={RegisterPassword}
                options={{ title: 'Registro' }} />
            <Stack.Screen
                name="login"
                component={Login}
                options={{ title: 'Iniciar sesión' }} />
        </Stack.Navigator>
    );
}

export default ProfileStack
