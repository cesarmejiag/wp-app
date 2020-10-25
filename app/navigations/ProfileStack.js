import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from './../screens/Profile/Profile'
import Login from './../screens/Profile/Login'
import Register from './../screens/Profile/Register'

const Stack = createStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="profile"
                component={Profile}
                options={{ title: 'Mi perfil' }} />
            <Stack.Screen
                name="login"
                component={Login}
                options={{ title: 'Iniciar sesión' }} />
            <Stack.Screen
                name="register"
                component={Register}
                options={{ title: 'Registro' }} />
        </Stack.Navigator>
    );
}

export default ProfileStack
